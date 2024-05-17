import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config.js/db.js';
import authRoutes from './routes/authRoute.js'


//configure env
// dotenv.config()
dotenv.config()

//database config
connectDB();

//rest obj
const app=express();

//middlewares



const port=process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth",authRoutes)



app.listen(port,()=>{
    console.log(`Example app is running at port ${port}`.bgCyan.white);
});   