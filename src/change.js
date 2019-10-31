const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const quarter = 0.25;
const dime = 0.1;
const nickel = 0.05;
const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
    // write your code for making change here
}
