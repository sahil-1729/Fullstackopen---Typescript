import axios from "axios";
import { diary } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<diary[]>(`${apiBaseUrl}/diaries`);

  return data;
};

const create = async (object: diary) => {
  const { data } = await axios.post<diary>(`${apiBaseUrl}/diaries`, object);

  return data;
};

export default {
  getAll,
  create,
};
