import diagnosisData from "../data/diagnosis";
import { diagnosis } from "../types";

// const diagnosisEntries: diagnosis[] = diagnosisData;

function getDiagnosis(): diagnosis[] {
  return diagnosisData;
}

function postDiagnosis() {
  return null;
}

export default {
  getDiagnosis,
  postDiagnosis,
};
