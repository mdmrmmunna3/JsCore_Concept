/**
 * JavaScript Problem:
 * 1. Which will count how many is positive, how many negative, how many are zero and sum up numbers for the following array.
 * 2. javascript program to find smallest number , largest number & sum up array of numbers
 * 
 *   6.Check a number is prime or not.
       7. Find out even & odd number.
       8.Javascript program counting vowels, consonants and show the occurrance.
       9.Sorting three numbers in javaScript(Desending Order).
       10.Sorting three numbers in javaScript(Ascending Order).
 */
// 1 
let arrayData = [4, 4, -4, -1, 0, -8, 0, 45, 9, 79];
let positivCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let sum = 0;

for (let num of arrayData) {
    if (num > 0) {
        positivCount++;
    }
    else if (num < 0) {
        negativeCount++;
    }
    else {
        zeroCount++;
    }
    sum += num;
}

// console.log("positivCount: " + positivCount);
// console.log("negativeCount: " + negativeCount);
// console.log("zeroCount: " + zeroCount);
// console.log("Total number of sum: " + sum);

// extra : output element value each category 
let data2 = [4, 4, -4, -1, 0, -8, 0, 45, 9, 79];

let positiv = []
let negetive = []
let zero = [];
for (let num of data2) {
    // console.log(num)
    if (num > 0) {
        positiv.push(num);
    }
    else if (num < 0) {
        negetive.push(num);
    }
    else if (num === 0) {
        zero.push(num);
    }

}
// console.log("positiv: " + positiv)
// console.log("negetive: " + negetive)
// console.log("zero: " + zero)

// 2 
let array1 = [45, 64, 20, 47, 1, 68, 78, 21, 3];
let sum2 = 0;
let smallestNumbers = array1[0];
let largestNumbers = array1[0];

if (array1.length === 0) {
    return {
        smallest: null,
        largest: null,
        sum: 0
    };
}
// shortcutWay 
const smallestNumbers1 = Math.min(...array1);
const largestNumbers1 = Math.max(...array1);
const numOfSum = array1.reduce((acc, cur) => acc + cur, 0);
console.log("smallest Number of an array: ", smallestNumbers1);
console.log("largest Number of an array: ", largestNumbers1);
console.log("numOfSum", numOfSum);
// shortcutWay 

// for loop methode 
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] < smallestNumbers) {
//         smallestNumbers = array1[i];
//     }
//     else if (array1[i] > largestNumbers) {
//         largestNumbers = array1[i]
//     }

//     sum2 += array1[i];
// }

// for of loop methode 
for (let arr of array1) {
    if (arr < smallestNumbers) {
        smallestNumbers = arr;
    }
    else if (arr > largestNumbers) {
        largestNumbers = arr;
    }
    sum2 += arr;
}
// console.log("smallest Number of an array: ", smallestNumbers);
// console.log("largest Number of an array: ", largestNumbers);
// console.log("numOfSum: ", sum2)


// prime number 

const CheckPrime = 1;
if (CheckPrime <= 1) {
    console.log(CheckPrime, " is not prime number")
    return false;
}

for (let i = 2; i < CheckPrime; i++) {
    if (CheckPrime % i === 0) {
        console.log(CheckPrime, "is not prime number");
        return false;

    }
    else {
        console.log(CheckPrime, "is prime number");
        return true;
    }
}

// fibonnact series 
const fibo = 8;
let a = 0;
let b = 1;
let nextTram;

for (let i = 2; i <= fibo; i++) {
    nextTram = a + b;
    a = b;
    b = nextTram
}
console.log("fibonnaci series: ", nextTram)