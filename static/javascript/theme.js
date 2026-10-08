const themes = [
    {
        title: "MIDNIGHT ECHOES",
        image: "static/images/midnightechoessand.gif",
        id: "midnightechoes"
    },
    {
        title: "SKY LETTERS",
        image: "static/images/skyletterssand.gif",
        id: "skyletters"
    },
    {
        title: "STRAWBERRY MEMORIES",
        image: "static/images/strawberrymemoriessand.gif",
        id: "strawberrymemories"
    },
    {
        title: "VELVET RAIN",
        image: "static/images/velvetrainsand.gif",
        id: "velvetrain"
    }
];
let current = 0;
const themeTitle =
    document.getElementById("theme-title");
const themeImage =
    document.getElementById("theme-image");
const prevBtn =
    document.getElementById("prevBtn");
const nextBtn =
    document.getElementById("nextBtn");
function updateTheme() {
    themeTitle.innerText =
        themes[current].title;
    themeImage.src =
        themes[current].image;
}
nextBtn.addEventListener("click", function() {
    current++;
    if (current >= themes.length) {
        current = 0;
    }
    updateTheme();
});
prevBtn.addEventListener("click", function() {
    current--;
    if (current < 0) {
        current = themes.length - 1;
    }
    updateTheme();
});
themeImage.addEventListener("click", function() {
    window.location.href =
        "/postcard?theme=" + themes[current].id;
});
updateTheme();