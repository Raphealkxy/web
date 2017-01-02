// JavaScript Document
;$(function()
{
	'use strict';
	var slidebar=$("#slidebar");//选择侧栏
	var yinying=$(".yinying");
	var sliderbar_trigger=$("#sliderbar_trigger");
	var gotop=$(".go-back-top");
	sliderbar_trigger.on('click',function()
	{
		yinying.fadeIn();
		slidebar.animate({'right':0});
		});
		
	yinying.on('click',function()
	{
		yinying.fadeOut();
		slidebar.animate({'right':-slidebar.width()});
		});
	gotop.on('click',function()
	{
		$('html,body').animate({scrollTop:0},800);
		
	});
	$(window).on('scroll',function()
	{
		if($(window).scrollTop()>$(window).height())
		      gotop.fadeIn();
			  else
			    gotop.fadeOut();
		
	});
	$(window).trigger('scroll');
	
}); 