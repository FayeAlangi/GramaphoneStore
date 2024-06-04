import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import recordsRoute from "./routes/recordsRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//MIDDLEWARE
//parse application/json
app.use(express.json());

//for handling CORS policy
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3000",
//     // methods:["GET,HEAD,PUT,PATCH,POST,DELETE"],
//     // allowedHeaders:"Content-Type"
// }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Hello To GramaphoneStore!");
});

//MIDDLEWARE
app.use("/records", recordsRoute);

const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("App connected to database.");
    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
