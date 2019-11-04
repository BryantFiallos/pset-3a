const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const quarters = 0.25;
const dimes = 0.1;
const nickels = 0.05;
const pennies = 0.01;
const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    // print your error message here
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    // print your error message here
    console.log("\nInvalid.");
} else {
  const numberOfQuarters = Math.floor(amount/0.25);
  const numberOfDimes = Math.floor((amount - 0.25*numberOfQuarters)/0.1);
  const numberOfNickels = Math.floor((amount - 0.25*numberOfQuarters-0.1*numberOfDimes)/0.05);
  const numberOfPennies = Math.ceil((amount - 0.25*numberOfQuarters-0.1*numberOfDimes-0.05*numberOfNickels)/0.01);

  console.log("\n" + numberOfQuarters + " quarters, " + numberOfDimes + " dimes, " + numberOfNickels + " nickels, and " + numberOfPennies + " pennies.");
}
