let score = 0;
let gameInterval;

function startGame() {
    score = 0;
    document.getElementById("score").innerText = score;

    clearInterval(gameInterval);

    gameInterval = setInterval(spawnAnimal, 1000);
}

function spawnAnimal() {
    const gameArea = document.getElementById("gameArea");

    const animal = document.createElement("div");

    animal.innerText = "🐶";
    animal.style.position = "absolute";
    animal.style.left = Math.random() * 250 + "px";
    animal.style.top = Math.random() * 200 + "px";
    animal.style.fontSize = "40px";
    animal.style.cursor = "pointer";

    animal.onclick = function () {
        score++;
        document.getElementById("score").innerText = score;
        animal.remove();
    };

    gameArea.appendChild(animal);

    setTimeout(() => {
        animal.remove();
    }, 1500);
}
