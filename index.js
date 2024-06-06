import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import dbConnection from './db/db.js';
import employeeRouter from './routes/employeeRoutes.js'

const app = express();

dotenv.config();
dbConnection();

app.use(cors({
    origin: "*",
  }))
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  app.use("/api", employeeRouter);

app.post('/',()=>{
    console.log("hello world")
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`);
  });