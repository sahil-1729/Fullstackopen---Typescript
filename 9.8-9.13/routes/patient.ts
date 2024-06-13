import express from "express";
import patientService from "../services/PatientService";
import { checkReq } from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getPatientssn());
});

router.post("/", (_req, res) => {
  const verifiedReq = checkReq(_req.body);

  try {
    const value = patientService.postPatient(verifiedReq);
    res.send(value);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
