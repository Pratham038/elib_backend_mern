import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", ()=>{console.log("Connected successfully ")});

    mongoose.connection.on("error", (err)=>{console.log("Connected error" , err)});

    await mongoose.connect(config.databaseUrl as string);

} catch (error) {
    console.log("Failed to connect , ", error);
    process.exit(1);
  }
};
export default connectDB;
