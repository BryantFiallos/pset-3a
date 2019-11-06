const readlineSync = require("readline-sync");

let grade = Number(readlineSync.question("\n Enter a grade: "));

const AMinimum = 90;
const AMaximum = 100;
const BMinimum = 80;
const BMaximum = 89;
const CMinimum = 70;
const CMaximum = 79;
const DMinimum = 60;
const DMaximum = 69;
const FMinimum = 0;
const FMaximum = 59

if (!Number.isNaN(grade)) {
  if (grade >= AMinimum && grade <= AMaximum) {
    console.log("\nYou received an A.");
  }
  else if (grade >= BMinimum && grade <= BMaximum) {
    console.log("\nYou received a B.");
  }
  else if (grade >= CMinimum && grade <=CMaximum) {
    console.log("\nYou received a C.");
  }
  else if (grade >= DMinimum && grade <= DMaximum) {
    console.log("\nYou received a D.");
  }
  else if (grade >= FMinimum && grade <= FMaximum) {
    console.log("\nYou received an F.");
  }
else{
  console.log("\nInvalid.")
}
}
else {
  console.log("\nInvalid.")
}
