import axios from "axios";
import { diary, newDiaryEntry } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<diary[]>(`${apiBaseUrl}/diaries`);

  return data;
};

const create = async (object: newDiaryEntry) => {
  const { data } = await axios.post<diary>(`${apiBaseUrl}/diaries`, object);
  // console.log("post result ", data);
  return data;
};

export default {
  getAll,
  create,
};
