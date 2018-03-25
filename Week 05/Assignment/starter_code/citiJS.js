jQuery(document).ready(function(){
//on click "update", recognize city variable
	jQuery("#submit-btn").click(function(){
		event.preventDefault();
		var city = jQuery("#city-type").val();
		jQuery('#city-type').val('');
			//had to look at solution code
		city = city.toLowerCase().trim();
			//had to look at solution for toLowerCase and trim
//change background to corresponding city

	if(city == 'new york city' || city == 'nyc' || city == 'new york') {
		jQuery('body').attr('class','nyc');
	}

	else if(city == 'austin' || city == 'atx') {
		jQuery('body').attr('class','austin');
	}

	else if(city == 'los angeles' || city == 'la') {
		jQuery('body').attr('class','la');
	}

	else if(city == 'san francisco' || city == 'sf' || city == 'san fran') {
		jQuery('body').attr('class','sf');
	}

	else if(city == 'sydney') {
		jQuery('body').attr('class','sydney');
	}

	});

});
