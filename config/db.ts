import mongoose from "mongoose"

const connectDB = async (MONGODB_URI: string|undefined) => {

  const conn: Record<string, any> = await mongoose.connect(MONGODB_URI || '', {
    dbName: 'mongoose'
  })

  console.log(`Mongodb connected: ${conn.connection.host}`)
}

export default connectDB
