// JavaScript Document
$(document).ready(function() {
	var button=$(".button");
	var sliderbar=$(".slidebar");
	var ying=$(".ping");
	button.on("click",function()
	{   
	     ying.fadeIn();
		
		sliderbar.animate({"left":0});

		
		
	});
	ying.on("click",function()
	{
		sliderbar.animate({"left":-300});
		ying.fadeOut();
	});
	
	
    
});