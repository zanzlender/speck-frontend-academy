/**
 * * FIRST TASK
 */

/* printLines();

function printLines() {
  console.log(secondLine);

  var firstLine = "I'm your first line.";
  console.log(firstLine);

  var secondLine = "I'm your seconds line.";
  console.log(secondLine);
}

printLines(); */

/* printLines();

var printLines = () => {
  console.log(secondLine);

  var firstLine = "I'm your first line.";
  console.log(firstLine);

  var secondLine = "I'm your seconds line.";
  console.log(secondLine);
}; */

/* printLines();

const printLines = () => {
  console.log(secondLine);

  let firstLine = "I'm your first line.";
  console.log(firstLine);

  let secondLine = "I'm your seconds line.";
  console.log(secondLine);
};

printLines(); */

/**
 * * SECOND TASK
 */

/* const madeOfGlass = function () {
  let thing = "window";
  thing = "glass";

  console.log(thing);
};

madeOfGlass(); */

/* const madeOfGlass = function () {
  const thing = "window";
  thing = "glass";

  console.log(thing);
};

madeOfGlass(); */

/**
 * * THIRD TASK
 */

const arr1 = [1, 2, 3];
const arr2 = ["abc", 2, "def"];

const arrayMachine = (arrayA, arrayB) => {
  let finalArray = [...arrayA, ...arrayB];

  const finalSet = new Set(finalArray);

  finalArray = Array.from(finalSet);
  finalArray.sort();

  console.log(finalArray);

  finalArray.reverse();
  console.log(finalArray);
};

arrayMachine(arr1, arr2);
