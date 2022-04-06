import mongoose from "mongoose";
const connectDB = async (MONGODB_URI) => {
    const conn = await mongoose.connect(MONGODB_URI || '', {
        dbName: 'mongoose'
    });
    console.log(`Mongodb connected: ${conn.connection.host}`);
};
export default connectDB;
