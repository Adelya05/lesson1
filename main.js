console.log('Hello world')       //функция для вывода значений
//переменные и ключевые слова

//ES5

// var num = 5
// console.log(num);

// var firstName, lastName;

// firstName = 'Adelya'
// lastName = 'Kazybekova'
// console.log (firstName, lastName);


//ES6 let const

// let b = 5
// b = 2
// console.log(b);

// const c = 5
// c = 3
// console.log(c);

//правильные название для перемеррых

let test = 'test'
let $ = 'test'
let $test = 'test'
let test$ = 'test'

let _ = 32
let _test = 32
let test_ = 32
let test_first = 32 
let num23 = 32


//He правильные название для перемеррых
// let 23num =32
// let const = 32
// let my-name

//8 types

const number = 10  //number
console.log(typeof number);

const str = 'hello' //string text
console.log(typeof str);

const boolFalse = false
const boolTrue = true
console.log(typeof boolFalse);

let d
console.log(d);   //undefined

//null
//symbol
//bigInt 

//array
const array = [[1,2,3], 4, 'friend', 'text', true]
console.log(array [3]);
console.log(array.length);

//object

// const obj = {
//     key:'value',
// }

// const obj = {
//     name:'Adelya',
//     age:18 
// }
// console.log(obj.name);

const user = {
    login:'Alex',
    password:' password',
    userName:'Alex',
    followers:[
        {
            userName:'Diana'
        },
        {
            userName:'Diana'
        },

    ], 
     follows:[
        {
            userName:'Diana'
        },
        {
            userName:'Diana'
        },  
    ],
    avatar:'image',
}

console.log(user);
console.log('username:' + user.userName);
console.log('followers:' + user.followers.length);
console.log('follows:' + user.follows.length);

const number1 = 10

//конкантенатция

//  
//инторполяция `${}`
// let message = `hello, ${firstName}`
// console.log(message);

//матем операторы

let a = 12 
let v = 5
let p = 30

p = p + a  //p+=a

// let k = a + v
// let k = a - v
// let k = a * v
// let k = a / v
// let k = a % v
// let k = a ** v


// console.log(k);

//let nan = firstName / a
//console.log(nan);
let e = '32'
console.log(typeof e);

const fullAge = 14
const birthYear = 2008
const currentYear = 2023

const isFullAge = currentYear - birthYear >= fullAge 
console.log(isFullAge);

// == === != !==

// const num1 = '40'
// const num2 = 40
// console.log(num2 != bum1);

// const msg = 'I love you'
// console.log(!msg);

//условные операторы

// const time = prompt('Введите число')

//if (time < 18) {
//     alert ('добрый день')
// }
// else {
//     alert ('добрый вечер')
// }
///////////////////////////////
// if (time < 12) {
//     alert ('доброе утро')
// }else if (time < 18){
//     alert ('добрый день')
// } else if (time < 24) {
//     alert ('добрый вечер')
// }
//////////////////////////////////

// const age = 18
// switch (age) {
//     case 15:
//         console.log('you are teenager');
//         break;
//     case 18:
//         console.log ('you are perfect age');
//     default:
//         console.log('please enter your valid age');        
// }
// console.log(age);

// let isFD = confirm('you are frontend developer')
// alert(isFD)

const firstName = prompt('Your name')
const age = prompt('Your age')
 const answer = `Name: $ {firstName} "/n" Age:${age}`
alert(answer)