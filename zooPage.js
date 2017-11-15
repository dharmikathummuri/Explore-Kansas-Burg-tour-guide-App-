
var table;//variable for table object
var xhr; //XMLHttpRequset object
var zooAnimalArray;
var tableHidden = true;

window.addEventListener("load",start,false);
function start()
{
	
	document.getElementById("sealifeButtonId").addEventListener("click",function(){
			table=document.getElementById("zooAnimalTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataSeaLife();
		//displayData();
		}
		deleteRows();
		},false);
	
	document.getElementById("kansasButtonId").addEventListener("click",function(){
			table=document.getElementById("zooAnimalTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataKansas();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("alpacaButtonId").addEventListener("click",function(){
			table=document.getElementById("zooAnimalTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAlpaca();
		//displayData();
		}
		deleteRows();
		},false);
		
		
		
		document.getElementById("parkButtonId").addEventListener("click",function(){
			table=document.getElementById("zooAnimalTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataParksRecreation();
		//displayData();
		}
		deleteRows();
		},false);
		
		
		
		document.getElementById("jacksonButtonId").addEventListener("click",function(){
			table=document.getElementById("zooAnimalTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataJacksonsCountry();
		//displayData();
		}
		deleteRows();
		},false);
		
			
		
	
}
function deleteRows()
{
	var elmtTable = document.getElementById('zooAnimalTableId');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>=0; x--) 
		{
		elmtTable.removeChild(tableRows[x]);
		}
}

function getXMLDataSeaLife()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{

			zooAnimalArray= xhr.responseXML.getElementsByTagName("SeaLifeAquarium");
			for(var i=0;i<zooAnimalArray.length;i++)
			{
				
				var zooAnimalName= zooAnimalArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				
				//var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var zooAnimalAddress=zooAnimalArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				
				var zooAnimalPhone= zooAnimalArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var zooAnimalWebsite=zooAnimalArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var zooName=document.createElement("td");
		zooName.innerHTML="Name";
		zooName.style.fontSize="30px";
		zooName.style.fontcolor="blue";
		
		var zooAnimalNameCell=document.createElement("td");
		zooAnimalNameCell.innerHTML=zooAnimalName;
		zooAnimalNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(zooName);
		tableRow.appendChild(zooAnimalNameCell);
		
		
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var zooAddress=document.createElement("td");
		zooAddress.innerHTML="Address";
		zooAddress.style.fontSize="30px";	
			//for displaying address discription
		var zooAnimalAddressCell=document.createElement("td");
		zooAnimalAddressCell.innerHTML=zooAnimalAddress;
		zooAnimalAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(zooAddress);
		tableRow2.appendChild(zooAnimalAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var zooPhone=document.createElement("td");
		zooPhone.innerHTML="Contact Number:";
		zooPhone.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalContactCell=document.createElement("td");
		zooAnimalContactCell.innerHTML=zooAnimalPhone;
		zooAnimalContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(zooPhone);
		tableRow3.appendChild(zooAnimalContactCell);
		

		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var zooWebsite=document.createElement("td");
		zooWebsite.innerHTML="weblink:";	
		zooWebsite.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",zooAnimalWebsite);
		anchorTag2.innerHTML=zooAnimalWebsite;
		anchorTag2.style.fontSize="30px";
		zooAnimalWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(zooWebsite);
		tableRow5.appendChild(zooAnimalWebsiteCell);
		
		document.getElementById("zooAnimalTableId").appendChild(tableRow);
		//document.getElementById("zooAnimalTableId").appendChild(tableRow1);
		document.getElementById("zooAnimalTableId").appendChild(tableRow2);
		document.getElementById("zooAnimalTableId").appendChild(tableRow3);
		document.getElementById("zooAnimalTableId").appendChild(tableRow5);

				
	}
		
	}
	},false);
	xhr.open("get","zooPage.xml",true);
	xhr.send(null);
	
	
}



