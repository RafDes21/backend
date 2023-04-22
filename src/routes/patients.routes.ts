import { Router } from "express";
import {
  getPatients,
  getPatientsById,
  updatePatients,
  deletePatients,
} from "../controllers/patientsController";

const router = Router();

router.get("/", getPatients);
router.get("/:id", getPatientsById);
router.put("./:id", updatePatients);
router.delete("/patients", deletePatients);

export default router;
