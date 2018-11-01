'use strict'

// Object Deconstruction Exercise 2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
}

let num = 0b10101010
alert( num.toString(2) );

let floaty = 634.5789
console.log(floaty.toFixed(2));
console.log(3.14555698.toFixed(2));
console.log(3..toFixed(2));

console.log( parseInt('6345789 pounds'))
console.log( parseFloat('6345789.6345789 kg'))

let a = Math.random();
let b = Math.random();
let c = Math.random();
let max = Math.max(a,b,c);
let min = Math.min(a,b,c);
console.log( `${a}, ${b}, ${c}`);
console.log( `Max:${max}, Min:${min}`);



// Exercise 1
let x = +prompt("First?", 0);
let y = +prompt("Second?", 0);
alert(x + y);

// Exercise 2
function readNumber(){
  let a;

  while (!isFinite(a)) {
    a = prompt("Enter ye:");

    if (a == "" || a == null) {
      return null;
    }

  }
  return a;
}

readNumber();


//Arrays Exercise 1
let styles = ["Jazz", "Blues"];
styles.push("Rock and Roll");
styles[Math.floor(styles.length -1 /2)] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");


function sumInput() {
  let numbers = [], input;

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let total = 0;
  for (let x of numbers) {
    total += x
  }
  return total
}

console.log(sumInput())


let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
