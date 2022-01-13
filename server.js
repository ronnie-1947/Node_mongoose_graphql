import express from "express"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

// Load env variables
dotenv.config({ path: "./config/config.env" })
const { PORT, MONGO_URI } = process.env

// Connect to database
connectDB(MONGO_URI)

const app = express()

app.use("", (req, res) => {
  res.send("Hello world")
})

// Start server
const server = app.listen(PORT || 5000, () => {
  console.log(`server running in localhost:${PORT}`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise)=>{
  console.error(`Error: ${err.message}`)
  server.close(()=> process.exit(1))
})