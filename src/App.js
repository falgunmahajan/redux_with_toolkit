import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { useState } from "react";
import { actions } from "./store";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <button
        style={{ marginRight: 10 }}
        onClick={() => dispatch(actions.increment())}
      >
        Increment
      </button>
      <button
        style={{ marginRight: 10 }}
        onClick={() => dispatch(actions.decrement())}
      >
        Decrement
      </button>
      <button
        style={{ marginRight: 10 }}
        onClick={() => dispatch(actions.reset())}
      >
        Reset
      </button>
      <div style={{ marginTop: 10 }}>
        Enter the Number to add :
        <input
          style={{ marginLeft: 10 }}
          type="text"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />{" "}
      </div>

      <button
        style={{ margin: 10 }}
        onClick={() => dispatch(actions.add(number))}
      >
        Add By {number}
      </button>
    </div>
  );
}

export default App;
