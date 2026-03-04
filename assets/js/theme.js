const root = document.documentElement;

function toggleDark() {
    root.classList.toggle("dark");
    localStorage.ushiverseDark = root.classList.contains("dark");
}

function setThemeColor(color) {
    root.style.setProperty("--primary", color);
    localStorage.ushiverseColor = color;
}

function loadTheme() {
    if (localStorage.ushiverseDark === "false") {
        root.classList.remove("dark");
    }

    if (localStorage.ushiverseColor) {
        root.style.setProperty("--primary", localStorage.ushiverseColor);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();

    document.getElementById("themeToggle")?.addEventListener("click", toggleDark);

    document.querySelectorAll(".theme-dot").forEach(dot => {
        dot.addEventListener("click", () => {
            setThemeColor(dot.dataset.theme);
        });
    });

    document.getElementById("settingsToggle")?.addEventListener("click", () => {
        document.getElementById("themePanel")?.classList.toggle("hidden");
    });
});


// Network Diagam Simlation
function startNetworkSimulation() {

    const packetA = document.getElementById("packetA");
    const packetB = document.getElementById("packetB");
    const explanation = document.getElementById("networkExplanation");

    packetA.classList.remove("hidden");
    packetB.classList.remove("hidden");

    explanation.innerHTML = "Step 1: Your device sends a request packet to the router.";

    packetA.style.animation = "movePacket 2s linear forwards";

    setTimeout(() => {
        explanation.innerHTML = "Step 2: Router checks the destination IP address and forwards it to the server.";
        packetB.style.animation = "movePacket 2s linear forwards";
    }, 2000);

    setTimeout(() => {
        explanation.innerHTML = "Step 3: Server sends back data packets. Your browser reassembles them into a webpage!";
    }, 4000);
}

// Quiz - Grade 6

function gradeQuiz() {

    const questions = document.querySelectorAll(".quiz-question");
    let score = 0;

    questions.forEach((question, index) => {
        const correctAnswer = question.dataset.answer;
        const selected = question.querySelector("input[type='radio']:checked");

        if (selected && selected.value === correctAnswer) {
            score++;
        }
    });

    let grade = "";
    let message = "";
    let color = "";

    if (score === 5) {
        grade = "A+";
        message = "Outstanding! You mastered Networking! 🚀";
        color = "text-green-600";
    } else if (score === 4) {
        grade = "A";
        message = "Excellent Work! Almost Perfect! 🎯";
        color = "text-green-500";
    } else if (score === 3) {
        grade = "B";
        message = "Good Job! Revise a little more. 👍";
        color = "text-blue-500";
    } else if (score === 2) {
        grade = "C";
        message = "Keep Practicing! You can improve! 💡";
        color = "text-yellow-500";
    } else {
        grade = "D";
        message = "Let’s review the lesson again. 📘";
        color = "text-red-500";
    }

    const resultDiv = document.getElementById("quiz-result");
    resultDiv.className = "mt-4 text-center font-bold text-lg " + color;
    resultDiv.innerHTML = `
        Score: ${score}/5 <br>
        Grade: ${grade} <br>
        ${message}
    `;
}