import express from "express";
import cors from "cors";
import diagnoseRouter from "./routes/diagnose";
import patientRouter from "./routes/patient";
const app = express();

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.use(express.json());

const PORT = 3003;

app.use("/api/diagnose", diagnoseRouter);
app.use("/api/patients", patientRouter);

app.get("/ping", (_req, res) => {
  console.log("someone pinged huh");
  res.send("pong");
});

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged huh");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log("Server running on port on ", PORT);
});
