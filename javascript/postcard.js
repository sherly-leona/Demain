const params = new URLSearchParams(window.location.search);
const selectedTheme = params.get("theme");
const themes = {
    skyletters: {
        title: "SKY LETTERS",
        art: "../images/skyletterspostcard.png"
    },
    midnightechoes: {
        title: "MIDNIGHT ECHOES",
        art: "../images/midnightechoespostcard.png"
    },
    velvetrain: {
        title: "VELVET RAIN",
        art: "../images/velvetrainpostcard.png"
    },
    strawberrymemories: {
        title: "STRAWBERRY MEMORIES",
        art: "../images/strawberrymemoriespostcard.png"
    }
};
if (selectedTheme && themes[selectedTheme]) {
    document.getElementById("theme-name").textContent =
        themes[selectedTheme].title;
    document.getElementById("artImage").src =
        themes[selectedTheme].art;
}
function savePostcard() {
    const message =
        document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Please write something before continuing.");
        return;
    }
    const postcardData = {
        theme: selectedTheme,
        message: message
    };
    localStorage.setItem(
        "postcardData",
        JSON.stringify(postcardData)
    );
    window.location.href = "details.html";
}