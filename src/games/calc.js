import game from "../index.js";

const descrition = 'What is the result of the expression?';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const expression = () => {
  const question = randomInteger(1, 15);
  const currectAnswer = IsEven(question) ? "yes" : "no";

  return [question, currectAnswer];
};

export default () => {
  game(descrition, getQuistionAndAnswer);
};
