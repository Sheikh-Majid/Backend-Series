// DB is on other contient platform

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const response =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Connected to DB Successfully !! DB HOST ${response.connection.host}`);
    } catch (error) {
        console.log("Mongodb conecction failed", error);
        process.exit(1);
    }
}
export default connectDB;