jQuery(document).ready(function(){
//on click "update", recognize city variable

	jQuery("#submit-btn").click(function(event){
		event.preventDefault();
		var city = jQuery("#city-type").val();
		jQuery('#city-type').val('');
			//had to look at solution code
		city = city.toLowerCase().trim();
			//had to look at solution for toLowerCase and trim
//change background to corresponding city

jQuery('#submit-btn').click(switchCity);

	if(city == 'New York City' || city == 'nyc' || city == 'New York') {
		jQuery('body').attr('class','nyc');
	}

	else if (city == 'Austin' || city == 'atx') {
		jQuery('body').attr('class','austin');
	}

	else if(city == 'Los Angeles' || city == 'la') {
		jQuery('body').attr('class','la');
	}

	else if (city == 'San Francisco' || city == 'SF' || city == 'san fran') {
		jQuery('body').attr('class','sf');
	}

	else if (city == 'sydney') {
		jQuery('body').attr('class','sydney');
	}

	});

});

//tried to create separate function "switchCity" but wasn't neccessary
//when do you create a function vs keep it all under the document ready 
//example: jQuery('#submit-btn').click(switchCity);
//what's the difference between add class and attr
