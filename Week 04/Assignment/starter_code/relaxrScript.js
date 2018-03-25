function addMe(){

}

jQuery(document).ready(function(){

	jQuery(".readmore").click(function(e){
		e.preventDefault();
		jQuery("#show-this-on-click").slideDown();
		jQuery(".readmore").hide("slow",function(){});
		jQuery(".readless").show();
	});

	jQuery(".readless").click(function(e){
		e.preventDefault();
		jQuery("#show-this-on-click").slideUp();
		jQuery(".readless").hide("slow",function(){});
		jQuery(".readmore").show();
	});

	jQuery('.learnmore').click(function (e) {
        e.preventDefault();
        jQuery('#learnmoretext').slideDown();
        jQuery('.learnmore').hide("slow",function(){});
    });

});

//questions for class
//still confused about the callback functions! Tried to add one but it's still a little funky, not sure what to put within the function part.