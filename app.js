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

function caseInsensetivePalidrome(str) {
    // make str caseless
    const firstString = str.toLowerCase();
    console.log(firstString);

    // compare it forwards and backwards
    const newArray = firstString.split("").reverse().join("");
    console.log(newArray);
    // return result

    return firstString === newArray;
}

console.log(caseInsensetivePalidrome("aabaa"));