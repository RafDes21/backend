import "../envConfig";
import express from "express";
import cors from "cors";
import route from "./routes/clients.routes";
import bodyParser from 'body-parser';
import dbConfig from "./bd/config";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConfig();

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
