import React from "react";
import Die from "./components/Die";

const App = () => {
  return (
    <main className="dice">
      <div className="dice-container">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  );
};

export default App;
