import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errormiddleware } from "./middlewares/error.js";

export const app = express();

config({
    path:'./database/config.env'
});
//Middleware
app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,

})
);



app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);


app.get("/", (req, res) => {
    res.send('Hello');
});

// using error middleware from middlewares
app.use( errormiddleware) ;

