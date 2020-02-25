import * as Types from "./types";

export const createUser = obj => {
  return {
    type: Types.CREATE_USER,
    payload: obj
  };
};