$(document).ready(function(){
	$("#btn_get_blog").click(function(event) {
		// alert("getBlogs");
		getBlogs();
	});
		
	$("form").submit(submit_comment);
	
	getBlogs();
});

//Gets the current messages from the server
function getBlogs() {
	// alert("Calling get blogs");
	$.getJSON('../php/readBlog.php','', function(response, status) {
		// alert("response: " + response);
		// response = eval("(" + responseIn + ")");
		// alert("response2: " + response);
		// var response2 = $parseJSON(responseIn);
		// alert("response3: " + response2); 
		
		var newHtml = "";
		for(var i = 0; i < response.blogs.blog.length; i++) {
			newHtml += '<div class="blogheader">From: ' + response.blogs.blog[i].email + '<br />Date: ' + response.blogs.blog[i].time + '</div>';
			newHtml += '<div class="blogbackground">' + response.blogs.blog[i].message + '</div>';
			newHtml += '<br />';
		}
		$("#blogEntryDiv").html(newHtml);
		var newBlogNumberHtml = "Viewing blog entry 1 - " + response.blogs.blog.length + " (" + response.blogs.blog.length + ") ";
		$("#blogNumber").html(newBlogNumberHtml);
		// blogDiv.scrollTop = blogDiv.scrollHeight;
	});		
	// alert("call done");
}

function submit_comment() {
	var mail = $('[name="mail"]').val();
	// alert("mail: " + mail);
	if (!mail || mail == "") {
		alert("Must write an email address");
		return false;
	}
	var comment = $('[name="comment"]').val();
	
	// alert("comment: " + comment);
	if (!comment || comment == "") {
		alert("Must write a comment");
		return false;
	}
	var formFields = $(".inputfield").serialize();
	$(".inputfield, #send").attr('disabled', 'disabled');
	$("#commentPane").addClass("backgroundimage");
	$("form").fadeTo(1500, 0.2, function() {
		sendComment(formFields);
	});
	return false;
}	

function sendComment(parameters) {
	try {
		// alert ("serialized: " + parameters);
		$.post("../php/add_comment.php", parameters, function(response, status) {
		  	alert("Status: " + status + "\n" + response);
			$("#commentPane").removeClass("backgroundimage");
			$(".inputfield").val('');
			$("input:checked").removeAttr('checked');
			$("form").fadeTo(2000, 1.0);
			$(".inputfield, #send").removeAttr('disabled');
		});  
	}
	catch (e) {
		alert("Sending the comment failed, please try later...");
	}
}
