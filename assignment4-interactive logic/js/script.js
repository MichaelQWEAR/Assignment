// ----- Mood buttons (user input) -----

// 1. Find the buttons and the result paragraph
const tiredBtn = document.getElementById("tiredBtn");
const stressedBtn = document.getElementById("stressedBtn");
const happyBtn = document.getElementById("happyBtn");
const result = document.getElementById("result");

// 2. Decide which drink to make based on the mood the user picked
function chooseDrink(mood) {
    if (mood === "tired") {
        result.textContent = "☕";
    } else if (mood === "stressed") {
        result.textContent = "🍵";
    } else if (mood === "happy") {
        result.textContent = "🍮";
    }
}

// 3. When a button is clicked, call chooseDrink with that mood
tiredBtn.addEventListener("click", function () {
    chooseDrink("tired");
});

stressedBtn.addEventListener("click", function () {
    chooseDrink("stressed");
});

happyBtn.addEventListener("click", function () {
    chooseDrink("happy");
});
