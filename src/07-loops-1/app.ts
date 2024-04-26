// Loops-Level-3_1

let text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

function trennung (text: string) {

    let textArr: string[] = []
    let index: number = 0; 

    for (let i = 1; i <= 27; i++){
        let textAbschnitt = text.substring(index, index +100)
        textAbschnitt = `${textAbschnitt} - ${i} of 27`
        index = index + 100
        textArr.push(textAbschnitt)
    }
    console.log(textArr);
}

trennung(text)




// lev 1_1

for (let i = 1; i <= 10; i++){
    console.log("Hello World " + i);
}


// lev 1_2

let numArray3: number[] = [];

for (let i = 0; i <= 10; i++){
    // console.log(i);
    numArray3.push(i);
}

console.log(numArray3);


// lev 1_4

let names = ["Freddy", "Steffen", "Finn", "Julia", "Farid", "Christian", "Sergio"];
// console.log(names.length);

for (let i = 0; i < names.length; i++){
    // console.log(i);
    console.log(names[i]);
}





// lev 2_1

const imageArray = () => {
    let returnArray: string[] = [];

    for (let i = 1; i <= 100; i++){

        if (i < 10){
            returnArray.push(`image_00${i}.jpg`);
        } else if (i >= 10 && i < 100){
            returnArray.push(`image_0${i}.jpg`);
        } else {
            returnArray.push(`image_${i}.jpg`);
        }
    }
    console.log(returnArray);
}

imageArray();


// lev 2_2

const output = document.querySelector(".output")!;
const loopForm = document.querySelector("#loopme-form")!;

loopForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let numberInput = document.querySelector("#number") as HTMLInputElement;
    let number = Number(numberInput.value)

    let arrayO: string[] = [];

    for (let i = 0; i < number; i++){
        arrayO.push(`o`);
    }

    let arrayAsString = arrayO.join("");

    output.innerHTML = `l${arrayAsString}p`;
})



// lev 3_2

const section4 = document.querySelector(".level-3-2")!;

let numArr: number[] = [5, 22, 15, 100, 55];

numArr.forEach((elm) => {

    for (let i = 2; i < elm; i++){
        
        if (elm % i === 0){
            let ergebnis = elm / i;
            console.log(`${elm} lässt sich durch ${i} teilen! Das Ergebnis ist ${ergebnis}`);
            section4.innerHTML = `<p>${elm} lässt sich durch ${i} teilen! Das Ergebnis ist ${ergebnis}</p>`;
        }
    }
})



// lev 3_3

const output2 = document.querySelector(".output-2")!;
const lev3Form = document.querySelector("#loopme-form-2") as HTMLFormElement;


lev3Form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let numberInput = document.querySelector("#num") as HTMLInputElement;
    let number = Number(numberInput.value)

    let arrayO: string[] = [];

    if (number === 0){
        output.innerHTML = "ERROR";
        
    } else if (number % 2 === 0 ){
        for (let i = 1; i <= number; i++){
            arrayO.push(`o`);
        }
        umformung(arrayO);

    } else {
        for (let i = 1; i <= number; i++){
            if (i % 2 === 0){
                arrayO.push(`0`);
            } else {
                arrayO.push(`o`);
            }
        }
        umformung(arrayO);
    }
})

const umformung = (arrayO: string[]) => {
    let arrToString = arrayO.join("")
    output2.innerHTML = `l${arrToString}p`;
}