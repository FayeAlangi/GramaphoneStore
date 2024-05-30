import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import recordsRoute from "./routes/recordsRoute.js";

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET,HEAD,PUT,PATCH,POST,DELETE"],
    allowedHeaders:"Content-Type"
}));

app.get("/", (request, response) => {
    console.log(request);
    return response.status(200).send("Hello To GramaphoneStore!");
  });

  //MIDDLEWARE
  app.use('/records',recordsRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database.");
    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
