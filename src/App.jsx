import React from "react";
import Die from "./components/Die";

const App = () => {
  //function generateAllNewDice() {
  // return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);

  //return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));

  function generateAllNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const num = Math.ceil(Math.random() * 6);
      dice.push(num);
    }
    return dice;
  }

  const [dice, setDice] = React.useState(generateAllNewDice());

  console.log(generateAllNewDice());

  const diceElements = dice.map((num) => {
    return <Die value={num} />;
  });

  return (
    <main className="dice">
      <div className="dice-container">{diceElements}</div>
    </main>
  );
};

export default App;
