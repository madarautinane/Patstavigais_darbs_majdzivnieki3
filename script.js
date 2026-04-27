let current = 0;

const questions = [
    {
        text: "Kas ir šis dzīvnieks?",
        img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80",
        correct: "a",
        answers: { a: "Suns", b: "Kaķis", c: "Trusis" }
    },
    {
        text: "Kas ir šis dzīvnieks?",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80",
        correct: "b",
        answers: { a: "Suns", b: "Kaķis", c: "Putns" }
    },
    {
        text: "Kas ir šis dzīvnieks?",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/06/EnglishSpotRabbitChocolate1%28cropped%29.jpg",
        correct: "b",
        answers: { a: "Suns", b: "Trusis", c: "Zivs" }
    },
    {
        text: "Kas ir šis dzīvnieks?",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Parrot.red.macaw.1.arp.750pix.jpg",
        correct: "c",
        answers: { a: "Kaķis", b: "Suns", c: "Papagailis" }
    }
];

function loadQuestion() {
    const q = questions[current];

    document.getElementById("questionText").innerText = q.text;

    document.getElementById("imageBox").innerHTML =
        `<img src="${q.img}" style="width:200px;border-radius:10px;">`;

    document.getElementById("result").innerText = "";

    const buttons = document.querySelectorAll("#game button");
    buttons[0].innerText = q.answers.a;
    buttons[1].innerText = q.answers.b;
    buttons[2].innerText = q.answers.c;
}

function answer(choice) {
    const q = questions[current];
    if (choice === q.correct) {
        document.getElementById("result").innerText = "✔ Pareizi!";
    } else {
        document.getElementById("result").innerText = "❌ Nepareizi!";
    }
}

function nextQuestion() {
    current++;
    if (current >= questions.length) {
        current = 0;
    }
    loadQuestion();
}

// ielādē pirmo jautājumu
loadQuestion();
