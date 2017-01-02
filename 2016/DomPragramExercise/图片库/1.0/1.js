// JavaScript Document
addLoadEvent(preparePic);
function preparePic()
{
	var gallery=document.getElementById("nav1");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		links[i].onclick=function()
		{
			showPic(this);
			return false;
			
		}
		
		
	}
	
	
}

function showPic(wps)
{
	var source=wps.getAttribute("href");
	var picture=document.getElementById("picture");
	picture.setAttribute("src",source);
	var text=wps.getAttribute("title");
	var text1=document.getElementById("text");
	text1.firstChild.nodeValue=text;
	return true;
}
function addLoadEvent(func)
{
	var oldonLoad=window.onload;
	if(typeof window.onload!="function")
	{
		window.onload=func;
		
	}
	else
	{
		window.onload=function()
		{
			oldonLoad();
			func();
			
		}
		
	}
	
}