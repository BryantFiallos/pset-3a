const readlineSync = require("readline-sync");

const card = readlineSync.question("\nEnter a playing card: ");
const cardType = card.toUpperCase();

if (cardType == "AS") {
  console.log("\nAce of Spades.");
}
else if (cardType == "AC") {
  console.log("\nAce of Clubs.");
}
else if (cardType == "AH") {
  console.log("\nAce of Hearts.");
}
else if (cardType == "KD") {
  console.log("\nKing of Diamonds.");
}
else if (cardType == "KS") {
  console.log("\nKing of Spades.");
}
else if (cardType == "KH") {
  console.log("\nKing of Hearts.");
}
else if (cardType == "KC") {
  console.log("\nKing of Clubs.");
}
else if (cardType == "QD") {
  console.log("\nQueen of Diamonds.");
}
else if (cardType == "QS") {
  console.log("\nQueen of Spades.");
}
else if (cardType == "QH") {
  console.log("\nQueen of Hearts");
}
else if (cardType == "QC") {
  console.log("\nQueen of Clubs.");
}
else if (cardType == "JS") {
  console.log("\nJack of Spades.");
}
else if (cardType == "JD") {
  console.log("\nJack of Diamonds.");
}
else if (cardType == "JH") {
  console.log("\nJack of Hearts.");
}
else if (cardType == "JC") {
  console.log("\nJack of Clubs.");
}
else if (cardType == "TS") {
  console.log("\nTen of Spades.");
}
else if (cardType == "TD") {
  console.log("\nTen of Diamonds.");
}
else if (cardType == "TH") {
  console.log("\nTen of Hearts.");
}
else if (cardType == "TC") {
  console.log("\nTen of Clubs.");
}
else if (cardType == "9S") {
  console.log("\nNine of Spades.");
}
else if (cardType == "9D") {
  console.log("\nNine of Diamonds.");
}
else if (cardType == "9H") {
  console.log("\nNine of Hearts.");
}
else if (cardType == "9C") {
  console.log("\nNine of Clubs.");
}
else if (cardType == "8S") {
  console.log("\nEight of Spades.");
}
else if (cardType == "8D") {
  console.log("\nEight of Diamonds.");
}
else if (cardType == "8H") {
  console.log("\nEight of Hearts.");
}
else if (cardType == "8C") {
  console.log("\nEight of Clubs.");
}
else if (cardType == "7S") {
  console.log("\nSeven of Spades.");
}
else if (cardType == "7D") {
  console.log("\nSeven of Diamonds.");
}
else if (cardType == "7H") {
  console.log("\nSeven of Hearts.");
}
else if (cardType == "7C") {
  console.log("\nSeven of Clubs.");
}
else if (cardType == "6S") {
  console.log("\nSix of Spades.");
}
else if (cardType == "6D") {
  console.log("\nSix of Diamonds.");
}
else if (cardType == "6H") {
  console.log("\nSix of Hearts.");
}
else if (cardType == "6C") {
  console.log("\nSix of Clubs.");
}
else if (cardType == "5S") {
  console.log("\nFive of Spades.");
}
else if (cardType == "5D") {
  console.log("\nFive of Diamonds.");
}
else if (cardType == "5H") {
  console.log("\nFive of Hearts.");
}
else if (cardType == "5C") {
  console.log("\nFive of Clubs.");
}
else if (cardType == "4S") {
  console.log("\nFour of Spades.");
}
else if (cardType == "4D") {
  console.log("\nFour of Diamonds.");
}
else if (cardType == "4H") {
  console.log("\nFour of Hearts.");
}
else if (cardType == "4C") {
  console.log("\nFour of Clubs.");
}
else if (cardType == "3S") {
  console.log("\nThree of Spades.");
}
else if (cardType == "3D") {
  console.log("\nThree of Diamonds.");
}
else if (cardType == "3H") {
  console.log("\nThree of Hearts.");
}
else if (cardType == "3C") {
  console.log("\nThree of Clubs.");
}
else if (cardType == "2S") {
  console.log("\nTwo of Spades.");
}
else if (cardType == "2D") {
  console.log("\nTwo of Diamonds.");
}
else if (cardType == "2H") {
  console.log("\nTwo of Hearts.");
}
else if (cardType == "2C") {
  console.log("\nTwo of Clubs.");
}
else {
  console.log("\nInvalid");
}
