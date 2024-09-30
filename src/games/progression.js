import randomInteger from "../randomnumber.js";
import game from "../index.js";

const progression = (startProgression, stepProgression, lengthProgression) => {
  const progressionArray = [];
  progressionArray[0] = startProgression;
  for (let i = 1; i < lengthProgression; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + stepProgression;
  }
  return progressionArray;
};

const description = "What number is missing in the progression?";
const getGameData = () => {
  const startProgression = randomInteger(1, 100);
  const stepProgression = Math.round(randomInteger(1, 100) / 10 + 1);
  const lengthProgression = 10;
  const hiddenNumberInProgressionArray = Math.round(Math.random(1) * 9);
  const progressionArray = progression(
    startProgression,
    stepProgression,
    lengthProgression,
  );
  const correctAnswer = progressionArray[hiddenNumberInProgressionArray];
  progressionArray[hiddenNumberInProgressionArray] = "..";
  const question = `Question: ${progressionArray.join(" ")}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};

export default () => {
  game(description, getGameData);
};
