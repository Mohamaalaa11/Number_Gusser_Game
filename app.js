document.addEventListener("DOMContentLoaded", function() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let lives = 3;
    let result = document.querySelector("#result");

    document.querySelector("#form").addEventListener("submit", function(e) {
        e.preventDefault(); 

        let userGuess = parseInt(document.getElementById('userGuess').value);
        if(userGuess==secretNumber){
            result.textContent = "You're Right! Congratulations!";

        }
        else{
            lives--;
        }
        if(lives>0){
            result.textContent = `Wrong Answer. You have ${lives} lives left.`;
        }
        else{
            result.textContent = `Game Over. The correct number was ${secretNumber}.`;
            
        }


    });
});
