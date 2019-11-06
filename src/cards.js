const readlineSync = require("readline-sync");

const enter = readlineSync.question("\nEnter a playing card: ");
const card = enter.toUpperCase();

if (card == "AS") {
  console.log("\nAce of Spades.\n");
}
else if (card == "AC") {
  console.log("\nAce of Clubs.\n");
}
else if (card == "AH") {
  console.log("\nAce of Hearts.\n");
}
else if (card == "KD") {
  console.log("\nKing of Diamonds.\n");
}
else if (card == "KS") {
  console.log("\nKing of Spades.\n");
}
else if (card == "KH") {
  console.log("\nKing of Hearts.\n");
}
else if (card == "KC") {
  console.log("\nKing of Clubs.\n");
}
else if (card == "QD") {
  console.log("\nQueen of Diamonds.\n");
}
else if (card == "QS") {
  console.log("\nQueen of Spades.\n");
}
else if (card == "QH") {
  console.log("\nQueen of Hearts\n");
}
else if (card == "QC") {
  console.log("\nQueen of Clubs.\n");
}
else if (card == "JS") {
  console.log("\nJack of Spades.\n");
}
else if (card == "JD") {
  console.log("\nJack of Diamonds.\n");
}
else if (card == "JH") {
  console.log("\nJack of Hearts.\n");
}
else if (card == "JC") {
  console.log("\nJack of Clubs.\n");
}
else if (card == "TS") {
  console.log("\nTen of Spades.\n");
}
else if (card == "TD") {
  console.log("\nTen of Diamonds.\n");
}
else if (card == "TH") {
  console.log("\nTen of Hearts.\n");
}
else if (card == "TC") {
  console.log("\nTen of Clubs.\n");
}
