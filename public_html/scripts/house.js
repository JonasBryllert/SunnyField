/**
 * This script adds functionality to go next-previous photo
 */

var currentPhoto = 1;
var houseCaptionArray = [];
houseCaptionArray[0] = "";// Dummy for starting numbers on 1
houseCaptionArray[1] = "This is the start of it all.";
houseCaptionArray[2] = "Raft foundation is going in.";
houseCaptionArray[3] = "House team erecting the shell.";
houseCaptionArray[4] = "Roof tiles and solar panels.";
houseCaptionArray[5] = "Here comes the garage.";
houseCaptionArray[6] = "Preparation for driveway.";
houseCaptionArray[7] = "Finished.";

var animationOngoing = false;

$(document).ready(function(){
	setTextCaption(1);
	checkActions();
	$("a.photolink").click(function() {
		if (animationOngoing == true) {
			return;
		}
		$(".photolink, #photoCaption").hide();
		if ("prevLink" == $(this).attr("id")) {
			prevPhoto();
		}
		else {
			nextPhoto();
		}
	});
});

function prevPhoto() {
	if (currentPhoto === 1) {
		return;
	}
	currentPhoto = currentPhoto - 1;
	showPhoto();
}

function nextPhoto() {
	if (currentPhoto === (houseCaptionArray.length - 1)) {
		return;
	}
	currentPhoto = currentPhoto + 1;
	showPhoto();
}

function showPhoto() {
	animationOngoing = true;
	var photoElement = $("#photo");
	var newPhotoPath = "images/house/house" + currentPhoto + ".jpg";

	photoElement.stop().fadeOut(800, function() {
		$(this).attr("src", newPhotoPath);
		$(this).delay(500).fadeIn(1500, function() {
			animationOngoing = false;
			$(".photolink, #photoCaption").show();
		});
		setTextCaption(currentPhoto);
		checkActions();	
	});
}


function checkActions() {
	var eltPrevious = document.getElementById("prevLink");
	if (currentPhoto == 1) {
		eltPrevious.style.color="purple";
		eltPrevious.style.cursor="text";
	}
	else {
		eltPrevious.style.color="blue";		
		eltPrevious.style.cursor="pointer";
	}

	var eltNext = document.getElementById("nextLink");
	if (currentPhoto == (houseCaptionArray.length-1)) {
		eltNext.style.color="purple";
		eltNext.style.cursor="text";
	}
	else {
		eltNext.style.color="blue";		
		eltNext.style.cursor="pointer";
	}	
}

function setTextCaption(number) {
	var textElement = document.getElementById("photoCaption");
//	alert("photoText : " + number + " " + textElement.innerHtml + " " + textElement.textContent);
	var textContent = textElement.textContent;
	if (textContent === undefined) {
		textElement.innerHtml = "Photo " + number + 
		"(" + (houseCaptionArray.length - 1) + "): " + houseCaptionArray[number];
	}
	else {
		textElement.textContent = "Photo " + number + 
		"(" + (houseCaptionArray.length - 1) + "): " + houseCaptionArray[number];		
	}
}
