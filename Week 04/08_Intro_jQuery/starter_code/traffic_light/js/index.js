//Implement the red light using jQuery. Don't forget to add the script tags.


//Red light
	function illuminateRed(){
			//Clear all lights
		jQuery(".bulb").css("background","black");
			//Light Red
		jQuery("#stopLight").css("background", "red");
	}


//yellow light
	function illuminateYellow(){
			//Clear all lights
		jQuery(".bulb").css("background","black");
			//Light yellow
		jQuery("#slowLight").css("background", "yellow");
	}
	//Clear all lights
	//Light Yellow

//Green Light
	function illuminateGreen(){
			//Clear all lights
		jQuery(".bulb").css("background","black");
			//Light green
		jQuery("#goLight").css("background", "green");
	}

jQuery("#stopButton").click(illuminateRed)

jQuery("#slowButton").click(illuminateYellow)
jQuery("#goButton").click(illuminateGreen)