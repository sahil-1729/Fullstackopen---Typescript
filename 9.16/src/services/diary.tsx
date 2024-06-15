import axios from "axios";
import { diary } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<diary[]>(`${apiBaseUrl}/patients`);

  return data;
};

// const create = async (object: PatientFormValues) => {
//   const { data } = await axios.post<Patient>(
//     `${apiBaseUrl}/patients`,
//     object
//   );

//   return data;
// };

// export default {
//   getAll, create
// };
