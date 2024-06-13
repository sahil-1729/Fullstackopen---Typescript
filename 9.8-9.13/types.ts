export interface patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export interface diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export type withoutSSN = Omit<patient, "ssn">;

export type postPatient = Omit<patient, "id">;

export enum gender {
  male = "male",
  other = "other",
  female = "female",
}
