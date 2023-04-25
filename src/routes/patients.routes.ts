import { Router } from "express";
import {
  getPatients,
  getPatientsById,
  updatePatients,
  deletePatients,
} from "../controllers/patientsController";

const route = Router();

route.get("/", getPatients);
route.get("/:id", getPatientsById);
route.put("./:id", updatePatients);
route.delete("/", deletePatients);

export default route;
