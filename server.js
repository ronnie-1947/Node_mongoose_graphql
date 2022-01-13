import express from "express"
import dotenv from "dotenv"
import { ApolloServer } from "apollo-server-express"
import cookieParser from "cookie-parser"
import path from "path"

import connectDB from "./config/db.js"
import { resolvers, typeDefs } from "./graphql/index.js"

// Load env variables
dotenv.config({ path: "./config/config.env" })
const { PORT, MONGO_URI } = process.env

// Connect to database
connectDB(MONGO_URI)

const app = express()

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    const authCookies = req.cookies["token"] ? `Bearer ${req.cookies["token"]}` : ""
    const auth = req.headers.authorization || authCookies || ""
    const device = req.headers["x-device-type"]

    return {
      auth,
      res,
      req,
      device
    }
  }
})

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: false }))
app.use(cookieParser())

await graphqlServer.start()
graphqlServer.applyMiddleware({ app, path: "/graphql" })
app.use(express.static(path.join(process.cwd(), "public")))

// Start server
const server = app.listen(PORT || 5000, () => {
  console.log(`server running in localhost:${PORT}`)
})

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})
