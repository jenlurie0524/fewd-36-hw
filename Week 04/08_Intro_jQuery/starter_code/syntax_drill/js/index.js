jQuery(document).ready(function(){

    
    function purpleP(){
    	jQuery('p').css("color","purple")
    	jQuery('p').css("background","white")
    }

    function hipster(){
   
    	jQuery("p.hipsterSpeak").css("background","blue")
    	jQuery('p').css("color","black")
    	jQuery("p.hipsterSpeak").css("color","white")
    }

    
	function toggleRed(){
		jQuery('li').toggleClass("redForm")

	}    	

	function borderBox(){
		jQuery(".boxes").css("border-bottom", "solid black 6px")
	}

    // When purple box is clicked, set all paragraphs to be purple



    jQuery("#purpleBox").click(purpleP);


    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black

   

    jQuery("#blueBox").click(hipster);

    // When the red box is clicked set the list items toggle red background and white text on and off

    jQuery("#redBox").click(toggleRed);



    // When any of the boxes are clicked, add a 6px solid black bottom border

	jQuery(".boxes").click(borderBox);    


});