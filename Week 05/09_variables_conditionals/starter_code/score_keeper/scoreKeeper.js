var theScore = 0;

// function to add 5
function addFive(){
	theScore = 5 + theScore;
	jQuery("#result").text(theScore);
}


//function to add 10

function addTen(){
	theScore += 10;
	jQuery("#result").text(theScore);
}

//function to subtract 1
function subtractOne(){
	theScore=theScore - 1;
	jQuery("#result").text(theScore);
}

//function to reset to zero
function resetToZero(){
	theScore = 0;
	jQuery("#result").text(0);
}


jQuery(document).ready(function(){


	jQuery("#add5").click(function(){
		addFive();
	})

	jQuery("#add10").click(function(){
		addTen();
	})

	jQuery("#sub1").click(function(){
		subtractOne();
	})

	jQuery("#zero").click(function(){
		resetToZero();
	})

});
