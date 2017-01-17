/**
 * 
 */

$(document).ready(function(){
	var test = $("#homemenu");
	test.css("color","black");
	$(".topmenu").click(function() {
		var clickedMenu = this;
		$(".topmenu").each(function(index) {
			if (clickedMenu == this) {
				this.style.color='black';
			}
			else {
				this.style.color='olive';	
			}
		});

		var idString = clickedMenu.id.substring(0, clickedMenu.id.length -4);
		var frames = $(".frames");
		for (var i = 0; i < frames.length; i++) { 
//			alert("frame: " + frames[i].id + " id:" + idString + "index:" + frames[i].id.indexOf(idString));
			if (frames[i].id.indexOf(idString) < 0) {
				frames[i].style.display='none';
			}
			else {
				frames[i].style.display='block';	
			}
		}

	
	});
	

//	$(".topmenu").click(function(event) {
//		menuClicked(event);
//	});
	// test.click(function(event){
 		// alert("As you can see, the link no longer took you to jquery.com");
     	// event.preventDefault();
   	// });
});

// window.onload=function() {
	// // var homeMenu = document.getElementById("homemenu");
	// // homeMenu.onclick=menuClicked();
	// // alert("test");
	// document.getElementById("homemenu").style.color='black';
	// var topMenuElements = document.getElementsByClassName("topmenu");
	// // for (var i = 0; i < topMenuElements.length; i++) {
		// // topMenuElements[i].onclick=menuClicked();
	// // }
// }

function menuClicked(event) {
	// alert("event:" + event);
	// alert("window.event: " + window.event);
	if (event == null) var event = window.event;
	var element = (window.event) ? event.srcElement : event.target;
	var id = element.id;
	// alert("id:" + id);
	var topmenus = document.getElementsByClassName("topmenu");
	for (var i = 0; i < topmenus.length; i++) { 
		if (topmenus[i].id === id) {
			topmenus[i].style.color='black';
		}
		else {
			topmenus[i].style.color='olive';	
		}
	}

	var idString = id.substring(0, id.length -4);
	var frames = document.getElementsByClassName("frames");
	for (var i = 0; i < frames.length; i++) { 
//		alert("frame: " + frames[i].id + " id:" + idString + "index:" + frames[i].id.indexOf(idString));
		if (frames[i].id.indexOf(idString) < 0) {
			frames[i].style.display='none';
		}
		else {
			frames[i].style.display='block';	
		}
	}

}

