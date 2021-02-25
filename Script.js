/*Basic Functions*/
/*------------------------Find the Smallest and the Biggest Numbers-----------------------------*/
let arr = [-1, 10, 45, 3, 0];

function minMax(arr) {
  let Min = arr[0],
    Max = arr[0];
  let array = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > Max) {
      Max = arr[i];
    }
    if (arr[i] < Min) {
      Min = arr[i];
    }
  }
  array.push(Min);
  array.push(Max);
  return array;
}

console.log(minMax(arr));

/*------------------------Find the Smallest and the Biggest Numbers-----------------------------*/
let num1 = 1,
  num2 = "1";
function isSameNum(num1, num2) {
  return num1 === num2;
}
console.log(isSameNum(num1, num2));

/*Arrays*/
/*------------------------Filter String From Numbers-----------------------------*/

arr = [1, 2, 0, "World", "Hello", 15, "&/51", 100, "hgjl", 255, 0, 11, 222];

function filterArray(arr) {
  let array = arr.filter(function (item) {
    if (typeof item === "number") {
      return true; /*Pour pouvoir considérer le 0 qui de base est 'false'*/
    }
  });
  return array;
}

console.log(filterArray(arr));

/*----------------------------------Absolute Sum-------------------------------*/

arr = [1, -5, -2, 1, 4];

function getAbsSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i]);
  }
  return sum;
}

console.log(getAbsSum(arr));

/*----------------------------------Absolute Sum-------------------------------*/
arr = [true, false, false, true, false, true, true, true, true];
arr = [];
function countTrue(arr) {
  Nb_true = 0;
  if (arr.length === 0) return Nb_true;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        Nb_true += 1;
      }
    }
  }
  return Nb_true;
}

console.log(countTrue(arr));

/*Objects*/
/*----------------------------------Printer Levels-----------------------------*/

const inks = {
  Red: 255,
  Green: 122,
  Blue: 150,
};

inks = {
  cyan: 700,
  magenta: 700,
  yellow: 0,
};

function inkLevels(inks) {
  let a = Object.keys(inks);
  let rest = inks[a[0]];
  for (let i = 1; i < a.length; i++) {
    if (inks[a[i]] < rest) {
      rest = inks[a[i]];
    }
  }
  return rest;
}
console.log(inkLevels(inks));

/*----------------------------------Printer Levels-----------------------------*/
const obj = {
  D: 1,
  B: 2,
  C: 3,
};

function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(objectToArray(obj));

/*-------------------------Get Sum of People's Budget-----------------------------*/
arr = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

function getBudgets(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].budget;
  }
  return sum;
}

console.log(getBudgets(arr));

/*-------------------------Ageing the Population-----------------------------*/

const names = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};

let n = 10;

function afterNYears(names, n) {
  let a = Object.keys(names);
  for (let i = 0; i < a.length; i++) {
    names[a[i]] += Math.abs(n);
  }
  return names;
}

console.log(afterNYears(names, n));

/*------------------------International Greetings-----------------------------*/
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
let name = "Sam";

function greeting(name) {
  if (GUEST_LIST[name] === undefined) {
    return "Hi! I'm a guest.";
  } else {
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
  }
}
console.log(greeting(name));
