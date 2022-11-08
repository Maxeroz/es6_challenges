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

function encloseInBrackets(str) {
    const solution1 = `(${str})`;
    const solution2 = "(" + str + ")";
    const solution3 = "(".concat(str, ")")
    console.log(solution1);
}

encloseInBrackets("Mother")