import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  // 等价于vuex/pinia中的state
  initialState: {
    value: 0,
  },
  // 等价于actions
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
  },
});

const { incremented, decremented } = counterSlice.actions;
const reducer = counterSlice.reducer;

export { incremented, decremented };
export default reducer;
