const { createSlice, configureStore } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter > 0 && state.counter--;
    },
    reset(state, action) {
      state.counter = 0;
    },
    add(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions = counterSlice.actions;
export const store = configureStore({
  reducer: counterSlice.reducer,
});
