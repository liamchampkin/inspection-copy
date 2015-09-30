$(document).ready(function(){
	$(".animation-register-pop input").on('click', function(){
	    console.log("input clicked");
	    $(".animation-register-pop").addClass("animate-left");
		 function show_what_next(){
		 	$(".what-next").removeClass("display-none");
		 	$(".what-next").addClass("animate-what-next");
		 };
		 window.setTimeout( show_what_next, 1000 ); // 5 seconds
		 function show_help(){
		 	$(".need-help").removeClass("display-none");
		 	$(".need-help").addClass("animate-what-next");
		 };
		 window.setTimeout( show_help, 2000 ); // 10 seconds
	});
});