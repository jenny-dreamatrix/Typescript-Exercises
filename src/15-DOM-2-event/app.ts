// lev 1_5

const button = document.querySelector("#clickMe")!;
let anzahl = 0;

button.addEventListener("click", () => {
    anzahl++;
    button.innerHTML = `Click me: ${anzahl}`;
})



// lev 1_6

const selectInput = document.querySelector("#my-select") as HTMLSelectElement;
const output1 = document.querySelector(".output")!;

selectInput.addEventListener("change", () => {
    let value = selectInput.value;
    output1.innerHTML = `Sie haben ausgewählt ${value}`;
})



// lev 1_9

const selectInputFarbe = document.querySelector("#farbeAuswahlen") as HTMLSelectElement;
const button2 = document.querySelector("#button")!;
let index: number;

const changeColor = (event: Event) => {
    event.preventDefault();
    index = selectInputFarbe.selectedIndex;
    console.log(index);
    console.log(selectInputFarbe[index].textContent);
    console.log(selectInputFarbe.value); // das geht auch !
}

selectInputFarbe.addEventListener("change", changeColor);

const removeOption = (event: Event) => {
    event.preventDefault();
    selectInputFarbe[index].remove();
};

button2.addEventListener("click", removeOption);



// lev 2_4

const selectFarbe = document.querySelector("#farbeAuswahlenBG") as HTMLSelectElement;
const button3 = document.querySelector("#btn")!;
const main = document.querySelector("main")!;
let color: string;

const selection = (event: Event) => {
    event.preventDefault();
    color = selectFarbe.value;
    // console.log(color);
    color = color.replace(" ", "");
    color = color.toLowerCase();
    console.log(color);
}

selectFarbe.addEventListener("change", selection);

const changeBG = (event: Event) => {
    event.preventDefault();
    main.style.backgroundColor = color;
}

button3.addEventListener("click", changeBG);