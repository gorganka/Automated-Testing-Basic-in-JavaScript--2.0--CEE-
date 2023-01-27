//Create a car object, add a color property to it with the value equals 'black'
const car = {
    color: 'black',
}
//Change the color property of the car object to 'green'
car.color = 'green';

//Add the power property to the car object, which is a function and displays the engine power to the console

car.carPower = function () {
    console.log('power engine: 110 Hp');
};
car.carPower();


// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

function sum(pears, apples) {
    return pears + apples;
}
const pears = 11;
const apples = 15;
const result = sum(pears, apples);
console.log("pears:", pears, "; apples: ", apples, '; summary:', result);

//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

//install promt-sync. Input command node "flie_name" to execute this function
const prompt = require('prompt-sync')();
const name = 'Gorganka';
function myName() {
    let person = prompt("Please enter your name: ");
    if (person === name) {
      console.log("hello " + person);
      
    } else {
        console.log('There is no such name');
    }
}
myName();

//Write a function for calculating the type of argument and type output to the console
function myCalc(calc) {
    console.log("Type of argument is:", typeof calc);
}

myCalc(1);
myCalc(true);
myCalc('Hello World!');

// Write a function that determines whether a number is prime or not
function primeNum (num) {
    if (num <1) {
        console.log("Choose other number.");
    } else if(num==1 || num==2){
        console.log("Prime");
    
    } else if (num%2 == 0) {
        console.log('Not prime');
    } else if (num/3 != num && num%3 == 0) {
        console.log('Not prime');
    } else if (num/5 != num && num%5 == 0) {
        console.log('Not prime');
    } else if (num/7 != num && num%7 == 0) {
        console.log('Not prime');
    } else {
        console.log("Prime");
    }
}

const prompt = require('prompt-sync')();
const num = parseInt(prompt("Enter your number: "));
primeNum(num);
