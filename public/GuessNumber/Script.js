// RANDOM NUMBER GENERATOR //
function GenerateNum() {
    const randNum = Number(Math.floor(Math.random() * 50) +1);
    const secretNumber = document.getElementById("secretnumber");
    secretNumber.value = randNum;
}

GenerateNum();

// PREVIOUS HIGH SCORE //
let previousHighScore = sessionStorage.getItem('phs')

if(!previousHighScore){
    document.getElementById("highscorenumber").textContent = 0
} else{
    document.getElementById("highscorenumber").textContent = previousHighScore
}

// LET'S GO!!! //
const guessField = document.getElementById("secretnumguess");

guessField.addEventListener("keyup", function(e) {
    if(e.code === 'Enter'){
    document.getElementById("check").click();
    if (guessField.value > 0) {
        guessField.value = ""
    }
  }
 });

 let score = 20;

document.getElementById("check").addEventListener(`click`, function () {

    const userGuess = document.getElementById("secretnumguess");
    const secretNumber = document.getElementById("secretnumber");
    const checkBtn = document.getElementById("check");
    const answerParagraph = document.getElementById("answerpara");
    let scoreNumber = document.getElementById("scorenumber");
    let highScoreNumber = document.getElementById("highscorenumber");
    let highscore;

    
    scoreNumber.textContent = score;

    if (!Number(userGuess.value)) {
        answerParagraph.textContent = `C'mon man! You didn't even try...`;
    } else if (Number(userGuess.value) !== Number(secretNumber.value)) {
        if (score > 1) {
            answerParagraph.textContent = Number(userGuess.value) > Number(secretNumber.value) ? 
                `Nice try, fucker, but you're to high!`:
                `Nice try, fucker, but you're to low!`;
            score--;
            scoreNumber.textContent = score;
            } else {
            answerParagraph.textContent = `Too bad so sad, you fucking loser. YOU LOST THE GAME!`;
            checkBtn.disabled = true;
            document.querySelector('body').style.backgroundColor = "red";
            userGuess.style.backgroundColor = "red";
            scoreNumber.textContent = 0;
            }        
    } else {
        if(score > document.getElementById("highscorenumber").textContent){
            highscore = score;
            sessionStorage.setItem('phs', highscore);
            highScoreNumber.textContent = highscore
        }

        secretNumber.textContent = secretNumber.value;
        answerParagraph.textContent = `🎉🎊✨Wooo Hoo!!! You Got It Bud!`;

        document.querySelector('body').style.backgroundColor = "#4AF508"
        document.querySelector('body').style.color = "black";
        userGuess.style.backgroundColor = "#4AF508";
        userGuess.disabled = true;
        checkBtn.disabled = true;
    }
});

// PLAY AGAIN //
document.getElementById("reset").addEventListener('click', function() {
    location.reload();
});