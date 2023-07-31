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

// const double = (numbers) => {
//   let result = []
//  for (const num of numbers){
//   result.push(num ** 2)
//  }
//  return result
// }
// console.log(double([1,2,3,4,5,6,7,8,9,10]))

// const HowmanyLetters = (phrase) => {
  
  
  //for of

  //counter
//   let result = 0;

//   for(const letter in phrase){
//     console.log(Number(letter)+1)
//     result = Number(letter)

//   }
//   return {result: phrase.length}

// }

// const phrase = 'Hey there I am wearing a purple tshirt'
// const phrase = prompt('Write your phrase')

// console.log(HowmanyLetters(phrase))


// const sumArray = (number) => {
//   let result = 0;
//   // for loop
//   for(const num of number){
//     console.log(num)
//     result= result + num;
//   }
//   return {result}
// }
// const nums = [1,2,3,4,5,6]
// console.log(sumArray(nums))

// max Number of the array 
// const max = (numbers) => {
//   let result = numbers[0];

//   for(const num of numbers){
//     if(num > result ){
//       result = num
//   }
//   console.log(num)
// }
// return {result}
// }
// console.log(max([1,2,3,4,20,11,15,14,60]))

const letterFrequency = (phrase) => {
  console.log(phrase)
  let frequency = {}
   for(const letter of phrase){
    // console.log(letter)

    if(letter in frequency){
      frequency[letter] ++
      // incremental operators 
      // ++ , -- , += , =-
    }else{
      frequency[letter]=1
    }
   }
   return frequency
}
// console.log(letterFrequency('hello!!! how are you'))

//word frequency
const wordFrequency = (phrase) =>{
  console.log(phrase)
  let frequency = {}
  words = phrase.split(' ')
  // console.log(words)
  // return letterFrequency(words)
//   for (const word of words){
//     console.log(word)
//     if(word in frequency){
//       frequency[word]+=1;
//     }
//     else{
//       frequency[word]= 1 ;
//     }
//   }
//   return frequency
}

// console.log(wordFrequency('lol whatttt how you lol how??'))


//higher order functions 
//map - loops and returns an array
//filter - loops and returns an array to matching conditions
//reduce

// [1,2,3,4,5].map(num => console.log(num * 5))

// let result = [1,2,3,4,5].map(number => number *4)
// console.log(result)

//map
const doubleMap = (numbers) => {
  return numbers.map(numbers => numbers * 2)
}
// console.log(doubleMap([1,2,3]))

//filters
const filter = (numbers , greaterThan) =>{
  let result = []

  for(const number of numbers){
    if(number >= greaterThan){
      result.push(number);
    }
  }
  return result
}
// console.log(filter([1,2,3,4,5,6,7,8,9], 4))

const nums = [1,2,3,4,5,6,7,8]
console.log(nums.filter(nums => nums > 6))