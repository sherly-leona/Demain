let capsules = JSON.parse(localStorage.getItem("capsules")) || [];
const container = document.getElementById("capsuleContainer");
container.innerHTML = "";
capsules.forEach(function(capsule) {
    const card = document.createElement("div");
    card.classList.add("capsule-card");
    card.innerHTML = `
        <h2>${capsule.title}</h2>
        <p>Theme : ${capsule.theme}</p>
        <p>Opens : ${capsule.date}</p>
        <span class="sealed">${capsule.status}</span>
    `;
    container.appendChild(card);
});