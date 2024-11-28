let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Guess the number between 1 and 10:");
userGuess = Number(userGuess);
if (userGuess < 1 || userGuess > 10) {
    alert("Cannot enter other value. Please enter a number between 1 and 10.");
} else {
    if (userGuess === randomNumber) {
        alert("Good Work");
    } else {
        alert("Not matched");
    }
}
