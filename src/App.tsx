import { useReducer, useCallback } from "react";
import "./App.css";
import rootReducer from "./reducers/index";
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes";

function App() {
  const initialState = {
    reducerMeat: { numOfMeat: 30 },
    reducerVegetable: { numOfVegetable: 25 },
  };
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={useCallback(() => {
            dispatch({ type: SELL_MEAT });
          }, [])}
        >
          Sell meat
        </button>
        Today's Meat: {state.reducerMeat.numOfMeat}
        <button
          onClick={useCallback(() => {
            dispatch({ type: SELL_VEGETABLE });
          }, [])}
        >
          Sell vegetable
        </button>
        Today's Vegetable: {state.reducerVegetable.numOfVegetable}
      </header>
    </div>
  );
}

export default App;
