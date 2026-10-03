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
}