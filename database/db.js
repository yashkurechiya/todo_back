import mongoose from "mongoose";
import dotenv from "dotenv";

export const db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "api",
    })


    .then((c) =>
        console.log(`db connected  to ${c.connection.host}`))
    .catch((e) => console.log(e))
}

 