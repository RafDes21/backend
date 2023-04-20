import { Router } from "express";
import { Client } from "../models/client";

const route = Router();

route.get("/clients", async (_req, res) => {
  const data = await Client.find().sort({ date: -1 });

  res.json(data);
});

route.get("/clients/:id", async (req, res) => {
  const { id } = req.params;

  const data = await Client.findById(id);
  res.json(data);
});

route.post("/clients", async (req, res) => {
  const client = req.body;
  const newClient = new Client(client);
  await newClient.save();
  res.send();
});

route.put("/client/:id", async (req, res) => {
  const { id } = req.params;
  const { name, document, address, phone } = req.body;
  await Client.updateOne(
    { _id: id },
    { $set: { name, document, address, phone } }
  );
  res.status(200).send();
});

route.delete("/client", async (req, res) => {
  const ids: string = req.query.ids as string;

  if (ids) {
    await Client.deleteMany({ _id: { $in: ids.split(",") } });
  }
  return res.status(200).send();
});

export default route;
