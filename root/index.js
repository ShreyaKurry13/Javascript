/* ***** DO NOT CODE HERE!!! *****
CODE in the file yourPlayground.js
*/

// console.log('hello world')
// console.log('Shreya Kurry')

// // variables (var, const, let)
// let name = 'Peter Pan'
// console.log(name)

// let sentence = 'how are you doing today, nice to see you, hope you have a great day!'

// operators
// fruit = prompt('what is your favorite fruit?')

// console.log(fruit)

// * / ** + -

// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt('tip %?')) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log('tip amount', tipAmount)
// console.log('total', total)
// alert(tipAmount)

// user input

/* data types (strings, numbers)
numbers 👉 1, 5, 10, 100, 2.5
strings 👉 'hello', "what is up"
arrays 👉 []
objects 👉 {}
boolean 👉 true / false (banks)
*/

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1
*/

// Baby weather app (conditionals)
// if rain 👉 'Grab your umbrella ☔'
// else 👉 'Wear your sunglasses 😎'
// let weather = prompt('How is the weather?')

// if (weather == 'rainy') {
//   console.log('Grab your umbrella ☔')
// } else {
//   console.log('Wear your sunglasses 😎')
// }

// conditional operators
// ==, ===, >, <, <=, >=, !=, !==

// Functions
// this is a function called 'sayMyName'
// and it has 0 arguments
// does: it logs out your name to the console
function sayMyName() {
  console.log('Shreya')
}

// sayMyName()

// this is a function called "sayMyName2"
// it has 1 argument called `name`
// does: it logs out your name to console
// function sayMyName2(name) {
//   console.log(name)
// }

// sayMyName2('Kevin')

// function greeting(name) {
  // greet = 'hi ' + name + ', Nice to meet you!'
  // template literals ``
//   greet = `hi ${name}, Nice to meet you!`
//   console.log(greet)
// }

// greeting('Johnny Depp')

// function sum(a, b) {
//   // return
//   return a + b
// }

// num1 = sum(1, 2)
// console.log(num1)

// function calculateFoodTotal(food, tip) {
//   const tipPercentage = tip / 100
//   const tipAmount = food * tipPercentage
//   const total = sum(food, tipAmount)
//   return total
// }

// console.log(calculateFoodTotal(300, 20))

// ES6
// Arrow Functions =>
// arrow function with explicit return
// const sumArrow = (a, b) => {
//   return a + b
// }

// arrow function with implicit return
// IMPORTANT: For implicit return, remove curly braces
// const sumArrow2 = (a, b) => a + b

// console.log(sumArrow2(10, 50))

// Arrays
// const groceries = ['🍌', '🍎', '🍊', '🍐']
// console.log(groceries)

// grab the 2nd index
// console.log(groceries[2])

// Array methods
// groceries.push('🍪')
// console.log(groceries)

// groceries.push('🫐')
// console.log(groceries)

// Array slice
//0 to 2 elements of array
// console.log(groceries.slice(0,2))

// console.log(groceries.slice(3,6))

//arrya methods (slice,push,indexOf.length)
// console.log(groceries.indexOf('🍌'))
// console.log(groceries.length)
 
// const person={
//     name:'John',
//     shirt: 'white'
// }

// access action dot notation
// console.log(person.name)
// console.log(person.shirt)


//access action bracket notation
// console.log(person['name'])

//assign object
// person.phone = '151616868453'
// console.log(person.phone)

// console.log(person)

//es6 arrow function (2 arguements)
// object
// const introducer = (name, shirt) =>{
//    const person={
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities: 50000,
//     netWorth : function() {
//        return this.assets -this.liabilities
//     }
// }
//   const intro = `Hi, my name is ${person.name} and my shirt color is ${person.shirt} and my net worth is $${person.netWorth()} USD` 
//   return intro
// }
// console.log(introducer('shreya','white'))
// console.log(introducer('cutie','yellow'))

//loops
 const fruits = ['🍌', '🍎', '🍊', '🍐','🍎', '🍊', '🍐', '🍎', '🍊', '🍐','🍎', '🍊']
 
//  console.log(fruits[0])
//  console.log(fruits[1])
//  console.log(fruits[2])
//  console.log(fruits[3])

// for (let i=0; i < fruits.length ; i++){
//   console.log(i,fruits[i])
// }

// for (const wait of fruits){
//     console.log(wait)
// }

// const numbers = [1,2,3,4,5,6,7,8,9]
 
// for (let i=0; i<numbers.length ; i++){
//     console.log(numbers[i])
// }


// for (const no of numbers){
//     // console.log(no*2)
//     result.push(no*2)
   
// }

const double = (numbers) => {
  let result = []
 for (const num of numbers){
  result.push(num ** 2)
 }
 return result
}
console.log(double([1,2,3,4,5,6,7,8,9,10]))
