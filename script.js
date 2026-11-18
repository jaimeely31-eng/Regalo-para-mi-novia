
const colors = [
    "#ff1744",
    "#ff69b4",
    "#e040fb",
    "#ff8ab5",
    "#c77dff"
];

// Corazones flotando

const background = document.getElementById("backgroundHearts");

function createFloatingHeart() {
    const item = document.createElement("span");

    item.className = "floating-heart";
    item.textContent = "♥";

    item.style.left = Math.random() * 100 + "%";

    item.style.color =
        colors[Math.floor(Math.random() * colors.length)];

    item.style.fontSize =
        (12 + Math.random() * 22) + "px";

    item.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    background.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 11000);
}

setInterval(createFloatingHeart, 350);

// Dedicatoria

const button = document.getElementById("openLetter");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {
    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {
        button.textContent = "Cerrar dedicatoria 💗";
    } else {
        button.textContent = "Abrir mi dedicatoria 💌";
    }
});
