import React from "react";
import { makeEntries } from "./api/_utils/makeEntries";
import { BaseChart } from "./Chart";
import "./App.css";

const data = makeEntries();
console.log(data);

function App() {
  return (
    <main className="App">
      <BaseChart data={data} loading={false}></BaseChart>
    </main>
  );
}

export default App;
