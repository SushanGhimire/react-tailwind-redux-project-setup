import { INC_NUM, DEC_NUM } from "../actions/actionsTypes";

const initialState = {
  num: 0,
};

const handleIncDec = (state = initialState, action) => {
  switch (action.type) {
    case INC_NUM:
      return {
        ...state,
        num: state.num + 1,
      };
    case DEC_NUM:
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return state;
  }
};

export default handleIncDec;
