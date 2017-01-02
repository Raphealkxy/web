// JavaScript Document
function insertAfter(newElement,targetElement)
{
	var parent =targetElement.parentNode;//储存父元素
	if(parent.lastChild==targetElement)//判断父元素的最后一个节点是否是目标元素；
	       parent.appendChild(newElement);//如果是，在最后插入
    else 
	parent.insertBefore(newElement,targetElement.nextSibling);//如果不是，在后一个元素前插入。
}