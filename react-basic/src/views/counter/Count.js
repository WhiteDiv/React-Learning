import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  increaseFlatNumber,
  increaseFlatNumberAsync,
} from "./counterSlice";
import { useState } from "react";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementedValue, setIncrementedValue] = useState(3); // 定义响应式变量
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementedValue}
          onChange={(e) => setIncrementedValue(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(increaseFlatNumber(Number(incrementedValue) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(increaseFlatNumberAsync(Number(incrementedValue) || 0))
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
