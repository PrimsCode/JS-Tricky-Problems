function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let numGuess = 0;
    let gameOver = false;

    return function guessing(num){
        if (gameOver) return "The game is over, you already won!";
        numGuess++;

        if (num === answer) {
            gameOver = true;
            let guess = numGuess === 1 ? "guess" : "guesses" ;
            return `You win! You found ${num} in ${numGuess} ${guess}.`;
        }
        if (num < answer) return `${num} is too low!`;
        if (num > answer) return `${num} is too high!`;
    }

}

module.exports = { guessingGame };