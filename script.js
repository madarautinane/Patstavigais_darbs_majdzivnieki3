let score = 0;
let time = 20;
let gameInterval;
let timerInterval;

function startGame() {
    score = 0;
    time = 20;

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = time;
    document.getElementById("finalResult").innerText = "";

    clearInterval(gameInterval);
    clearInterval(timerInterval);

    gameInterval = setInterval(spawnAnimal, 800);

    timerInterval = setInterval(() => {
        time--;
        document.getElementById("time").innerText = time;

        if (time <= 0) {
            endGame();
        }
    }, 1000);
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
    }, 1200);
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    document.getElementById("finalResult").innerText =
        "🎉 Spēle beidzās! Tavi punkti: " + score;
}
