import readlineSync from 'readline-sync';
var readlineSync = require('readline-sync');
export const showGreeting = () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
};
