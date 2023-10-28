// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsSpan = document.getElementById("attempts");

// Function to handle the player's guess
guessButton.addEventListener("click", function () {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.innerHTML = `<p style="font-weight:800;color:red">Please enter a valid number between 1 and 100.</p>`;
    } else {
        attempts--;
        attemptsSpan.textContent = attempts;

        if (guess === targetNumber) {
            message.innerHTML = `<div style="font-weight:800;" class="text-success">Congratulations! You guessed the number ${targetNumber} correctly!</div>`;
            guessButton.disabled = true;
        } else if (attempts === 0) {
            message.innerHTML = `<div style="font-weight:800;" class="text-warning">Sorry, you've run out of attempts. The correct number was</div><label  style="font-weight:900;color:blue;">(${targetNumber})</label>`;
            guessButton.disabled = true;
        } else {
            const highOrLow =
                guess < targetNumber ? "too low" : "too high";
            message.innerHTML = `<div style="font-weight:800;" class="text-danger">Wrong guess! Your guess is ${highOrLow}. Try again.</div>`;
        }
    }
});