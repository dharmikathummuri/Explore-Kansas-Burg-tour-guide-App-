
"use strict";

var xhr;
var store;
//var ptag=document.getElementById("contentId");

window.addEventListener("load",function(){
	
	
	document.getElementById("swagatButton").addEventListener("click",function(){
		getXmlData();
		displayData();
		
	},false);//end anon func for click
	
	
},false);

function getXmlData()
{
	
	xhr= new XMLHttpRequest;
	xhr.open("get","groceries.xml",false);
	xhr.send(null);
	store = xhr.responseXML.getElementsByTagName("storeDetails");
	
}//end function 

function displayData()
{
	for(var i=0;i<store.length;i++)
	{
		var storeName= store.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var storePhone = store.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
		var storeLocation=store.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
		var storeAddress=store.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
		var storeHours=store.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
		
		
		
		
		var para = document.createElement("P");
		var t = document.createTextNode(storeName);
		para.appendChild(t);
		document.getElementById("displayId").appendChild(para);
		
		
		
		
		
	}
	
}//end function	
		
