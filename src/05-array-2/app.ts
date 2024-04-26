// Array-Sort-Level-2_1

function reverseString (string: string): string {
    let splitExpression = string.split("")
    let reverseExpression = splitExpression.reverse()
    let joinedExpression = reverseExpression.join("")
    return joinedExpression
}

console.log(reverseString("Jenny"))
console.log(reverseString("Regallager"))
console.log(reverseString("Ella mag alle Bohnen"))


// Array-Sort-Level-2_2

let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];

let sortedArray = numArray.sort(function (a,b) {return a-b})
console.log(sortedArray);



//  lev 1_1

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung = () => {
    languages = languages.sort();
}

sortierung();
console.log(languages);

// unnötig hier eine extra Funktion zu schreiben..

//  lev 1_2

let languagesReverse;

const sortierung2 = () => {
languagesReverse = languages.sort().reverse();
}
  
sortierung2();
console.log(languagesReverse);

// geht auch kürzer ohne die Funktion
// console.log(languages.sort().reverse());

//  lev 1_3

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a, b) => a - b));


//  lev 2_2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(numArray2.sort((a, b) => a - b));
