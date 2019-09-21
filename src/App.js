import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/reducer/index";
import CounterReducer from "../src/reducer/CounterReducer";
const store = createStore(CounterReducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
