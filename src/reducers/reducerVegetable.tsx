import { ACTIONTYPE, SELL_VEGETABLE } from "./actionTypes";

const reducerVegetable = (
  state = { numOfVegetable: 0 },
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case SELL_VEGETABLE:
      return {
        ...state,
        numOfVegetable: state.numOfVegetable - 1,
      };
    default:
      return state;
  }
};

export default reducerVegetable;