function getXMLDataKansas()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{

			zooAnimalArray= xhr.responseXML.getElementsByTagName("KansasCityZoo");
			for(var i=0;i<zooAnimalArray.length;i++)
			{
				
				var zooAnimalName= zooAnimalArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				
				//var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var zooAnimalAddress=zooAnimalArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				
				var zooAnimalPhone= zooAnimalArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var zooAnimalWebsite=zooAnimalArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var zooName=document.createElement("td");
		zooName.innerHTML="Name";
		zooName.style.fontSize="30px";
		zooName.style.fontcolor="blue";
		
		var zooAnimalNameCell=document.createElement("td");
		zooAnimalNameCell.innerHTML=zooAnimalName;
		zooAnimalNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(zooName);
		tableRow.appendChild(zooAnimalNameCell);
		
		
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var zooAddress=document.createElement("td");
		zooAddress.innerHTML="Address";
		zooAddress.style.fontSize="30px";	
			//for displaying address discription
		var zooAnimalAddressCell=document.createElement("td");
		zooAnimalAddressCell.innerHTML=zooAnimalAddress;
		zooAnimalAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(zooAddress);
		tableRow2.appendChild(zooAnimalAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var zooPhone=document.createElement("td");
		zooPhone.innerHTML="Contact Number:";
		zooPhone.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalContactCell=document.createElement("td");
		zooAnimalContactCell.innerHTML=zooAnimalPhone;
		zooAnimalContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(zooPhone);
		tableRow3.appendChild(zooAnimalContactCell);
		

		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var zooWebsite=document.createElement("td");
		zooWebsite.innerHTML="weblink:";	
		zooWebsite.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",zooAnimalWebsite);
		anchorTag2.innerHTML=zooAnimalWebsite;
		anchorTag2.style.fontSize="30px";
		zooAnimalWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(zooWebsite);
		tableRow5.appendChild(zooAnimalWebsiteCell);
		
		document.getElementById("zooAnimalTableId").appendChild(tableRow);
		//document.getElementById("zooAnimalTableId").appendChild(tableRow1);
		document.getElementById("zooAnimalTableId").appendChild(tableRow2);
		document.getElementById("zooAnimalTableId").appendChild(tableRow3);
		document.getElementById("zooAnimalTableId").appendChild(tableRow5);

				
	}
		
	}
	},false);
	xhr.open("get","zooPage.xml",true);
	xhr.send(null);
	
	
}

function getXMLDataAlpaca()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{

			zooAnimalArray= xhr.responseXML.getElementsByTagName("AlpacaKingdom");
			for(var i=0;i<zooAnimalArray.length;i++)
			{
				
				var zooAnimalName= zooAnimalArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				
				//var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var zooAnimalAddress=zooAnimalArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				
				var zooAnimalPhone= zooAnimalArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var zooAnimalWebsite=zooAnimalArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var zooName=document.createElement("td");
		zooName.innerHTML="Name";
		zooName.style.fontSize="30px";
		zooName.style.fontcolor="blue";
		
		var zooAnimalNameCell=document.createElement("td");
		zooAnimalNameCell.innerHTML=zooAnimalName;
		zooAnimalNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(zooName);
		tableRow.appendChild(zooAnimalNameCell);
		
		
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var zooAddress=document.createElement("td");
		zooAddress.innerHTML="Address";
		zooAddress.style.fontSize="30px";	
			//for displaying address discription
		var zooAnimalAddressCell=document.createElement("td");
		zooAnimalAddressCell.innerHTML=zooAnimalAddress;
		zooAnimalAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(zooAddress);
		tableRow2.appendChild(zooAnimalAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var zooPhone=document.createElement("td");
		zooPhone.innerHTML="Contact Number:";
		zooPhone.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalContactCell=document.createElement("td");
		zooAnimalContactCell.innerHTML=zooAnimalPhone;
		zooAnimalContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(zooPhone);
		tableRow3.appendChild(zooAnimalContactCell);
		

		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var zooWebsite=document.createElement("td");
		zooWebsite.innerHTML="weblink:";	
		zooWebsite.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",zooAnimalWebsite);
		anchorTag2.innerHTML=zooAnimalWebsite;
		anchorTag2.style.fontSize="30px";
		zooAnimalWebsiteCell.appendChild(anchorTag2);
			//appending two cells to the table
		tableRow5.appendChild(zooWebsite);
		tableRow5.appendChild(zooAnimalWebsiteCell);
		
		document.getElementById("zooAnimalTableId").appendChild(tableRow);
		//document.getElementById("zooAnimalTableId").appendChild(tableRow1);
		document.getElementById("zooAnimalTableId").appendChild(tableRow2);
		document.getElementById("zooAnimalTableId").appendChild(tableRow3);
		document.getElementById("zooAnimalTableId").appendChild(tableRow5);

				
	}
		
	}
	},false);
	xhr.open("get","zooPage.xml",true);
	xhr.send(null);
	
	
}

