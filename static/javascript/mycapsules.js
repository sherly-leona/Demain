let capsules = JSON.parse(localStorage.getItem("capsules")) || [];
const container = document.getElementById("capsuleContainer");
container.innerHTML = "";
capsules.forEach(function(capsule, index) {
    const card = document.createElement("div");
    card.classList.add("capsule-card");
    const openingDateTime =
        new Date(capsule.date + "T" + capsule.time);
    const currentDateTime = new Date();
    let status;
    if (currentDateTime >= openingDateTime) {
        status = "UNLOCKED";
    } else {
        status = "SEALED";
    }
    card.innerHTML = `
        <h2>${capsule.title}</h2>
        <p>Theme : ${capsule.theme}</p>
        <p>Opens : ${capsule.date} ${capsule.time}</p>
        <span class="sealed">${status}</span>
    `;
    if (status === "UNLOCKED") {
        card.classList.add("unlocked");
        card.addEventListener("click", function() {
            localStorage.setItem(
                "selectedCapsule",
                JSON.stringify(capsule)
            );
            window.location.href = "capsule.html";
        });
    }
    container.appendChild(card);
});