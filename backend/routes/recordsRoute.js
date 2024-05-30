import express from "express";
import { Record } from "../models/recordModel.js";

const router = express.Router();

//ROUTES

//ROUTE to save a record
router.post("/", async (request, response) => {
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

//ROUTE to get all records

router.get("/", async (request, response) => {
  try {
    const records = await Record.find({});
    return response.status(200).json({ count: records.length, data: records });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const record = await Record.findById(id);
    return response.status(200).json(record);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//ROUTE to Update a record
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.artist ||
      !request.body.releaseDate
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const { id } = request.params;
    const result = await Record.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Record not found" });
    }
    console.log(request.body);
    return response.status(200).send({ message: "Update Successful!" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});
//ROUTE to delete a record
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Record.findByIdAndDelete(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Record not found" });
    }
    console.log(request.body);
    return response
      .status(200)
      .send({ message: "Record Delete Successfully!" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
