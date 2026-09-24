let lightsOn = true;

document.getElementById("lightBtn").addEventListener("click", function () {
  if (lightsOn) {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#f3f3f3";
    document.getElementById("lightBtn").innerHTML = "Lights on";
  } else {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.color = "#000000";
    document.getElementById("lightBtn").innerHTML = "Lights off";
  }
  lightsOn = !lightsOn;
});

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  document.getElementById("hello").innerHTML = greeting;
  document.getElementById("time").innerHTML = now.toLocaleTimeString();
}

updateClock();//initialize
setInterval(updateClock, 1000);

let x = 0;
let y = 0;
let step = 20;

function moveCube() {
  document.getElementById("cube").style.left = x + "px";
  document.getElementById("cube").style.top = y + "px";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    x = x + step;
  } else if (event.key === "ArrowLeft") {
    x = x - step;
  } else if (event.key === "ArrowDown") {
    y = y + step;
  } else if (event.key === "ArrowUp") {
    y = y - step;
  } else {
    return;
  }

  event.preventDefault();

  x = Math.max(0, Math.min(x, 460));
  y = Math.max(0, Math.min(y, 260));

  moveCube();
});
