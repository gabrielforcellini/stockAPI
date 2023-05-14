require("dotenv").config();
import express from "express";
const app = express();
import mongoose from 'mongoose';
import { createConnection } from 'typeorm';

import { Router, Request, Response } from 'express';

//way to read json
//middleware
app.use(
  express.urlencoded({ extended: true })
);

app.use(express.json());

//solve cors
//app.use(cors());

import { userRouter } from './routes/userRoutes';

//initial route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API criada para Projeto Integrador I - Gabriel Forcellini" })
});

//user api routes
app.use("/user", userRouter);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// mongoose
//   .connect(
//     `mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-rest.h9mcxap.mongodb.net/api-rest?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     app.listen(3000);
//     console.log("Conectado ao mongoDB")
//   })
//   .catch((e) => console.log(e));

createConnection()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida');
  })
  .catch((error) => {
    console.log('Erro ao conectar ao banco de dados', error);
  });