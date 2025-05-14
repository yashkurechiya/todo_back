import mongoose from "mongoose";
import dotenv from "dotenv";

export const db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "api",
    })


    .then(() =>
        console.log("db connected"))
    .catch((e) => console.log(e))
}

 