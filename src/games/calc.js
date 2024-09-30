import game from "../index.js";

import randomInteger from "../randomnumber.js";

const calculationСorrectAnswer = (num1, action, num2) => {
  let result = 0;
  switch (action) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      console.log("error");
  }
  return result;
};

const description = "What is the result of the expression?";
const getGameData = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const arrAction = ["+", "-", "*"];
  const action = arrAction[Math.floor(Math.random() * arrAction.length)];
  const correctAnswer = calculationСorrectAnswer(num1, action, num2);
  const question = `${num1} ${action} ${num2}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  game(description, getGameData);
};
