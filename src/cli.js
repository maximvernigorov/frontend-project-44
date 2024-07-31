var readlineSync = require('readline-sync');

const showGreeting = () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
};

export default showGreeeting;
