$(document).ready(function() {
	$("#p1").click(function() {

		$(".disappear").toggle();
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#h1").click(function(){
		$("#h1").fadeOut();
	});
});
