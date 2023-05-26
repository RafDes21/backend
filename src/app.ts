import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patients.routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/patients", patientRoutes);

export default app;
