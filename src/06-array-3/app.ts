// Array-filter-Level-1_2

const heroArr: (string | null | undefined)[] = ["Superman", "Batman", undefined, undefined, "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", undefined, null];

let filteredArr = heroArr.filter(movie => movie !== null && movie !== undefined)

console.log(filteredArr);


// Array-Iteration-Level-1_8

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = zahlen.filter(zahl => zahl % 2 === 0)
console.log(even);

let odd = zahlen.filter(zahl => zahl % 2 !== 0)
console.log(odd);


// forEach

// lev 1_1

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let getraenkeSort = getraenke.sort();
console.log(getraenkeSort);

// ENTWEDER SO:

// getraenkeSort.forEach((elm) => {
//     console.log(elm);
//     document.write("<p>" + elm + "</p>");
// });


// ODER SO:

const myDrinks = (elm: string) => {
    console.log(elm);
    document.write("<p>" + elm + "</p>");
}

getraenkeSort.forEach(myDrinks);



// lev 1_5

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

// entweder so:
// Funktion schreiben für ein Element a

const rechnung = (a: number) => {
    if (a % 3 === 0){
        console.log(a + 100);
        return a + 100;
    } else {
        return a;
    }
}

// Funktion für jedes Element des Arrays anwenden und als neues Array speichern
let checkNumberNew = checkNumber.map(rechnung);
// altes  und neues Array zum Vergleich in Konsole ausgeben
console.log(checkNumber);
console.log(checkNumberNew);

// oder so:
// für jedes Element des Arrays folgende Funktion ausführen und das alles in einem neuen Array speichern
let neuesArray = checkNumber.map((a) => {
    if (a % 3 === 0){
        console.log(a + 100);
        return a + 100;
    } else {
        return a;
    }
});

console.log(neuesArray);


// lev 1_6


let album = [
    "holidays.jpg",
 "Restaurant.jpg",
 "desktop",
 "rooms.GIF",
 "DOGATBEACH.jpg",
];

// zuerst als neues Album mit kleinbuchstaben speichern

let album2 = album.map((elm) => elm.toLowerCase());
console.log(album2);

// Funktion mit if else statements um die Endungen abzufragen 

const bearbeitung = (dateiname: string) => {
    if(dateiname.includes(".jpg") == true){
        console.log(dateiname.replace(".jpg", ""));
        return dateiname.replace(".jpg", "");
    } else if (dateiname.includes(".gif") == true){
        console.log(dateiname.replace(".gif", ""));
        return dateiname.replace(".gif", "");
    } else {
        console.log("invalid");
        return "invalid";
    }
}

// Funktion für jedes Element anwenden
album2.map(bearbeitung);

// als neues Array speichern
let albumNew = album2.map(bearbeitung);
console.log(albumNew);




// lev 1_2

let getraenke2 = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]

let upperDrinks = getraenke2.map((drink) => drink.toUpperCase());
console.log(upperDrinks);


// lev 1_3

let array2 = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];

const rechnen = (a: number) => {
return a * 2;
}

let zwischenergebnis = array2.map(rechnen);
console.log(zwischenergebnis);
console.log(zwischenergebnis.sort((a, b) => a - b));

// oder so:

// let kurzeForm = array2.map((a) => {return a * 2;}).sort((a, b) => a - b);
// console.log(kurzeForm);


// lev 1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const umrechnungCelsius = (a: number) => {
let b = Math.round((a - 32) / 1.8);
console.log(b);
return b;
}

let celsius = fahrenheit.map(umrechnungCelsius);
console.log(celsius);

// oder so:

// let celsiusKurz = fahrenheit.map((a: number) => {
//   let b = Math.round((a - 32) / 1.8);
//   console.log(b);
//   return b;
// })

// console.log(celsiusKurz);