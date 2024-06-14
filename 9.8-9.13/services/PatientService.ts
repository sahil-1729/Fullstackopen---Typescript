import patientData from "../data/patients";
import { patient, withoutSSN, postPatient } from "../types";
import { v1 as uuid } from "uuid";

function getPatient(): patient[] {
  return patientData;
}

function getPatientssn(): withoutSSN[] {
  const res = patientData.map((val) => {
    return {
      id: val.id,
      name: val.name,
      dateOfBirth: val.dateOfBirth,
      gender: val.gender,
      occupation: val.occupation,
    };
  });

  return res;
}
function postPatient(entry: postPatient): patient {
  const id = uuid();
  const newRecord = {
    id: id,
    ...entry,
  };

  const res = getPatient();
  res.push(newRecord);

  return newRecord;
}

export default {
  getPatient,
  postPatient,
  getPatientssn,
};
