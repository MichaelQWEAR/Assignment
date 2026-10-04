let crumple = "images/crumple.jpg";
let reading = "images/reading.jpg";
let phone = "images/phone.jpg";

function showStory(first, second, third, text1, text2, text3) {
    document.getElementById("img1").src = first;
    document.getElementById("img2").src = second;
    document.getElementById("img3").src = third;

    document.getElementById("caption1").innerHTML = "Beginning: " + text1;
    document.getElementById("caption2").innerHTML = "Middle: " + text2;
    document.getElementById("caption3").innerHTML = "End: " + text3;
}

document.getElementById("btnA").addEventListener("click", function () {
    showStory(
        crumple, reading, phone,
        "Draft after draft goes into the bin.",
        "He reads the new one. It finally works.",
        "He calls the client with a big smile."
    );
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.color = "#202020";
    console.log("Version A");
});

document.getElementById("btnB").addEventListener("click", function () {
    showStory(
        phone, reading, crumple,
        "\"Don't worry, it's almost done!\"",
        "He hangs up and reads what he has.",
        "It's not even close. Into the bin."
    );
    document.body.style.backgroundColor = "#202020";
    document.body.style.color = "#f3f3f3";
    console.log("Version B");
});

document.getElementById("btnA").click();