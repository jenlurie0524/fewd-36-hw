
document.getElementById("grayButton").onclick = grayClick;


document.getElementById("whiteButton").onclick= whiteClick;

function grayClick(){
	//background of the body turn gray//
	document.body.style.backgroundColor = "#909090";
	//turn text color white//
	document.body.style.color = "white";


}//gray click

function whiteClick(){
	//background of the body turn gray//
	document.body.style.backgroundColor = "white";
	//turn text color white//
	document.body.style.color = "#909090";


}//white click