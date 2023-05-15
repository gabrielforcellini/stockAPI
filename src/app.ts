require("dotenv").config();
import express from "express";
const app = express();
import cors from 'cors'

import { Request, Response } from 'express';

//way to read json
//middleware
app.use(
  express.urlencoded({ extended: true })
);

app.use(express.json());

//solve cors
app.use(cors());

import { userRouter } from './routes/userRoutes';

//initial route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API criada para Projeto Integrador I - Gabriel Forcellini" })
});

//user api routes
app.use("/user", userRouter);
