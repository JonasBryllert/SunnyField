/**
 * 
 */

$(document).ready(function(){
	
    $("#winterButton").toggle(function() {
        // alert("click1");
        $(".currentButton").trigger("click");
        $(this).addClass("currentButton");
        $("#winterPane").css({ opacity: 0.0 }).animate({
            opacity: '1.0',
            top: '+=485px'
        }, 3000);
    }, function() {
        // alert("click2");
        $(this).removeClass("currentButton");       
        $("#winterPane").removeClass('currentButton').css({ opacity: 1.0 }).animate({
            opacity: '0.0',
            top: '-=485px'
        }, 3000);        
    });

    $("#springButton").toggle(function() {
        // alert("click1");
        $(".currentButton").trigger("click");
        $(this).addClass("currentButton");
        $("#springPane").addClass('currentButton').css({ opacity: 0.0 }).animate({
            opacity: '1.0',
            right: '+=715px'
        }, 3000);
    }, function() {
        // alert("click2");
        $(this).removeClass("currentButton");       
        $("#springPane").removeClass('currentButton').css({ opacity: 1.0 }).animate({
            opacity: '0.0',
            right: '-=715px'
        }, 3000);        
    });

    $("#summerButton").toggle(function() {
        // alert("click1");
        $(".currentButton").trigger("click");
        $(this).addClass("currentButton");
        $("#summerPane").addClass('currentButton').css({ opacity: 0.0 }).animate({
            opacity: '1.0',
            bottom: '+=485px'
        }, 3000);
    }, function() {
        // alert("click2");
        $(this).removeClass("currentButton");       
        $("#summerPane").removeClass('currentButton').css({ opacity: 1.0 }).animate({
            opacity: '0.0',
            bottom: '-=485px'
        }, 3000);        
    });

    $("#autumnButton").toggle(function() {
        // alert("click1");
        $(".currentButton").trigger("click");
        $(this).addClass("currentButton");
        $("#autumnPane").addClass('currentButton').css({ opacity: 0.0 }).animate({
            opacity: '1.0',
            left: '+=715px'
        }, 3000);
    }, function() {
        // alert("click2");
        $(this).removeClass("currentButton");       
        $("#autumnPane").removeClass('currentButton').css({ opacity: 1.0 }).animate({
            opacity: '0.0',
            left: '-=715px'
        }, 3000);        
    });

});

