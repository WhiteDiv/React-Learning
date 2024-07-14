// createSlice能让我们像pinia的defineStore一样去定义store
import { createSlice } from "@reduxjs/toolkit";

// 在redux中，store又叫做slice
export const counterSlice = createSlice({
  name: "counter",

  // 等价于state
  initialState: {
    value: 0,
  },

  // 等价于actions
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    increaseFlatNumber(state, action) {
      // action.payload即为传来的参数
      state.value += action.payload;
    },

    // 这种写法是不允许的。reducer内严禁使用异步操作
    // increaseFlatNumberAsync(state, action) {
    //   setTimeout(() => {
    //     state.value += action.payload;
    //   }, 1000);
    // },
  },
});

// 源自于redux中selector这一概念，可以避免重复读取，类似于pinia中的getter
export const selectCount = (state) => state.counter.value;

// 导出reducers中的方法 - counterSlice.actions中包含了reducers中的所有方法
export const { increment, decrement, increaseFlatNumber } =
  counterSlice.actions;

// 利用thunk的形式完成异步函数
export const increaseFlatNumberAsync = (value) => (dispatch) => {
  setTimeout(() => {
    dispatch(increaseFlatNumber(value));
  }, 1000);
};

// 导出整个模块，因为需要像pinia一样注册到index中
export default counterSlice.reducer;
