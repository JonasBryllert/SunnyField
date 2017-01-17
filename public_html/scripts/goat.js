/**
 * This script adds functionality to go next-previous photo
 */

currentPicture = 0; //Not visible

	// $("#fakelink").click(function() {
		// $this.css({
			// cursor: 'default',
			// color: 'black',
			// textDecoration: 'none'
		// });
	// });

function showPushMover(event) {
	$("#fakelink").css({
		cursor: 'default',
		color: 'black',
		textDecoration: 'none'
	});
	
	$("#pushMoverPane").show();
	// $("img:first").slideDown(2000);
	// var prevMoverElement = document.getElementById("fakelink");
	// var nextMoverElement = document.getElementById("pushMoverPane");
	// // alert(moverElement.id);
	// prevMoverElement.style.cursor="default";
	// prevMoverElement.style.color="black";
	// prevMoverElement.style.textDecoration="none";
// 
	// nextMoverElement.style.display="block";
	
}

function showPetrolMover(event) {
	var prevMoverElement = document.getElementById("pushMoverPane");
	var nextMoverElement = document.getElementById("petrolMoverPane");	
	prevMoverElement.style.display="none";
	nextMoverElement.style.display="block";
}

function showRideOnMover(event) {
	var prevMoverElement = document.getElementById("petrolMoverPane");
	var nextMoverElement = document.getElementById("rideOnMoverPane");	
	prevMoverElement.style.display="none";
	nextMoverElement.style.display="block";
}

function showGoat(event) {
	var prevMoverElement = document.getElementById("rideOnMoverPane");
	var nextMoverElement = document.getElementById("goatPane");	
	// alert(prevMoverElement.id + " test " + nextMoverElement.id);
	prevMoverElement.style.display="none";
	nextMoverElement.style.display="block";
}

function backToStart(event) {
	var prevMoverElement = document.getElementById("goatPane");	
	var nextMoverElement = document.getElementById("fakelink");	
	prevMoverElement.style.display="none";
	nextMoverElement.style.cursor="pointer";
	nextMoverElement.style.color="blue";
	nextMoverElement.style.textDecoration="underline";
}
