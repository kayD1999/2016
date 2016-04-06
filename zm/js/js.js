// JavaScript Document
if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1)
{
	window.onload=window.onscroll=window.onresize=function(){
		if(oDiv){
			var oDiv=document.getElementById('absp');
			var scrollTop=document.body.scrollTop;
			var h=document.documentElement.clientHeight-oDiv.offsetHeight;
			var top=scrollTop+h/2;
			oDiv.style.top=top+'px';
		}
	}
}
