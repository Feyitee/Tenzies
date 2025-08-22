import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

const App = () => {
  //function generateAllNewDice() {
  // return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);

  // function generateAllNewDice() {
  //   const dice = [];
  //   for (let i = 0; i < 10; i++) {
  //     const num = Math.ceil(Math.random() * 6);
  //     dice.push(num);
  //   }
  //   return dice;
  // }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
      id: nanoid(),
    }));
  }

  const [dice, setDice] = React.useState(generateAllNewDice());

  console.log(generateAllNewDice());

  const rolldice = function () {
    setDice(generateAllNewDice);
  };

  const diceElements = dice.map((dieObj) => {
    return <Die value={dieObj.value} key={dieObj.id} isHeld={dieObj.isHeld} />;
  });

  return (
    <main className="dice">
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rolldice}>
        Roll Dice
      </button>
    </main>
  );
};

export default App;
