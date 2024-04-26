// Lev 1_1

// timeout

console.log("Start: Warten für 3 Sekunden..");

const timeoutFunktion = () => {
  console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
};

setTimeout(timeoutFunktion, 3000);

// counter interval

let count1 = 10;

const counter1 = () => {
  if (count1 > 0) {
    console.log(count1);
  } else if (count1 == 0) {
    console.log("Endlich Feierabend!");
  } else if (count1 == -1) {
    clearInterval(interval);
  }
  count1--;
};

let interval = setInterval(counter1, 1000);

// Lev 1_2

const button4 = document.querySelector("#btn");
const zeit = document.querySelector(".zeit")!;

let interval1: number;
let count2 = 100;

const counter2 = () => {
  if (count2 <= 100 && count2 >= 0) {
    zeit.innerHTML = `${count2}%`;
    count2--;
  } else {
    clearInterval(interval1);
  }
};

const intervalGo = () => {
  interval1 = setInterval(counter2, 100);
};

button4?.addEventListener("click", intervalGo);

// Lev 1_9

const output4 = document.getElementById("txt")!;
const body1 = document.querySelector("body")!;

const startTime = () => {
  const heute = new Date();
  let std: number | string = heute.getHours();
  let min: number | string = heute.getMinutes();
  let sec: number | string = heute.getSeconds();

  std = std < 10 ? `0${std}` : std;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  output4.innerHTML = `<p>${heute}</p><div class="clock"><p>${std} :</p><p> ${min} :</p><p> ${sec}</p></div>`;
};

setInterval(startTime, 1000);

// body1.addEventListener("load", startTime)

// Lev 2_1

const messageDiv = document.querySelector(".message") as HTMLDivElement;
const countOutput = document.querySelector("#count")!;

let count3 = 10;

const disappear = () => {
  if (count3 == 10) {
    countOutput.innerHTML = `${count3}`;
    count3--;
  } else if (count3 > 0 && count3 < 10) {
    countOutput.innerHTML = `0${count3}`;
    count3--;
  } else if (count3 == 0) {
    countOutput.innerHTML = `${count3}`;
    clearInterval(interval2);
    messageDiv.style.opacity = "0";
  }
};

const interval2 = setInterval(disappear, 1000);

body1.addEventListener("load", disappear);



// Lev 3_2

const startBtn = document.querySelector("#start-btn")!;
const pauseBtn = document.querySelector("#pause-btn")!;
const restartBtn = document.querySelector("#restart-btn")!;

const time = document.querySelector("#time")!;
let interval3: number;
let timeDifference: number;

const startMinCountdown = () => {
    // console.log("start");
    const minutesInput = Number((document.querySelector("#minutes") as HTMLInputElement).value);

    // umrechnen in milliseconds
    let millisecondsInput = minutesInput * 60 * 1000;
    console.log({minutesInput}, {millisecondsInput});

    // zeitdifferenz
    let timeNowMilliseconds = new Date().getTime();
    let timeCounter = new Date(timeNowMilliseconds-millisecondsInput).getTime();
    timeDifference = timeNowMilliseconds - timeCounter;
    console.log({timeNowMilliseconds}, {timeCounter}, {timeDifference});

    interval3 = setInterval(countdown, 1000);
}
startBtn.addEventListener("click", startMinCountdown)


const countdown = () => {
    if(timeDifference >= 0){
    let minutes = Math.floor(timeDifference / (1000 * 60));
    let seconds = Math.floor(timeDifference / 1000);
    console.log({seconds}, {minutes});

    let minuteTime = minutes;
    let secondsTime = seconds - minutes * 60;
    console.log({minuteTime}, {secondsTime});

    timeDifference -= 1000;

    time.innerHTML = `${minuteTime}:${secondsTime}`;
    } else {
        clearInterval(interval3);
    }
}

const pauseMinCountdown = () => {
    // console.log("pause");
    clearInterval(interval3);
}
pauseBtn.addEventListener("click", pauseMinCountdown)

const restartMinCountdown = () => {
    // console.log("restart");
    interval3 = setInterval(countdown, 1000);
}
restartBtn.addEventListener("click", restartMinCountdown)



// Alternative

// const time = document.querySelector("#time");
// let interval;
// let secondsTotal;

// const startMinCountdown = () => {
//     const minutesInput = Number(document.querySelector("#minutes").value);

//     // Minutenangabe in Sekunden umrechnen
//     secondsTotal = minutesInput * 60;

//     interval = setInterval(countdown, 1000);
// }

// const countdown = () => {
//     if(secondsTotal >= 0){
//     // mit Math.floor rundet man ab auf ganze Zahl -> wenn also z.b. die minutes unter 2 gehen, wird 1 dort stehen
//     // z.b. 120 Sekunden / 60 = 2 Minuten   aber: 119 Sekunden / 60 = 1,98 -> wird abgerundet auf 1 Minute (verbleibend)
//     let minutesLeft = Math.floor(secondsTotal / 60);
//     // restliche Sekunden sind die gesamte Sekundenanzahl minus die Minuten (in Sekunden umgerechnet)
//     // let secondsLeft = secondsTotal - minutesLeft * 60;

//     // oder man bestimmt den Rest (restliche Sekunden, wenn man secondsTotal durch 60 teilt, um in Minuten umzurechnen):
//     let secondsLeft = secondsTotal % 60;

//     // console.log({secondsLeft}, {minutesLeft});

//     // pro Durchlauf wird 1 Sekunde abgezogen
//     secondsTotal -= 1;

//     // 0 hinzufügen, wenn Minute oder Sekunde kleiner als 10 ist, andernfalls keine Änderung
//     minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
//     secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

//     time.innerHTML = `${minutesLeft}:${secondsLeft}`;
    
//     } else {
//         clearInterval(interval);
//     }
// }

// const pauseMinCountdown = () => {
//     clearInterval(interval);
// }

// const restartMinCountdown = () => {
//     interval = setInterval(countdown, 1000);
// }