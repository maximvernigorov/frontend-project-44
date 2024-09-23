import game from "../index.js";

const descrition = 'Answer "yes" if the number is even, otherwise answer "no".';

const IsEven = (num) => num % 2 === 0;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getQuistionAndAnswer = () => {
  const question = randomInteger(1, 15);
  const currectAnswer = IsEven(question) ? "yes" : "no";

  return [question, currectAnswer];
};

export default () => {
  game(descrition, getQuistionAndAnswer);
};
