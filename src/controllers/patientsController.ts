import { Request, Response } from "express";
import { Patients } from "../models/patientsModel";

export const getPatients = async (_req: Request, res: Response) => {
  try {
    const patients = await Patients.find().sort({ date: -1 });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients" });
  }
};

export const getPatientsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await Patients.findById(id);
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: "patient not exist" });
  }
};

export const updatePatients = async (req: Request, res: Response) => {
  console.log(req.params.id);
  console.log(req.body);
  
  
  try {
    const { id } = req.params;
    const { name, document, address, phone } = req.body;
    await Patients.updateOne(
      { _id: id },
      { $set: { name, document, address, phone } }
    );
    res.status(200).send();
  } catch (error) {
    res.status(404).json({ message: "patient not exist" });
  }
};

export const deletePatients = async (req: Request, res: Response) => {
  
  const ids: string = req.query.ids as string;
  try {
    if (ids) {
      await Patients.deleteMany({ _id: { $in: ids.split(",") } });
      res.status(200).send();
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "has occurred while deleting the patient" });
  }
};

export const createPatients = async (req: Request, res: Response) => {
  try {
    const client = req.body;
    const newClient = new Patients(client);
    await newClient.save();
    res.send(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error to create a patient" });
  }
};
