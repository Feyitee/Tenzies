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

  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function hold(id) {
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
};

export default App;
