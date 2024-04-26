// OBJECTS --------------------------------------------------------------------------

// lev 1_2 ----------------------------------------------------

const person1 = {
  name: "Jenny",
  alter: 31,
  sagNameAlter() {
      return `${this.name}: ${this.alter}`;
  }
  // sagNameAlter: () => {
  //     return `${person1.name}: ${person1.alter}`;
  // }
}

console.log(person1.sagNameAlter());



// lev 1_4 ----------------------------------------------------

let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: [
      "Gipsy",
      "Nala",
      "Dinky"
    ]
  },
  {
    tiertyp: "Hunde",
    names: [
      "Knöpfchen",
      "Pinselchen",
      "Droopy"
    ]
  }
];

// Nala
console.log(unsereHaustiere[0].names[1]);
// Droopy
console.log(unsereHaustiere[1].names[2]);

// alle Namen
console.log(unsereHaustiere[0].names , unsereHaustiere[1].names);

// oder so:
// unsereHaustiere.forEach(tiertyp => {
//     console.log(tiertyp.names);
// })

// Namen ändern
unsereHaustiere[0].names = ["Balu", "Snoopy"];
console.log(unsereHaustiere[0].names);

// oder so:
// unsereHaustiere[0]["names"] = ["Balu", "Snoopy"];
// console.log(unsereHaustiere[0]["names"]);



// lev 1_5 ----------------------------------------------------

let unserLager = {
  schreibtisch: {
    schublade: "Hefter"
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse"
    },
    "Untere Schublade": "Cola"
  }
};

// Geheimnisse
console.log(unserLager["schrank"]["Obere Schublade"]["Ordner2"]);
// Cola
console.log(unserLager["schrank"]["Untere Schublade"]);
// Hefter
console.log(unserLager["schreibtisch"]["schublade"]);



// lev 1_7 ----------------------------------------------------

let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
  }
];

myMusic.forEach(album => {
  console.log(album.artist);
  console.log(album.title);
  console.log(album.medium);

  if(album.release_year > 1975){
      console.log(album.release_year);
  }
})



// lev 1_8 ----------------------------------------------------

let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5"
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"]
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5"
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"]
  }
];

studentData.forEach(student => {
  console.log(student.name);
  console.log(student.coop);
  console.log(student.address.city);
  console.log(student.emails);
})



// lev 2_1 --------------------------------------------------------------------------

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

// names

let metalNames: string[] = [];

edelMetallPreise.forEach(metal => {
 console.log(metal.name);
 metalNames.push(metal.name);
})

console.log(metalNames);

edelMetallPreise.map(metal => {
  console.log(metal.name);
})

// preise

let preise: number[] = [];

edelMetallPreise.forEach(metal => {
  console.log(metal.preiseGramEuro);
  preise.push(metal.preiseGramEuro);
})

console.log(preise);

edelMetallPreise.map(metal => {
  console.log(metal.preiseGramEuro);
})

// veränderung

let aenderung: string[] = [];

edelMetallPreise.forEach(metal => {
  console.log(metal.veraenderung);
  aenderung.push(metal.veraenderung);
})

console.log(aenderung);

edelMetallPreise.map(metal => {
  console.log(metal.veraenderung);
})

// preise über 50

const ergebnis = edelMetallPreise.filter(metal => metal.preiseGramEuro > 50);
console.log(ergebnis);

// tabelle

const tabelleAußen = `<table><tr>
  <th>Name</th>
  <th>PreiseGrammEuro</th>
  <th>Veränderung</th>
  </tr></table>`;
document.body.insertAdjacentHTML("afterbegin", tabelleAußen);

const außen = document.querySelector("table");

edelMetallPreise.forEach(metal => {
  const tabellenabschnitt = `<tr>
      <td>${metal.name}</td>
      <td>${metal.preiseGramEuro}</td>
      <td>${metal.veraenderung}</td>
  </tr>`;
  außen?.insertAdjacentHTML("beforeend", tabellenabschnitt);
})



// lev 2_2

const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
];

singers.sort(function(a, b) {
    let elm1 = (a.name);
    let elm2 = (b.name);
    // console.log({elm1}, {elm2});
    // console.log(a.name);
    // console.log(b.name);

    if (elm1 < elm2) return -1;
    if (elm1 > elm2) return 1;
    return 0;
  });
  
console.log(singers);



// MATH --------------------------------------------------------------------------

// lev 1_1

const PI = Math.PI;
console.log(PI);

const roundedPI = PI.toFixed(2);
console.log(roundedPI);


// lev 1_2

let array = [
  3.14,
  193.4464,
  0.8596433607,
  -2.940629089,
];

function round(zahl: number) {
    console.log(Math.round(zahl));
}
// round(4.6675);

array.forEach(round);


// lev 1_3

const randomNum = Math.random();
console.log(randomNum);

const randomNum1_10 = Math.floor(Math.random()* 10 +1);
console.log(randomNum1_10);

const randomNum1_100 = Math.floor(Math.random()* 100+1);
console.log(randomNum1_100);


// Level 2_1

const roundTo = (zahl: number, genauigkeit: number) => {
  console.log(zahl.toFixed(genauigkeit));
}

roundTo(6.273445, 4);
roundTo(3.1415926535, 5);


// Level 2_2

const randomNum1_10new = Math.floor(Math.random()* 10 +1);
console.log(randomNum1_10new);

// window.prompt("Schätze eine Zahl zwischen 1 und 10");

let check = prompt("Schätze eine Zahl zwischen 1 und 10", '');

if (Number(check) != randomNum1_10new) {
	console.log("Du hast verloren! Die Nummer lautet " + randomNum1_10new );
	alert("Du hast verloren! Die Nummer lautet " + randomNum1_10new );
} else {
	console.log("Du hast richtig geraten!");
	alert("Du hast richtig geraten!");
}