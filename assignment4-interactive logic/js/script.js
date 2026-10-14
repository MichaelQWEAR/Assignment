// ----- Mood buttons (user input) -----

// 1. Find the buttons and the paragraphs
let tiredBtn = document.getElementById("tiredBtn");
let stressedBtn = document.getElementById("stressedBtn");
let happyBtn = document.getElementById("happyBtn");
let hello = document.getElementById("hello");
let result = document.getElementById("result");
let moods = document.getElementsByClassName("moods")[0];
let heading = document.getElementById("heading");

// 2. Remember how many drinks the user has ordered (state)
let count = 0;

// 3. Decide which drink to make based on the mood and past orders
function chooseDrink(mood) {
    count = count + 1;
    hello.innerHTML = "Order #" + count;

    if (count >= 4) {
        result.innerHTML = "🦉 That's drink number " + count + ". The owl says it's time to sleep!";
        document.body.style.backgroundColor = "#120d0a";
        moods.style.display = "none";
        heading.innerHTML = "We're closed for tonight.";
    } else if (mood === "tired") {
        result.innerHTML = "☕ A strong coffee to wake you up.";
        document.body.style.backgroundColor = "#4a3426";
    } else if (mood === "stressed") {
        result.innerHTML = "🍵 A warm green tea to help you relax.";
        document.body.style.backgroundColor = "#2f4a35";
    } else if (mood === "happy") {
        result.innerHTML = "🍮 A sweet pudding to celebrate your good mood.";
        document.body.style.backgroundColor = "#6b4a1e";
    }
}

// 4. When a button is clicked, call chooseDrink with that mood
tiredBtn.addEventListener("click", function () {
    chooseDrink("tired");
});

stressedBtn.addEventListener("click", function () {
    chooseDrink("stressed");
});

happyBtn.addEventListener("click", function () {
    chooseDrink("happy");
});
