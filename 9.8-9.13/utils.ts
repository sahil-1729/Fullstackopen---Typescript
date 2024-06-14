import { postPatient, gender } from "./types";

//check the unknown is string or not
function isString(param: unknown): param is string {
  return typeof param === "string" || param instanceof String;
}

// check if the given name is string or not
function parseName(name: unknown): string {
  if (!isString(name)) {
    throw new Error("Incorrect Name or missing");
  }
  return name;
}

//check if ssn is string or not
function parseSSN(ssn: unknown): string {
  if (!isString(ssn)) {
    throw new Error("Incorrect ssn or missing");
  }
  return ssn;
}

function parseOccupation(occupation: unknown): string {
  if (!isString(occupation)) {
    throw new Error("Incorrect occupation or missing");
  }
  return occupation;
}

// check if the date is proper
function isDate(date: string): boolean {
  return Boolean(Date.parse(date));
}
function parseDB(dob: unknown): string {
  if (!isString(dob) || !isDate(dob)) {
    throw new Error("Incorrect Date of birth or missing");
  }
  return dob;
}

//check if the gender belongs to the enum - gender
function isGender(gen: string): gen is gender {
  return Object.values(gender)
    .map((v) => v.toString())
    .includes(gen);
}
function parseGender(gender: unknown): string {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect gender or missing");
  }
  return gender;
}

//unknown isliye bc the recieved data can be anything, can't be any either
export function checkReq(body: unknown): postPatient {
  if (!body || typeof body !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in body &&
    "dateOfBirth" in body &&
    "ssn" in body &&
    "gender" in body &&
    "occupation" in body
  ) {
    const parsed = {
      name: parseName(body.name),
      dateOfBirth: parseDB(body.dateOfBirth),
      ssn: parseSSN(body.ssn),
      gender: parseGender(body.gender),
      occupation: parseOccupation(body.occupation),
    };

    return parsed;
  }

  throw new Error("Missing something");
}
