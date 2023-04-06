import { GET_USER } from "./ActionType";

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};
