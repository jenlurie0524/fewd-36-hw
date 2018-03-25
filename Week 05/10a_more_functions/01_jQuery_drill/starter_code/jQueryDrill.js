jQuery(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result

    jQuery("#concatButton").on('click', function(e){
    	e.preventDefault();
    	var concatOneValue = jQuery("#concatOne").val();
    	var concatTwoValue = jQuery("#concatTwo").val();
    	jQuery("#concatResult").text(concatOneValue + concatTwoValue);

    });

    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
   
   jQuery("#add20Button").on('click', function(e){
   		e.preventDefault();
   		var userInput = parseFloat(jQuery("#add20Input").val());
   		jQuery("#add20Output").text(userInput + 20);

   })

    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput
    	jQuery("#appendButton").click(function(e){
    		e.preventDefault();
    		var appendText = "<p>"+ jQuery("#appendInput").val() + "</p>";
    		jQuery("#appendOutput").append(appendText);

    	});

});