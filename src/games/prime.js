import randomInteger from '../randomnumber.js';
import game from '../index.js';

const isPrimeNumber = (number) => {
  if ((number % 2 === 0 && number > 3) || number === 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const number = randomInteger(1, 100);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => {
  game(description, getGameData);
};