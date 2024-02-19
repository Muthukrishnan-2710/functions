// Named Function Declarations:
// add
function add(x,y){
    return x +y;
}
console.log(add(10 ,10));

// subraction

function sub(x,y){
    return x -y;
}
console.log(sub(25,10));

// mulitipication

function mul(x,y){
    return x * y;
}
console.log(mul(10,10));

// Divide

function div(x,y){
    return x / y;
}

console.log(div(10,10));

// realworld example;

function calculatetotalprice (price,taxrate){
    const tax = price * (taxrate/100);
    return price + tax
}

console.log(calculatetotalprice(10,2))


function calculateuberprice (baseprice , fixedprice){
    const fixedprice1 =baseprice * (fixedprice/1.149);
    return baseprice + fixedprice1
}

console.log(calculateuberprice(12,35))
// function expressions;

const mulitipy =function(x,y){
    return x * y;
}
console.log(mulitipy(10,100));

const greet = function(name){
    console.log(`hello, ${name}`);
}

// Arror function

function square(x) {
    return x * x;
}

console.log(square(10));


// Constructor Functions:

function person(name , age){
    this.name = name;
    this.age = age;
}

const person1=new person('muthukrishnan', 26);
console.log(person1.name);
console.log(person1.age);



// Named Function Declarations:

// Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumofarray(number){
    return number.reduce((acc ,curr) => acc + curr ,0)
}
console.log(sumofarray([1,2,3,4,5]));

let Sum = [10,20,30,40]
let calculateSum =Sum.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0)
console.log(calculateSum);

// Create a function that checks if a given string is a palindrome.

function ispalidrome(str){
    return str === str.split('').reverse().join('')
}

console.log(ispalidrome('radar'));

// Implement a function that calculates the factorial of a given non-negative integer.


function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Function Expressions:

// Write a function that filters an array of numbers and returns only the even numbers.
 const evennumber = function(number){
    return number.filter(num => num % 2===0)
 }
 console.log(evennumber([1,2,3,4,5,6]))

let num = [1,2,3,4,5,6,7,8,9,10];
let filternum = num.filter(function(element){
    return element %2 ===0;
})
console.log(filternum);
// Create a function that takes a string as input and returns the string reversed.
 const reversestring = function(str){
    return str = str.split('').reverse().join('')
 }
 console.log(reversestring('hello'));
// Implement a function that computes the area of a circle given its radius.

const calculateCircleArea = function(radius) {
    return Math.PI * radius ** 2;
};
console.log(calculateCircleArea(5)); // Output: 78.53981633974483

// Anonymous Functions:
// Use an anonymous function as a callback to sort an array of strings alphabetically.
var array = ["muthu","varun" ,"balaji","krishnan"];
array.sort(function(a,b){
    return a.localeCompare(b);
})
console.log(array);
// Implement an anonymous function to handle the click event of a button on a webpage.
var button =document.getElementById('myButton');
button.addEventListener('click',function(){
    console.log('hey , You clicked the button just now@')
});
// Use an anonymous function to filter an array of objects based on a specific condition.

let people =[
    {name: 'muthu', age: 26},
    {name: 'krishnan',age:27},
    {name: 'balaji' , age: 28},
    {name: 'varun', age: 29}
];

let filterpeople =people.filter(function(person){
    // return person.age > 28;// greaterthan 28 age
    return person.age < 28; // lesser than 28 age
});

console.log(filterpeople);

// Arrow Functions (ES6):

// Rewrite a given function expression using arrow function syntax.
// Use arrow functions to refactor a callback function used in the Array.map() method.
// Implement a function that takes an array of numbers and returns a new array containing their squares using arrow functions.

// Immediately Invoked Function Expressions (IIFE):

// Create an IIFE to initialize and populate an array with random numbers.
// Implement an IIFE to manage a counter that increments every second.
// Use an IIFE to encapsulate code that needs to run immediately but should not affect the global scope.

// Generator Functions (ES6):

// Write a generator function that generates the Fibonacci sequence up to a given number of terms.
// Implement a generator function that yields random numbers within a specified range.
// // Create a generator function that iterates over the characters of a given string.

// Constructor Functions:

// Define a constructor function for a Book object with properties like title, author, and publication year.
// Create methods within a constructor function to calculate the total price of a shopping cart.
// Use constructor functions to create instances of complex objects like a car, with properties such as make, model, and year.