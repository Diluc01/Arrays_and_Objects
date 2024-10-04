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

// console.log(columns);

// third problem
let arr = [];
for (let i = 1; i < cells.length; i++) {
  let obj = {};
  for (let j = 0; j < columns; j++) {
    obj[cells[0][j]] = cells[i][j];
  }
  arr[i - 1] = obj;
}
console.log(arr);

// fourth problem
let poppedArr = arr.pop();

poppedArr[1] = {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
};

let pushedArr1 = poppedArr.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111",
});
