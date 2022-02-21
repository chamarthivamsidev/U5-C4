import { ADD_DATA } from "./actionTypes";

let init = {
  data: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      let { data } = { ...state };
      let x;
      if (data.length === 0) {
        x = { ...state, data: payload };
      } else {
        x = { ...state, data: [...state.data, payload] };
      }
      return x;
    default:
      return state;
  }
};
