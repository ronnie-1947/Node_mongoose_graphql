import mongoose from "mongoose"

const connectDB = async (MONGODB_URI) => {

  const conn = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log(`Mongodb connected: ${conn.connection.host}`)
}

export default connectDB
