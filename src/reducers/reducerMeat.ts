import { ACTIONTYPE, SELL_MEAT } from "./actionTypes";

const reducerMeat = (state = { numOfMeat: 0 }, action: ACTIONTYPE) => {
  switch (action.type) {
    case SELL_MEAT:
      return {
        ...state,
        numOfMeat: state.numOfMeat - 1,
      };
    default:
      return state;
  }
};

export default reducerMeat;
