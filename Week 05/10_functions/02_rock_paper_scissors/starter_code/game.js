// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'

function computerChoice() {
    var random = Math.random();
    if (random < 0.333) {
        return  'rock';
    } else if(random < 0.67777) {
        return 'paper';
    } else {
        return 'scissors';
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
	//display computer's choice
	jQuery('#computerSelection').text(opponent);
	//determine who wins
	var myChoice = jQuery ("#decision").val();
	if ((myChoice == "scissors" && computerPlayerChoice == "rock")|| (myChoice == "scissors" && computerPlayerChoice == "rock") || (myChoice == "scissors" && computerPlayerChoice == "rock") ){
		jQuery('#decision').text("You lose, computer wins")
	//display the winners
};



jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    jQuery("#scissors").click(function(e){
    	//Stop the default action
    	e.preventDefault();
    	//Get the computer player's choice
    	var computerPlayerChoice = computerChoice();

    	//Compare the winner
    	compare('scissors',computerPlayerChoice);
});
