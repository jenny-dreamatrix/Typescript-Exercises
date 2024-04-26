// Date-Level-1_1

let date1 = new Date();
let date2 = new Date("September 2, 2019 09:00:00");
let date3 = new Date(0);
let date4 = new Date(31556908800);
let date5 = new Date(86400000);

const section = document.querySelector(".sec-0")!
section.innerHTML = `<h2>Date-Level-1_1</h2><p>${date1} = aktuelle Zeit/Datum</p><p>${date2} = new Date("September 2, 2019 09:00:00")</p><p>${date3} = new Date(0)</p><p>${date4} = new Date(31556908800)</p><p>${date5} = new Date(86400000)</p>`



// Date-Level-1_2

let monate: string[] = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag: string[] = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let date = new Date()
let year = date.getFullYear()
let monat = date.getMonth()
let tag = date.getDate()
let stunden: number | string = date.getHours()
let minuten: number | string = date.getMinutes()
let sekunden: number | string = date.getSeconds()
let dieser_wochentag = wochenTag[date.getDay()]
let dieser_monat = monate[monat]

console.log(dieser_monat);

// render to html
const section1 = document.querySelector(".sec-1")!
section1.innerHTML = `<h2>Date-Level-1_2</h2><p>${date}</p><p>${year}</p><p>${monat} Monat</p><p>${tag} Tag</p><p>${stunden} Stunde</p><p>${dieser_wochentag}</p><p>${dieser_monat}</p>`

const digitalClock = document.querySelector(".digital-clock")

let weekday_short = date.toLocaleString("default", {weekday: "short"})

if(stunden < 10){
    stunden = `0${stunden}`
}
if(minuten < 10){
    minuten = `0${minuten}`
}
if(sekunden < 10){
    sekunden = `0${sekunden}`
}

digitalClock!.innerHTML = `<p>${weekday_short} ${stunden} : ${minuten} : ${sekunden}</p>`



// Date-Level-1_3

const section2 = document.querySelector(".sec-2")
section2!.innerHTML = `<h2>Date-Level-1_3</h2>`

let date6 = new Date(2222, 5, 20, 15, 42, 38);
section2!.innerHTML +=`<p>${date6}</p>`

date6.setMonth(1);
date6.setFullYear(2123);
date6.setDate(24);
section2!.innerHTML += `<p>${date6}</p>`

date6.setMonth(2);
section2!.innerHTML += `<p>${date6}</p>`

date6.setDate(3);
section2!.innerHTML += `<p>${date6}</p>`

let date7 = new Date()
let days = date7.getDate()
date7.setDate(days + 30)

// console.log(date7);
section2!.innerHTML += `<p>${date7}</p>`



// Date-Level-1_5

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = (year: number, month: number, day: number) => {
month --;
let date = new Date(year, month, day);
let monthIndex = date.getMonth();
console.log(list[monthIndex]);
}

monatsName(2022,5,12);
monatsName(2001,3,4);
monatsName(2019,12,24);
monatsName(1410,7,15);



// Date-Level-1_5

date1 = new Date(1999, 10, 5, 15)
date2 = new Date()
date3 = new Date(2019, 12, 3, 12)
date4 = new Date(2000, 1, 1, 11)

const checkPeriod = (date: Date) => {
    console.log(date);

    let hours = date.getHours();
    console.log(hours);

    let period = hours < 12 ? "AM" : "PM";
    console.log(period);
}

checkPeriod(date1);
checkPeriod(date2);
checkPeriod(date3);
checkPeriod(date4);



// Date-Level-2_1

const section3 = document.querySelector(".sec-3")!

const datumAnzeige = () => {
    let date = new Date();
    let day: number | string = date.getDate();
    let month: number | string = date.getMonth() + 1;
    let year = date.getFullYear();
    
    // console.log({day}, {month}, {year});
    
    if(month < 10){
        month = `0${month}`
    }
    
    if(day < 10){
        day = `0${day}`
    }
    
    section3.innerHTML = `<h2>Date-Level-2_1</h2><p>${day}-${month}-${year}</p>`
}
    
datumAnzeige();



// Date-Level-3_2

function findFriday13 (year: number) {
    let date8 = new Date(year, 0, 1)
    
    console.log(date8);
    
}

findFriday13(2024)