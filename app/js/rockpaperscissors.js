////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}
// function compares playerMove and computerMove, returning 'computer', 'player', or 'tie'
// function treats any input other than 'rock' or 'paper' as 'scissors'
function getWinner(playerMove,computerMove) {
    var winner;
    switch (playerMove){
        case 'rock':
            switch (computerMove){
                case 'rock':
                    winner = 'tie';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                default:
                    winner = 'player';
            }
            break;
        case 'paper':
            switch (computerMove){
                case 'rock':
                    winner = 'player';
                    break;
                case 'paper':
                    winner = 'tie';
                    break;
                default:
                    winner = 'computer';
                    break;
            }
            break;
        default:
            switch (computerMove){
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'player';
                    break;
                default:
                    winner = 'tie';
                    break;
            }
    }
    return winner;
}

function playToFive() { // call playTo(x) and pass in 5 as number of wins to end game
    return playTo(5);
}

function playTo(goal) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var computerMove = null;
    var playerMove = null;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won 'goal' times.
    while (playerWins < goal && computerWins < goal){ // run this loop until computer or player gets 'goal' score
        computerMove = getComputerMove(); // get rock, paper, or scissors for computer
        playerMove = getPlayerMove();  // get rock, paper, or scissors for player
        switch (getWinner(playerMove,computerMove)){ // determine winner, then increment score in switch
            case 'computer': // if computer won the round, do this
                computerWins++;
                console.log('Computer\'s ' + computerMove + ' beats player\'s ' + playerMove + '!');
                if (computerWins == goal){ // if computer has won the game, announce it.
                    console.log('Computer WINS!');
                }
                else {  // if computer has not won, report score.
                    console.log('Player advances.  The score is now:');
                }
                break;
            case 'player':  // if player won the round, do this
                playerWins++;
                console.log('Player\'s ' + playerMove + ' beats computer\'s ' + computerMove + '!');
                if (playerWins == goal){ // if player has won the game, announce it.
                    console.log('Player WINS!');
                }
                else {  // if player has not won, report the score
                    console.log('Player advances.  The score is now:');
                }
                break;
            case 'tie':  // if tie, do this
                console.log('Holy hand-jive, a tie!  Both players played ' + computerMove + '.');
                console.log('The score is still:'); 
                break;
        }
        console.log('Player: ' + playerWins + '\nComputer : ' + computerWins + '\n'); // print the score after the switch message
    }
    return [playerWins, computerWins];
}

