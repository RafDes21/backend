import mongoose from "mongoose";

const patientsCollection = "patients";

const patientsSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  document: { type: String, required: true },
  address: { type: String, required: true, max: 100 },
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Patients = mongoose.model(patientsCollection, patientsSchema);
