import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "./store/modules/counter";

function App() {
  const { value } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decremented())}>-</button>
      {value}
      <button onClick={() => dispatch(incremented())}>+</button>
    </div>
  );
}

export default App;
