function show(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function checkAnswer(answer) {
    const result = document.getElementById("result");

    if (answer === "suns") {
        result.innerText = "✔ Pareizi! Tas ir suns 🐶";
    } else {
        result.innerText = "❌ Nepareizi, mēģini vēl!";
    }
}
