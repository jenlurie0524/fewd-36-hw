jQuery("#submit").click(function(){

	//get values
	var a = jQuery("#a").val();
	var b = jQuery ("#b").val();

	// if A is greater than B show >

		if (a > b){
			jQuery("#comparison").text(">");
		}

	// if A is less than B show <

		if(b > a){
			jQuery("#comparison").text("<");
		}

	// if A = B show ==

		if (a == b){
			jQuery("#comparison").text("=");
		}

		if(isNaN(a)|| isNaN(b)){
			jQuery("#comparison").text("NaN");
		}
});