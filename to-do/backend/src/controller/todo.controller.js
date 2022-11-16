import express, { Router } from "express";
import Todo from "../models/todo.model.js";
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const data = await Todo.find().lean().exec();
    console.log("here");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("", async (req, res) => {
  try {
    const data = await Todo.create(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
});

router.delete("", async (req, res) => {
  try {
    const data = await Todo.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).send("deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
