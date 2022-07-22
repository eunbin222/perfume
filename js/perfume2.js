$(document).ready(function(){
	
	$("header button").click(function(){
		$("nav").stop().slideToggle("slow", function(){
			if($("nav").css("display")=="block"){
			$("heder button").html("&#x2630;");
			}
			 if($("nav").css("display")=="none"){
			 $("heder button").text("X");
			 }
		});
	});
	
	$("nav a").click(function(){
		$("nav").stop().slideUp();
		$("heder button").html("&#x2630;");
	});
	
});