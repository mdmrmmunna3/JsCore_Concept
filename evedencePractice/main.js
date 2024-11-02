// 1.JavaScripting program which will count how many is positive, how many negative ,how many are zero and sum up         numbers for the following array:

let data = [4, 4, -4, -1, 0, -8, 0, 45, 9, 79];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let sum = 0;

for (let num of data) {
    if (num > 0) {
        positiveCount++;
    }
    else if (num < 0) {
        negativeCount++;
    }
    else {
        zeroCount++;
    }
    sum += num; // accumulation / sonjojon
}

// document.write("PositiveCount: ", positiveCount, "<br>");
// document.write("NegativeCount: ", negativeCount, "<br>");
// document.write("ZeroCount: ", zeroCount, "<br>");
// document.write("Total Number of Sum: ", sum, "<br>");


/* 
2.JavaScript program to find largest number among three numbers.
also use for array .
*/

const largestBtn = document.getElementById("findLargestBtn").addEventListener("click", () => {
    const num1 = prompt("Enter Your First Number");
    const num2 = prompt("Enter Your Second Number");
    const num3 = prompt("Enter Your Third Number");

    if (num1 >= num2 && num1 >= num3) {
        window.alert(`${num1} is largest Number`);
    }
    else if (num2 >= num1 && num2 >= num3) {
        window.alert(`${num2} is largest Number`);
    }
    else {
        window.alert(`${num3} is largest Number`);
    }
});

/* 
3.JavaScript program to find smallest number,larger number & sum up array of numbers.
*/

let array1 = [45, 64, 20, 47, 1, 68, 78, 21, 3];
let sum2 = 0;
let smallestNumber = array1[0];
let largestNumber = array1[0];

// for of methode 
for (let arr of array1) {
    if (arr < smallestNumber) {
        smallestNumber = arr;
    }
    else if (arr > largestNumber) {
        largestNumber = arr;
    }
    sum2 += arr;
}

// console.log(`Smallest num is an array : ${smallestNumber}`);
// console.log(`Largest num is an array: ${largestNumber}`);
// console.log(`Total Number of Sum: ${sum2}`);

/* 
4.JavaScript program which takes a score and will print the grade as the following criteria:
        a.If score is greater or equal 90 and less or equal 100 then will print A.
        b.If score is greater or equal 80 and less or equal 89 then will print B.
        c.If score is greater or equal 70 and less or equal 79 then will print C.
        d.If score is greater or equal 60 and less or equal 69 then will print D.
        c. Otherwise will print F.
*/

const chekcGrade = document.getElementById("checkGradeBtn").addEventListener("click", () => {
    const inputNumber = parseFloat(prompt("Enter Your Number "));
    if (inputNumber >= 90 && inputNumber <= 100) {
        window.alert(`Your got ${inputNumber} and your grade point is A`);
    }
    else if (inputNumber >= 80 && inputNumber <= 89) {
        window.alert(`Your got ${inputNumber} and your grade point is B`);
    }
    else if (inputNumber >= 70 && inputNumber <= 99) {
        window.alert(`Your got ${inputNumber} and your grade point is C`);
    }
    else if (inputNumber >= 60 && inputNumber <= 99) {
        window.alert(`Your got ${inputNumber} and your grade point is D`);
    }
    else {
        window.alert(`Your got ${inputNumber} and your grade point is F`);
    }
});

/* 
5.Find out even & odd number.
*/

const checkEvenOdd = document.getElementById("checkEvenOddBtn").addEventListener("click", () => {
    const inputNumber = parseInt(prompt("Enter Your Integer Number"));

    if (isNaN(inputNumber)) {
        window.alert("Please Enter a vaild Number!")
    }
    else {

        if (inputNumber % 2 === 0) {
            window.alert(`${inputNumber} is Even Number`);
        }
        else {
            window.alert(`${inputNumber} is Odd Number`);
        }
    }
});

/* 
  6.Check a number is prime or not.
*/

const checkPrime = document.getElementById("checkPrimeBtn").addEventListener("click", () => {
    let inputNumber = parseInt(prompt("Enter Your Integer Number"));
    let count = 0; // count use to check inputNumber are prime or not.

    if (inputNumber === 0 || inputNumber === 1) {
        window.alert(`${inputNumber} are not prime or composite`);
    }
    else {
        for (let i = 2; i < inputNumber; i++) {
            if (inputNumber % i === 0) {
                count++;
                break;
            }
        }
        if (count === 0) {
            window.alert(`${inputNumber} is prime Number`);
        }
        else {
            window.alert(`${inputNumber} is Not Prime Number`)
        }
    }
});

/* 
7.Javascript program counting vowels, consonants and show the occurrance
*/

const checkVowel = document.getElementById("checkVowelConsBtn").addEventListener("click", () => {
    let inputString = prompt("Enter Your String");
    let vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    let occurrences = {}

    if (!inputString || !isNaN(inputString)) {
        window.alert("Please Enter a valid String!");
        return;
    }

    // itterate inputString value useing for of loop
    for (let char of inputString) {
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase();
        }

        // count vowel and consonant
        if (vowels.includes(char)) {
            vowelCount++;
        }
        else {
            consonantCount++;
        }

        // count occurrences
        occurrences[char] = (occurrences[char] || 0) + 1;
    }

    window.alert(`vowel count number: ${vowelCount} \n consonant count number: ${consonantCount} \n occurrence count number: ${JSON.stringify(occurrences)}`);

});

// just check vowel and consonant

function checkVowelOrNot() {
    let inputString = prompt("Enter Your String");
    let getString = inputString.toLowerCase();
    if (!inputString || inputString.length > 1 || !isNaN(inputString)) {
        document.write("Enter a valid String!");
        return;
    }

    switch (getString) {
        // case (getString === "a" || getString === 'e' || getString === 'i' || getString === 'o' || getString === 'u'):
        //     document.write("is Vowel");
        //     break;
        // default:
        //     document.write("is consonant");
        case 'a': case 'e': case 'i': case 'o': case 'u':
            window.alert(`${getString} is vowel`);
            break;
        default:
            window.alert(`${getString} is consonant`);

    }
}

/* 
8.Sorting three numbers in javaScript(Ascending Order).
*/

function ascendingOrder() {
    let num1 = parseInt(prompt("Enter 1st number"));
    let num2 = parseInt(prompt("Enter 2nd number"));
    let num3 = parseInt(prompt("Enter 3rd number"));
    let temp;

    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num1 > num3) {
        temp = num3;
        num3 = num1;
        num1 = temp;
    }
    if (num2 > num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }

    document.write(`<div style='font-size: 40px;'> Ascending Order:  ${num1}, ${num2}, ${num3}</div>`);
}

function decendingOrder() {
    let num1 = parseInt(prompt("Enter 1st number"));
    let num2 = parseInt(prompt("Enter 2nd number"));
    let num3 = parseInt(prompt("Enter 3rd number"));
    let temp;

    if (num1 < num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num1 < num3) {
        temp = num3;
        num3 = num1;
        num1 = temp;
    }
    if (num2 < num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    document.write(`<div style='font-size: 40px;'> Decending Order:  ${num1}, ${num2}, ${num3}</div>`);
}
