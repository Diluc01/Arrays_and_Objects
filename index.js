// First problem
let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let arrStr = str.split("\n");
// console.log(arrStr);
// console.log(arrStr[0]);
let cells = [];

for (let i = 0; i < arrStr.length; i++) {
  cells[i] = arrStr[i].split(",");
}

// console.log(cells);

// second problem

let columns = cells[0].length;

console.log(columns);

// third problem
for (let i = 0; i < cells.length; i++) {
  let obj = {};
  for (let j = 0; j < columns.length; j++) {}
}