function getXMLDataParksRecreation()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{

			zooAnimalArray= xhr.responseXML.getElementsByTagName("ParksRecreation");
			for(var i=0;i<zooAnimalArray.length;i++)
			{
				
				var zooAnimalName= zooAnimalArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				
				//var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var zooAnimalAddress=zooAnimalArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				
				var zooAnimalPhone= zooAnimalArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var zooAnimalWebsite=zooAnimalArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var zooName=document.createElement("td");
		zooName.innerHTML="Name";
		zooName.style.fontSize="30px";
		zooName.style.fontcolor="blue";
		
		var zooAnimalNameCell=document.createElement("td");
		zooAnimalNameCell.innerHTML=zooAnimalName;
		zooAnimalNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(zooName);
		tableRow.appendChild(zooAnimalNameCell);
		
		
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var zooAddress=document.createElement("td");
		zooAddress.innerHTML="Address";
		zooAddress.style.fontSize="30px";	
			//for displaying address discription
		var zooAnimalAddressCell=document.createElement("td");
		zooAnimalAddressCell.innerHTML=zooAnimalAddress;
		zooAnimalAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(zooAddress);
		tableRow2.appendChild(zooAnimalAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var zooPhone=document.createElement("td");
		zooPhone.innerHTML="Contact Number:";
		zooPhone.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalContactCell=document.createElement("td");
		zooAnimalContactCell.innerHTML=zooAnimalPhone;
		zooAnimalContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(zooPhone);
		tableRow3.appendChild(zooAnimalContactCell);
		

		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var zooWebsite=document.createElement("td");
		zooWebsite.innerHTML="weblink:";	
		zooWebsite.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",zooAnimalWebsite);
		anchorTag2.innerHTML=zooAnimalWebsite;
		anchorTag2.style.fontSize="30px";
		zooAnimalWebsiteCell.appendChild(anchorTag2);
			//appending two cells to the table
		tableRow5.appendChild(zooWebsite);
		tableRow5.appendChild(zooAnimalWebsiteCell);
		
		document.getElementById("zooAnimalTableId").appendChild(tableRow);
		//document.getElementById("zooAnimalTableId").appendChild(tableRow1);
		document.getElementById("zooAnimalTableId").appendChild(tableRow2);
		document.getElementById("zooAnimalTableId").appendChild(tableRow3);
		document.getElementById("zooAnimalTableId").appendChild(tableRow5);

				
	}
		
	}
	},false);
	xhr.open("get","zooPage.xml",true);
	xhr.send(null);
	
	
}

function getXMLDataJacksonsCountry()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{

			zooAnimalArray= xhr.responseXML.getElementsByTagName("JacksonCountry");
			for(var i=0;i<zooAnimalArray.length;i++)
			{
				
				var zooAnimalName= zooAnimalArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				
				//var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var zooAnimalAddress=zooAnimalArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				
				var zooAnimalPhone= zooAnimalArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var zooAnimalWebsite=zooAnimalArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var zooName=document.createElement("td");
		zooName.innerHTML="Name";
		zooName.style.fontSize="30px";
		zooName.style.fontcolor="blue";
		
		var zooAnimalNameCell=document.createElement("td");
		zooAnimalNameCell.innerHTML=zooAnimalName;
		zooAnimalNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(zooName);
		tableRow.appendChild(zooAnimalNameCell);
		
		
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var zooAddress=document.createElement("td");
		zooAddress.innerHTML="Address";
		zooAddress.style.fontSize="30px";	
			//for displaying address discription
		var zooAnimalAddressCell=document.createElement("td");
		zooAnimalAddressCell.innerHTML=zooAnimalAddress;
		zooAnimalAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(zooAddress);
		tableRow2.appendChild(zooAnimalAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var zooPhone=document.createElement("td");
		zooPhone.innerHTML="Contact Number:";
		zooPhone.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalContactCell=document.createElement("td");
		zooAnimalContactCell.innerHTML=zooAnimalPhone;
		zooAnimalContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(zooPhone);
		tableRow3.appendChild(zooAnimalContactCell);
		

		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var zooWebsite=document.createElement("td");
		zooWebsite.innerHTML="weblink:";	
		zooWebsite.style.fontSize="30px";
			//for displaying contact number
		var zooAnimalWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",zooAnimalWebsite);
		anchorTag2.innerHTML=zooAnimalWebsite;
		anchorTag2.style.fontSize="30px";
		zooAnimalWebsiteCell.appendChild(anchorTag2);
			//appending two cells to the table
		tableRow5.appendChild(zooWebsite);
		tableRow5.appendChild(zooAnimalWebsiteCell);
		
		document.getElementById("zooAnimalTableId").appendChild(tableRow);
		//document.getElementById("zooAnimalTableId").appendChild(tableRow1);
		document.getElementById("zooAnimalTableId").appendChild(tableRow2);
		document.getElementById("zooAnimalTableId").appendChild(tableRow3);
		document.getElementById("zooAnimalTableId").appendChild(tableRow5);

				
	}
		
	}
	},false);
	xhr.open("get","zooPage.xml",true);
	xhr.send(null);
	
	
}

