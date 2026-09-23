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

updateClock();
setInterval(updateClock, 1000);