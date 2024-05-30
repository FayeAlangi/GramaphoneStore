import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import { Record } from "./models/recordModel.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Hello World!");
});

//save a new Record
app.post("/record", async (request, response) => {
  try {
    const newRecord = {
      title: request.body.title ?? undefined,
      artist: request.body.artist ?? undefined,
      releaseDate: request.body.releaseDate ?? undefined,
    };

    if (
      newRecord.title === undefined ||
      newRecord.artist === undefined ||
      newRecord.releaseDate === undefined
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, artist, releaseDate. " +
          "Request body is null or some of its properties are undefined.",
      });
    }

    const record = await Record.create(newRecord);
    return response.status(201).send(record);
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Internal server error. " });
  }
});

app.get("/records", async (request, response) => {
  try {
    const records = await Record.find({});
    return response.status(200).json({ count: records.length, data: records });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.get("/records/:id", async (request, response) => {
    try {
      const {id} = request.params;
      const record = await Record.findById(id);
      return response.status(200).json(record);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  //ROUTE to Update a record
  app.put("/records/:id", async (request,response)=>{
    try{
        if (
            !request.body.title ||
            !request.body.artist ||
            !request.body.releaseDate
          ) {
            return response.status(400).send({
              message: 'Send all required fields: title, author, publishYear',
            });
          }
          const {id} = request.params;
          const result = await Record.findByIdAndUpdate(id,request.body)

          if (!result){
            return response.status(404).json({message : 'Record not found'})
          }
          console.log(request.body)
          return response.status(200).send({message:"Update Successful!"})

    }catch (error){
        response.status(500).send({message : error.message})
    }
  })

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
