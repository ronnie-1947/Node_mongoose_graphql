import express from "express"
import dotenv from "dotenv"

dotenv.config({ path: "./config/config.env" })

const { PORT } = process.env

const app = express()

app.use("", (req, res) => {
  res.send("Hello world")
})

app.listen(PORT||5000, ()=>{
  console.log(`server running in localhost:${PORT}`)
})
