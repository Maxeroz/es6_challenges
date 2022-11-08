// Array Replace

// function arrayReplace(array, elemToReplace, substitutionElem) {
//     // iterate throught list
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === elemToReplace) {
//             array[i] = substitutionElem;
//         }
//     }
//     return array
// }

// console.log(arrayReplace([1,2,1],1,3))

// Case Insensetive Palidrome

// function caseInsensetivePalidrome(str) {
//     const caseLessString = str.toLowerCase();
    // const reversedCaseLessString = caseLessString.split("").reverse().join("");
//     let reversedCaseLessString = "";

//     for ( let i = caseLessString.length - 1; i >= 0 ; i--) {
//         reversedCaseLessString += caseLessString[i];
//     }
    
//     return caseLessString === reversedCaseLessString;
// }

// console.log(caseInsensetivePalidrome("a"))

// Enclose in Brackets

// function encloseInBrackets(str) {
//     const solution1 = `(${str})`;
//     const solution2 = "(" + str + ")";
//     const solution3 = "(".concat(str, ")")
//     console.log(solution1);
// }

// encloseInBrackets("Mother")

// function factorialNumber(num) {
//     for ( let i = num - 1; i >= 1; i-- ) {
//         num = num * i;
//     }
// }
// factorialNumber(5)

// function factorialNumber(num) {
//     let sum = 1;

//     for ( let i = 1; i <= num; i++ ) {
//         sum *= i;
//     }
//     return sum;
// }

// console.log(factorialNumber(5))

// First Digit

// function firstDigit(str) {
//     const strNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     const chars = str.split(" ");

//     for ( const char of chars) {
//         if ( strNums.includes(char)) {
//             // debugger
//             return char;
//         }
//     }
// }

// console.log(firstDigit("3 Hello"))

// function largestNumber(num) {
//     let placeholder = '';

//     for(let i = 0; i < num; i++) {
//         placeholder = placeholder.concat('9');
//         // debugger
//     }
//     return parseInt(placeholder);   
// }

// console.log(largestNumber("2"))

// function largestNumber(num) {
//     const placeholder = "9".repeat(num)

//     return parseInt(placeholder);
// }

// console.log(largestNumber("2"))

// maxMulpiple

function maxMulpiple(divisor, bound) {
    const remainder = bound % divisor;
    debugger
    return bound - remainder;

}

console.log(maxMulpiple(3, 10));