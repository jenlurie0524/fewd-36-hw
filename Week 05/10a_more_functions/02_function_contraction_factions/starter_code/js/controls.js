

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms
    var firstWordValue = jQuery("#firstWord").val();
    var secondWordValue = jQuery("#secondWord").val();
    // Create phrase to test by combining wordOne and wordTwo with a space
     var combinedWordValues = firstWordValue+" "+secondWordValue;

        // Test phrase
     var result = checkForConjunction(combinedWordValues);
        // if Test Phrase returns false search phrase with words in reverse order
    if (result == false){
        combinedWordValues = secondWordValue+" "+firstWordValue;
        result = checkForConjunction(combinedWordValues);
    }
 
    // If return is not false
    if (result != false){
            // Set the output variable to the result
          jQuery("#contractionResult").text(result);
          
            // Set the log variable to wordOne wordTwo and the contraction
            jQuery(".playAreaResultsLog").append("<p>"+firstWordValue+" "+secondWordValue+": "+result+"</p>")

        }
            // Set the output variable to "None Found"
    if (result == false){
            jQuery("#contractionResult").text("None Found");

            // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags
           
             jQuery(".playAreaResultsLog").append("<p>"+firstWordValue+" "+secondWordValue+": no contraction"+"</p>")

        }

        // Update contractionResult


        // Add wordOne + wordTwo + result to log


        // Empty wordOne

        // Empty wordTwo


} // end conjunctionFormChecking





function resetAllForms(){

    // Empty Result

    // Empty wordOne

    // Empty wordTwo

    // Empty the log

} // resetAllForms




jQuery( document ).ready(function() {

        // Bind conjunctionFormChecking to button
        jQuery("#btnCheckConjunction").click(conjunctionFormChecking);

        // Bind reset to button



});