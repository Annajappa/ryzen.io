const time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let seconds = 0;
let intervel = 0;

let timer = () => {
  seconds++;

  // format our time
  let hrs = Math.floor(seconds / 3600);
  let secs = Math.floor(seconds % 60);
  let mins = Math.floor((seconds - hrs * 3600) / 60);

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  time.innerText = `${hrs}:${mins}:${secs}`;
};

let startTime = () => {
  if (intervel) {
    return;
  }
  intervel = setInterval(timer, 1000);
};

let stopTime = () => {
  clearInterval(intervel);
  intervel = null;
};
let resetTime = () => {
  seconds = 0;
  time.innerText = "00:00:00";
};
start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);