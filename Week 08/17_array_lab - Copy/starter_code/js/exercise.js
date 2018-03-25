function selectPet(petType){

    // Get the specific pet data set
    var petInfo = petData[petType];

    // Set the title
    jQuery('.petDisplayName').text(petInfo['displayName']);

    // Empty the specification data
    jQuery('.petsDataSpecs').empty();

    // Add the space required, size, weight
    var myString = "<dt>Size</dt><dd>"+petInfo['size']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);

    var myString = "<dt>Weight</dt><dd>"+petInfo['weight']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);

    var myString = "<dt>Space Required</dt><dd>"+petInfo['spaceRequired']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);
    // Add logic to add the trainability and lap size images
    var myString = "<dt>Trainability</dt><dd>";
    if(petInfo["trainability"] == true){
        myString+="<img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png'/>";
    } else {
        myString+="<img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png'/>";
    }
    myString+="</dd>";
    jQuery('.petsDataSpecs').append(myString);

    var myString = "<dt>Lap Size</dt><dd>";
    if(petInfo["fitsOnLap"] == true){
        myString+="<img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png'/>";
    } else {
        myString+="<img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png'/>";
    }
    myString+="</dd>";
    jQuery('.petsDataSpecs').append(myString);

    // Add the foods (may require loop)
    var myString = "<dt>Foods</dt><dd><ul>";

    for(var q=0;q<petInfo['foods'].length;q++){
        myString += "<li>"+petInfo['foods'][q]+"</li>";
    }

      myString+= "</ul></dd>";
    jQuery('.petsDataSpecs').append(myString);


    // Update the images

        // Set the main image
    jQuery('.photoLarge').attr("src",petInfo['images'][0]['img']);

        // Empty the thumbnails
    jQuery('.thumbHaus').empty();

        // Add the thumbnails
    var myThumbnails="";
    for(var q=1;q<petInfo['images'].length;q++){
        myThumbnails+="<a href='"+petInfo['images'][q]['img']+"'> <img src='"+petInfo['images'][q]['thumb']+"'/> </a>"
    }
 
    jQuery('.thumbHaus').append(myThumbnails);


        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
    jQuery('.thumbHaus a').on("click", function(e){
        e.preventDefault();
        var newSrc = jQuery(this).attr("href");
            jQuery('.photoLarge').attr("src",newSrc);


    });

    // Empty the ideal for


    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run

    selectPet(jQuery("#petType").val());

    //Update whenever a new value is picked

    jQuery("#petType").on('change', function(){
        selectPet(jQuery(this).val());

    });

});