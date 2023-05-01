require("dotenv").config();
import express from "express";
const app = express();
import mongoose from 'mongoose';

import { Router, Request, Response } from 'express';

//way to read json
//middleware
app.use(
  express.urlencoded({ extended: true })
);

app.use(express.json());

const route = Router();

//initial route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API criada para Projeto Integrador I - Gabriel Forcellini" })
})

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-rest.h9mcxap.mongodb.net/api-rest?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectado ao mongoDB")
  })
  .catch((e) => console.log(e));