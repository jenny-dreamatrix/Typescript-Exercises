// lev 1_2

const button1 = document.querySelector("#btn");

button1?.addEventListener("click", myFunction)

function myFunction() {
    const changeColorElements = document.getElementsByClassName("example");
    // console.log(changeColorElements);
    // console.log(changeColorElements[1]);
    
    for(let i = 0; i < changeColorElements.length; i++){
        console.log(changeColorElements[i]);
        // changeColorElements[i].style.backgroundColor = "black";
        // changeColorElements[i].style.color = "white";
        changeColorElements[i].classList.toggle("black");
    }
}


// lev 1_3

// list elements
const myList = document.querySelector("#myList") as HTMLUListElement;
let firstElementChild = myList.firstElementChild!;
let firstElementChildNextElementSibling = firstElementChild?.nextElementSibling?.innerHTML!;
let firstElementChildText = firstElementChild.innerHTML;
let lastElementChild = myList.lastElementChild!;
let lastElementChildPreviousElementSibling = lastElementChild?.previousElementSibling?.innerHTML!;
let lastElementChildText = lastElementChild.innerHTML;

// buttons
// achtung bei dem index, es sind auch <br> elemente im html !!
const divUnten = document.querySelector(".unten") as HTMLDivElement;
const firstElementChildBtn = divUnten.children[0];
const lastElementChildBtn = divUnten.children[2];
const nextElementSiblingBtn = divUnten.children[4];
const previousElementSiblingBtn = divUnten.children[6];

// output
const output3 = document.querySelector("output") as HTMLOutputElement;

// console.log({nextElementSiblingBtn}, {previousElementSiblingBtn});
// console.log({firstElementChild}, {lastElementChild}, {firstElementChildNextElementSibling}, {lastElementChildPreviousElementSibling});

const firstElementChildContent = () => {
    output3.innerHTML = firstElementChildText;
}
firstElementChildBtn.addEventListener("click", firstElementChildContent);

const lastElementChildContent = () => {
    output3.innerHTML = lastElementChildText;
}
lastElementChildBtn.addEventListener("click", lastElementChildContent);

const nextElementSiblingContent = () => {
    output3.innerHTML = firstElementChildNextElementSibling;
}
nextElementSiblingBtn.addEventListener("click", nextElementSiblingContent);

const previousElementSiblingContent = () => {
    output3.innerHTML = lastElementChildPreviousElementSibling;
}
previousElementSiblingBtn.addEventListener("click", previousElementSiblingContent);


// lev 2_1

const changeBtn = document.querySelector("#navChange")!;
const homeBtn = document.querySelector("#navHome") as HTMLAnchorElement;

console.log({changeBtn}, {homeBtn});

const change = () => {
    homeBtn.style.backgroundColor = "red";
    homeBtn.style.height = "30px";
    homeBtn.innerHTML = "emoH";
}

changeBtn.addEventListener("click", change);



// lev 2_2

const keyOutput = document.querySelector(".key-output")!;
const keycodeOutput = document.querySelector(".keycode-output")!;
const codeOutput = document.querySelector(".code-output")!;
const body = document.querySelector("body")!;

function app(event: KeyboardEvent) {
  let key = event.key;
  let keycode = event.keyCode;
  let code = event.code;
  console.log(key);
  keyOutput.innerHTML = key;
  codeOutput.innerHTML = code;
  keycodeOutput.innerHTML = `${keycode}`
}

body.addEventListener("keydown", app)



// lev 2_3

const changeBtn2 = document.querySelector(".active-new") as HTMLAnchorElement;
const sectionLev23 = document.querySelector(".lev2-3") as HTMLElement;
const container = sectionLev23.getElementsByTagName("ul")[0];
const homeNav = sectionLev23.getElementsByTagName("li")[0];
const newsNav = sectionLev23.getElementsByTagName("li")[1];
const contactNav = sectionLev23.getElementsByTagName("li")[2];

const changeNew = () => {
    homeNav.style.backgroundColor = "#f6c89f";
    newsNav.style.backgroundColor = "#ffe7d1";
    contactNav.style.backgroundColor = "#4b8e8d";
    container.style.backgroundColor = "#333";
    changeBtn2.style.backgroundColor = "#396362";
}

changeBtn2.addEventListener("click", changeNew);



// lev 2_7

const btn = document.querySelector("#btn-click") as HTMLButtonElement;
const umwickeln = document.querySelector(".umwickeln")!;
let counter = 0;

const addElement = () => {
    let newBox = document.createElement("div") as HTMLDivElement;
    newBox.setAttribute("class", "rechteck");
    newBox.innerHTML = counter.toString();
    umwickeln.appendChild(newBox);

    if(counter == 0 || counter % 10 == 0 ){
        newBox.classList.add("weiss");
    }
    counter++;
};

btn.addEventListener("click", addElement);



// lev 2_8

const submitBtn = document.querySelector("#enter") as HTMLInputElement;
const liste = document.querySelector(".list-lev2-8") as HTMLUListElement;
const inputField = document.querySelector("#userinput") as HTMLInputElement;

const speichern = () => {
    let userInput: string = inputField.value;

    let newListElement = document.createElement("li");
    newListElement.innerHTML = userInput;
    liste.appendChild(newListElement);

    inputField.value = ""
}

submitBtn.addEventListener("click", speichern);



// lev 3_1

const rosaBtn = document.querySelector("#rosa-btn") as HTMLButtonElement;
const lilaBtn = document.querySelector("#lila-btn") as HTMLButtonElement;
const orangeBtn = document.querySelector("#orange-btn") as HTMLButtonElement;
const inputRot = document.querySelector("#rot") as HTMLInputElement;
const inputGrun = document.querySelector("#grun") as HTMLInputElement;
const inputBlau = document.querySelector("#blau") as HTMLInputElement;
const sectionLev3_1 = document.querySelector(".lev3-1") as HTMLElement;
const outputLev3_1 = document.querySelector("#demo")!;
let count = 0;

function changeBackground(color: string) {
    sectionLev3_1.style.backgroundColor = color;
    count++;
    outputLev3_1.innerHTML = `Du hast die Farbe ${count} mal geändert.`;
}

rosaBtn.addEventListener("click", () => changeBackground("pink"));
lilaBtn.addEventListener("click", () => changeBackground("purple"));
orangeBtn.addEventListener("click", () => changeBackground("orange"));


const changeHandle = () => {
    const rotValue = inputRot.value;
    const grunValue = inputGrun.value;
    const blauValue = inputBlau.value;

    // console.log(rotValue, grunValue, blauValue);

    outputLev3_1.innerHTML = `rgb(${rotValue}, ${grunValue}, ${blauValue})`;
    sectionLev3_1.style.backgroundColor = `rgb(${rotValue}, ${grunValue}, ${blauValue})`;
}

inputRot.addEventListener("change", changeHandle)
inputGrun.addEventListener("change", changeHandle)
inputBlau.addEventListener("change", changeHandle)