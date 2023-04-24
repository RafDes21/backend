import { Router } from "express";
import {
  getPatients,
  getPatientsById,
  updatePatients,
  deletePatients,
  createPatients
} from "../controllers/patientsController";

const router = Router();

router.get("/", getPatients);
router.get("/:id", getPatientsById);
router.put("./:id", updatePatients);
router.delete("/patients", deletePatients);
router.post("/", createPatients)

export default router;
