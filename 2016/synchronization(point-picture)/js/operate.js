// JavaScript Document
function prepareSlideshow()
{  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
   if (!document.getElementById("linklist")) return false;
   var slideShow=document.createElement("div");
   slideShow.setAttribute("id","slideshow");
   var preview=document.createElement("img");
   preview.setAttribute("id","preview");
   preview.setAttribute("src","pic/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
   slideShow.appendChild(preview);
   var list=document.getElementById("linklist");
   insertAfter(slideShow,list);
  if (!document.getElementById("preview")) return false;
	var preview=document.getElementById("preview");
	preview.style.position="absolute";
	preview.style.left="0px";
	preview.style.top="0px";
	//var list=document.getElementById("linklist");
	var links=list.getElementsByTagName("a");
	  links[0].onmouseover = function() {
    moveElement("preview",-100,0,10);
  }
  links[1].onmouseover = function() {
    moveElement("preview",-200,0,10);
  }
  links[2].onmouseover = function() {
    moveElement("preview",-300,0,10);
  }
}
addLoadEvent(prepareSlideshow);