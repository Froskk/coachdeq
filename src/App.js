import React from "react";
import { BaseChart } from "./Chart";
import { data } from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BaseChart data={data}></BaseChart>
    </div>
  );
}

export default App;
