'use strict'
// Q1
let user = {};
user.name="John";
user.surname="Smith";
user.name="Pete";
delete user.name
console.log(user)

// Q2
let isEmpty = function (obj){
  for (let property in obj) {
    return false;
  }
  return true;
};

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Q3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key]
  }
  return sum
}

console.log(sumSalaries(salaries))


// Q4
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu)
multiplyNumeric(menu);
console.log(menu)

function multiplyNumeric(input) {
  for (let key in input) {
    if(typeof(input[key]) == 'number') {
      input[key] *= 2
    }
  }
}


// Object Methods
let reuser = {
  name: "John",
  age: 30,
  // Function belongs to an object?  THen it's a method!
  complain() {
    alert("Brexit is a stupid idea")
  }
};

reuser.saysHi = function() {
  alert(`Hello ${this.name}`);
}

reuser.saysHi();
reuser.complain();

let trader = { name : "trader" };
let admin = { name : "Admin" };

function greet() {
  console.log( this.name )
}

trader.f = greet
admin.g = greet

trader.f();
admin.g();

admin['g']();


// Object Methods Exercise
let calculator = {
  read() {
    this.first = +prompt("Give ye the first:")
    this.second = +prompt("Give ye the second:")
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
