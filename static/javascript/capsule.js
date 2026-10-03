const capsule =
    JSON.parse(localStorage.getItem("selectedCapsule"));
if (capsule) {
    document.getElementById("capsule-title").textContent =
        capsule.title;
    document.getElementById("capsule-theme").textContent =
        "Theme : " + capsule.theme;
    document.getElementById("capsule-date").textContent =
        "Opened : " + capsule.date + " " + capsule.time;
    document.getElementById("capsule-message").textContent =
        capsule.message;
    const postcardArt =
        document.getElementById("postcard-art");
    const themeArt = {
        skyletters:
            "../images/skyletterspostcard.png",
        midnightechoes:
            "../images/midnightechoespostcard.png",
        velvetrain:
            "../images/velvetrainpostcard.png",
        strawberrymemories:
            "../images/strawberrymemoriespostcard.png"
    };
    postcardArt.src = themeArt[capsule.theme];
}
const postcard =
    document.getElementById("postcard");
postcard.addEventListener("click", function() {
    postcard.classList.toggle("open");
});