import { GET_USER } from "./ActionType";

const initState = {
  user: null,
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
