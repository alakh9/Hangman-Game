var computerPicks = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var lossCount = 0;
    var usersGuess = 10;
    var userPicks = [];

    function computerLetter() {
        var computerGuess = computerPicks[Math.floor(Math.random() * computerPicks.length)];
        console.log("computer guess is: " + computerGuess);
        return computerGuess;
    }

    function reset(){
        userPicks = [];
        document.querySelector("#userPicks").innerHTML = userPicks;
        usersGuess = 10;
        document.querySelector("#guesses").innerHTML = usersGuess;
        computerGuess;
        var computerGuess = computerPicks[Math.floor(Math.random() * computerPicks.length)];
        console.log("computer guess is: " + computerGuess);
        return computerGuess;
    }

    computerGuess = computerLetter();
    
    document.onkeyup = function(event) {
      
        var userInput = event.key;
        if (userInput == computerGuess){
            wins++;
            document.querySelector("#result-win").innerHTML = wins;
            computerGuess = reset();
        }

        else{
            if (usersGuess > 1){
                usersGuess--;
                document.querySelector("#guesses").innerHTML = usersGuess;
                userPicks.push(userInput);
                console.log(userPicks);
                document.querySelector("#userPicks").innerHTML = userPicks;
            }

            else{
                lossCount++;
                document.querySelector("#result-loss").innerHTML = lossCount;
                computerGuess = reset();
            }
        }
    }