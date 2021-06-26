import { DEC_NUM, INC_NUM } from "./actionsTypes";

export const incNumber = () => {
  return {
    type: INC_NUM,
  };
};

export const decNumber = () => {
  return {
    type: DEC_NUM,
  };
};
