
var table;//variable for table object
var xhr; //XMLHttpRequset object
var AmusementArray;
var tableHidden = true;

//event listener to load a page
window.addEventListener("load",start,false);
function start()
{
			//creating event listener when the first button is clicked
			document.getElementById("worldsButtonId").addEventListener("click",function(){
			table=document.getElementById("amusementTableId");
			table.style.visibility="hidden";
			tableHidden= true;
			//if the table is hidden,make it visible 
			if(table.style.visibility=="hidden")
			{
				table.style.visibility="visible";	
				tableHidden=false;
				//function to get xml data when the first button is clicked
				getXMLDataWorlds();
		//displayData();
			}
		//function to delete the rows when a next button is clicked
		deleteRows();
		},false);
	
			document.getElementById("adventureButtonId").addEventListener("click",function(){
			table=document.getElementById("amusementTableId");
			table.style.visibility="hidden";
			tableHidden= true;
			if(table.style.visibility=="hidden")
			{
				table.style.visibility="visible";	
				tableHidden=false;
				getXMLDataAdventure();
		//displayData();
		}
		deleteRows();
		},false);
		
			document.getElementById("cocoButtonId").addEventListener("click",function(){
			table=document.getElementById("amusementTableId");
			table.style.visibility="hidden";
			tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataCoCo();
		//displayData();
		}
		deleteRows();
		},false);
		
			document.getElementById("greatWolfButtonId").addEventListener("click",function(){
			table=document.getElementById("amusementTableId");
			table.style.visibility="hidden";
			tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataGreatWolf();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("SprngsButtonId").addEventListener("click",function(){
			table=document.getElementById("amusementTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataSpringsAquatic();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("bayButtonId").addEventListener("click",function(){
			table=document.getElementById("amusementTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataBayWater();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("SchlitterbahnButtonId").addEventListener("click",function(){
			table=document.getElementById("amusementTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataSchlitterbahn();
		//displayData();
		}
		deleteRows();
		},false);
		
		
	
}
//function to remove the previous button data when next button is clicked
function deleteRows()
{
	var elmtTable = document.getElementById('amusementTableId');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>=0; x--) 
		{
		elmtTable.removeChild(tableRows[x]);
		}
}
//function to get xml data by sending asych request
function getXMLDataWorlds()
{
	
	xhr= new XMLHttpRequest;

	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details

		
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			

			AmusementArray= xhr.responseXML.getElementsByTagName("WorldsOfFun");

			for(var i=0;i<AmusementArray.length;i++)
			{
				var AmusementName= AmusementArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
												//console.log(AmusementName);

				var AmusementLocation = AmusementArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var AmusementAddress=AmusementArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				
				var AmusementPhone= AmusementArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var AmusementWebsite=AmusementArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var AmuseName=document.createElement("td");
		AmuseName.innerHTML="Name";
		AmuseName.style.fontSize="30px";
		AmuseName.style.fontcolor="blue";
		
		var AmusementNameCell=document.createElement("td");
		AmusementNameCell.innerHTML=AmusementName;
		AmusementNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(AmuseName);
		tableRow.appendChild(AmusementNameCell);
		
		
		//for displaying location
		var tableRow1 = document.createElement("tr");
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
		
		var AmuseLocation=document.createElement("td");
		AmuseLocation.innerHTML="Address";
		AmuseLocation.style.fontSize="30px";	
			//for displaying address discription
		var AmusementLocationCell=document.createElement("td");
		AmusementLocationCell.innerHTML=AmusementLocation;
		AmusementLocationCell.style.fontSize="30px";
		
		tableRow1.appendChild(AmuseLocation);
		tableRow1.appendChild(AmusementLocationCell);
			
			//for Address
		var AmuseAddress=document.createElement("td");
		AmuseAddress.innerHTML="Address";
		AmuseAddress.style.fontSize="30px";	
			//for displaying address discription
		var AmusementAddressCell=document.createElement("td");
		AmusementAddressCell.innerHTML=AmusementAddress;
		AmusementAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(AmuseAddress);
		tableRow2.appendChild(AmusementAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var AmusePhone=document.createElement("td");
		AmusePhone.innerHTML="Contact Number:";
		AmusePhone.style.fontSize="30px";
			//for displaying contact number
		var AmusementContactCell=document.createElement("td");
		AmusementContactCell.innerHTML=AmusementPhone;
		AmusementContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(AmusePhone);
		tableRow3.appendChild(AmusementContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var AmuseWebsite=document.createElement("td");
		AmuseWebsite.innerHTML="weblink:";	
		AmuseWebsite.style.fontSize="30px";
			//for displaying contact number
			
		
		
		
		var AmusementWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",AmusementWebsite);
		anchorTag2.innerHTML=AmusementWebsite;
		anchorTag2.style.fontSize="30px";
		AmusementWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(AmuseWebsite);
		tableRow5.appendChild(AmusementWebsiteCell);
		
		document.getElementById("amusementTableId").appendChild(tableRow);
		document.getElementById("amusementTableId").appendChild(tableRow1);
		document.getElementById("amusementTableId").appendChild(tableRow2);
		document.getElementById("amusementTableId").appendChild(tableRow3);
		document.getElementById("amusementTableId").appendChild(tableRow5);
		
				
	}
		
	}
	},false);
	xhr.open("get","amusements.xml",true);
	xhr.send(null);
	
	
}

//function to get xml data by sending asych request
function getXMLDataAdventure()
{
	
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			AmusementArray= xhr.responseXML.getElementsByTagName("AdventureOasis");
			for(var i=0;i<AmusementArray.length;i++)
			{
				
				var AmusementName= AmusementArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var AmusementLocation = AmusementArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var AmusementAddress=AmusementArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var AmusementPhone= AmusementArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var AmusementWebsite=AmusementArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var AmuseName=document.createElement("td");
		AmuseName.innerHTML="Name";
		AmuseName.style.fontSize="30px";
		AmuseName.style.fontcolor="blue";
		
		var AmusementNameCell=document.createElement("td");
		AmusementNameCell.innerHTML=AmusementName;
		AmusementNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(AmuseName);
		tableRow.appendChild(AmusementNameCell);
		
		var tableRow1 = document.createElement("tr");
		var AmuseLocation=document.createElement("td");
		AmuseLocation.innerHTML="Address";
		AmuseLocation.style.fontSize="30px";	
			//for displaying address discription
		var AmusementLocationCell=document.createElement("td");
		AmusementLocationCell.innerHTML=AmusementLocation;
		AmusementLocationCell.style.fontSize="30px";
		
		tableRow1.appendChild(AmuseLocation);
		tableRow1.appendChild(AmusementLocationCell);
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var AmuseAddress=document.createElement("td");
		AmuseAddress.innerHTML="Address";
		AmuseAddress.style.fontSize="30px";	
			//for displaying address discription
		var AmusementAddressCell=document.createElement("td");
		AmusementAddressCell.innerHTML=AmusementAddress;
		AmusementAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(AmuseAddress);
		tableRow2.appendChild(AmusementAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var AmusePhone=document.createElement("td");
		AmusePhone.innerHTML="Contact Number:";
		AmusePhone.style.fontSize="30px";
			//for displaying contact number
		var AmusementContactCell=document.createElement("td");
		AmusementContactCell.innerHTML=AmusementPhone;
		AmusementContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(AmusePhone);
		tableRow3.appendChild(AmusementContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var AmuseWebsite=document.createElement("td");
		AmuseWebsite.innerHTML="weblink:";	
		AmuseWebsite.style.fontSize="30px";
			//for displaying contact number
		var AmusementWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",AmusementWebsite);
		anchorTag2.innerHTML=AmusementWebsite;
		anchorTag2.style.fontSize="30px";
		AmusementWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(AmuseWebsite);
		tableRow5.appendChild(AmusementWebsiteCell);
		
		document.getElementById("amusementTableId").appendChild(tableRow);
		document.getElementById("amusementTableId").appendChild(tableRow1);
		document.getElementById("amusementTableId").appendChild(tableRow2);
		document.getElementById("amusementTableId").appendChild(tableRow3);
		document.getElementById("amusementTableId").appendChild(tableRow5);
				
	}
		
	}
	},false);
	xhr.open("get","amusements.xml",true);
	xhr.send(null);
	
	
	
}
//function to get xml data by sending asych request
function getXMLDataCoCo()
{
	
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			AmusementArray= xhr.responseXML.getElementsByTagName("CocoKeyWater");
			for(var i=0;i<AmusementArray.length;i++)
			{
				
				var AmusementName= AmusementArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var AmusementLocation = AmusementArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var AmusementAddress=AmusementArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var AmusementPhone= AmusementArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var AmusementWebsite=AmusementArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var AmuseName=document.createElement("td");
		AmuseName.innerHTML="Name";
		AmuseName.style.fontSize="30px";
		AmuseName.style.fontcolor="blue";
		
		var AmusementNameCell=document.createElement("td");
		AmusementNameCell.innerHTML=AmusementName;
		AmusementNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(AmuseName);
		tableRow.appendChild(AmusementNameCell);
		
		var tableRow1 = document.createElement("tr");
		var AmuseLocation=document.createElement("td");
		AmuseLocation.innerHTML="Address";
		AmuseLocation.style.fontSize="30px";	
			//for displaying address discription
		var AmusementLocationCell=document.createElement("td");
		AmusementLocationCell.innerHTML=AmusementLocation;
		AmusementLocationCell.style.fontSize="30px";
		
		tableRow1.appendChild(AmuseLocation);
		tableRow1.appendChild(AmusementLocationCell);
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var AmuseAddress=document.createElement("td");
		AmuseAddress.innerHTML="Address";
		AmuseAddress.style.fontSize="30px";	
			//for displaying address discription
		var AmusementAddressCell=document.createElement("td");
		AmusementAddressCell.innerHTML=AmusementAddress;
		AmusementAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(AmuseAddress);
		tableRow2.appendChild(AmusementAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var AmusePhone=document.createElement("td");
		AmusePhone.innerHTML="Contact Number:";
		AmusePhone.style.fontSize="30px";
			//for displaying contact number
		var AmusementContactCell=document.createElement("td");
		AmusementContactCell.innerHTML=AmusementPhone;
		AmusementContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(AmusePhone);
		tableRow3.appendChild(AmusementContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var AmuseWebsite=document.createElement("td");
		AmuseWebsite.innerHTML="weblink:";	
		AmuseWebsite.style.fontSize="30px";
			//for displaying contact number
		var AmusementWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",AmusementWebsite);
		anchorTag2.innerHTML=AmusementWebsite;
		anchorTag2.style.fontSize="30px";
		AmusementWebsiteCell.appendChild(anchorTag2);
		
		
			//appending two cells to the table
		tableRow5.appendChild(AmuseWebsite);
		tableRow5.appendChild(AmusementWebsiteCell);
		
		document.getElementById("amusementTableId").appendChild(tableRow);
		document.getElementById("amusementTableId").appendChild(tableRow1);
		document.getElementById("amusementTableId").appendChild(tableRow2);
		document.getElementById("amusementTableId").appendChild(tableRow3);
		document.getElementById("amusementTableId").appendChild(tableRow5);
				
	}
		
	}
	},false);
	xhr.open("get","amusements.xml",true);
	xhr.send(null);
	
	
	
}
//function to get xml data by sending asych request
function getXMLDataGreatWolf()
{
	
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			AmusementArray= xhr.responseXML.getElementsByTagName("GreatWolfLodge");
			for(var i=0;i<AmusementArray.length;i++)
			{
				
				var AmusementName= AmusementArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var AmusementLocation = AmusementArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var AmusementAddress=AmusementArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var AmusementPhone= AmusementArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var AmusementWebsite=AmusementArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var AmuseName=document.createElement("td");
		AmuseName.innerHTML="Name";
		AmuseName.style.fontSize="30px";
		AmuseName.style.fontcolor="blue";
		
		var AmusementNameCell=document.createElement("td");
		AmusementNameCell.innerHTML=AmusementName;
		AmusementNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(AmuseName);
		tableRow.appendChild(AmusementNameCell);
		
		var tableRow1 = document.createElement("tr");
		var AmuseLocation=document.createElement("td");
		AmuseLocation.innerHTML="Address";
		AmuseLocation.style.fontSize="30px";	
			//for displaying address discription
		var AmusementLocationCell=document.createElement("td");
		AmusementLocationCell.innerHTML=AmusementLocation;
		AmusementLocationCell.style.fontSize="30px";
		
		tableRow1.appendChild(AmuseLocation);
		tableRow1.appendChild(AmusementLocationCell);
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var AmuseAddress=document.createElement("td");
		AmuseAddress.innerHTML="Address";
		AmuseAddress.style.fontSize="30px";	
			//for displaying address discription
		var AmusementAddressCell=document.createElement("td");
		AmusementAddressCell.innerHTML=AmusementAddress;
		AmusementAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(AmuseAddress);
		tableRow2.appendChild(AmusementAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var AmusePhone=document.createElement("td");
		AmusePhone.innerHTML="Contact Number:";
		AmusePhone.style.fontSize="30px";
			//for displaying contact number
		var AmusementContactCell=document.createElement("td");
		AmusementContactCell.innerHTML=AmusementPhone;
		AmusementContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(AmusePhone);
		tableRow3.appendChild(AmusementContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var AmuseWebsite=document.createElement("td");
		AmuseWebsite.innerHTML="weblink:";	
		AmuseWebsite.style.fontSize="30px";
			//for displaying contact number
		var AmusementWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",AmusementWebsite);
		anchorTag2.innerHTML=AmusementWebsite;
		anchorTag2.style.fontSize="30px";
		AmusementWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(AmuseWebsite);
		tableRow5.appendChild(AmusementWebsiteCell);
		
		document.getElementById("amusementTableId").appendChild(tableRow);
		document.getElementById("amusementTableId").appendChild(tableRow1);
		document.getElementById("amusementTableId").appendChild(tableRow2);
		document.getElementById("amusementTableId").appendChild(tableRow3);
		document.getElementById("amusementTableId").appendChild(tableRow5);
				
	}
		
	}
	},false);
	xhr.open("get","amusements.xml",true);
	xhr.send(null);
	
	
	
}
//function to get xml data by sending asych request
function getXMLDataSpringsAquatic()
{
	
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			AmusementArray= xhr.responseXML.getElementsByTagName("TheSpringsAquatic");
			for(var i=0;i<AmusementArray.length;i++)
			{
				
				var AmusementName= AmusementArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var AmusementLocation = AmusementArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var AmusementAddress=AmusementArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var AmusementPhone= AmusementArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var AmusementWebsite=AmusementArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var AmuseName=document.createElement("td");
		AmuseName.innerHTML="Name";
		AmuseName.style.fontSize="30px";
		AmuseName.style.fontcolor="blue";
		
		var AmusementNameCell=document.createElement("td");
		AmusementNameCell.innerHTML=AmusementName;
		AmusementNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(AmuseName);
		tableRow.appendChild(AmusementNameCell);
		
		var tableRow1 = document.createElement("tr");
		var AmuseLocation=document.createElement("td");
		AmuseLocation.innerHTML="Address";
		AmuseLocation.style.fontSize="30px";	
			//for displaying address discription
		var AmusementLocationCell=document.createElement("td");
		AmusementLocationCell.innerHTML=AmusementLocation;
		AmusementLocationCell.style.fontSize="30px";
		
		tableRow1.appendChild(AmuseLocation);
		tableRow1.appendChild(AmusementLocationCell);
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var AmuseAddress=document.createElement("td");
		AmuseAddress.innerHTML="Address";
		AmuseAddress.style.fontSize="30px";	
			//for displaying address discription
		var AmusementAddressCell=document.createElement("td");
		AmusementAddressCell.innerHTML=AmusementAddress;
		AmusementAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(AmuseAddress);
		tableRow2.appendChild(AmusementAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var AmusePhone=document.createElement("td");
		AmusePhone.innerHTML="Contact Number:";
		AmusePhone.style.fontSize="30px";
			//for displaying contact number
		var AmusementContactCell=document.createElement("td");
		AmusementContactCell.innerHTML=AmusementPhone;
		AmusementContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(AmusePhone);
		tableRow3.appendChild(AmusementContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var AmuseWebsite=document.createElement("td");
		AmuseWebsite.innerHTML="weblink:";	
		AmuseWebsite.style.fontSize="30px";
			//for displaying contact number
		var AmusementWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",AmusementWebsite);
		anchorTag2.innerHTML=AmusementWebsite;
		anchorTag2.style.fontSize="30px";
		AmusementWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(AmuseWebsite);
		tableRow5.appendChild(AmusementWebsiteCell);
		
		document.getElementById("amusementTableId").appendChild(tableRow);
		document.getElementById("amusementTableId").appendChild(tableRow1);
		document.getElementById("amusementTableId").appendChild(tableRow2);
		document.getElementById("amusementTableId").appendChild(tableRow3);
		document.getElementById("amusementTableId").appendChild(tableRow5);
				
	}
		
	}
	},false);
	xhr.open("get","amusements.xml",true);
	xhr.send(null);
	
	
	
}

function getXMLDataBayWater()
{
	
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			AmusementArray= xhr.responseXML.getElementsByTagName("TheBayWater");
			for(var i=0;i<AmusementArray.length;i++)
			{
				
				var AmusementName= AmusementArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var AmusementLocation = AmusementArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var AmusementAddress=AmusementArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var AmusementPhone= AmusementArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var AmusementWebsite=AmusementArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var AmuseName=document.createElement("td");
		AmuseName.innerHTML="Name";
		AmuseName.style.fontSize="30px";
		AmuseName.style.fontcolor="blue";
		
		var AmusementNameCell=document.createElement("td");
		AmusementNameCell.innerHTML=AmusementName;
		AmusementNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(AmuseName);
		tableRow.appendChild(AmusementNameCell);
		
		var tableRow1 = document.createElement("tr");
		var AmuseLocation=document.createElement("td");
		AmuseLocation.innerHTML="Address";
		AmuseLocation.style.fontSize="30px";	
			//for displaying address discription
		var AmusementLocationCell=document.createElement("td");
		AmusementLocationCell.innerHTML=AmusementLocation;
		AmusementLocationCell.style.fontSize="30px";
		
		tableRow1.appendChild(AmuseLocation);
		tableRow1.appendChild(AmusementLocationCell);
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var AmuseAddress=document.createElement("td");
		AmuseAddress.innerHTML="Address";
		AmuseAddress.style.fontSize="30px";	
			//for displaying address discription
		var AmusementAddressCell=document.createElement("td");
		AmusementAddressCell.innerHTML=AmusementAddress;
		AmusementAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(AmuseAddress);
		tableRow2.appendChild(AmusementAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var AmusePhone=document.createElement("td");
		AmusePhone.innerHTML="Contact Number:";
		AmusePhone.style.fontSize="30px";
			//for displaying contact number
		var AmusementContactCell=document.createElement("td");
		AmusementContactCell.innerHTML=AmusementPhone;
		AmusementContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(AmusePhone);
		tableRow3.appendChild(AmusementContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var AmuseWebsite=document.createElement("td");
		AmuseWebsite.innerHTML="weblink:";	
		AmuseWebsite.style.fontSize="30px";
			//for displaying contact number
		var AmusementWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",AmusementWebsite);
		anchorTag2.innerHTML=AmusementWebsite;
		anchorTag2.style.fontSize="30px";
		AmusementWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(AmuseWebsite);
		tableRow5.appendChild(AmusementWebsiteCell);
		
		document.getElementById("amusementTableId").appendChild(tableRow);
		document.getElementById("amusementTableId").appendChild(tableRow1);
		document.getElementById("amusementTableId").appendChild(tableRow2);
		document.getElementById("amusementTableId").appendChild(tableRow3);
		document.getElementById("amusementTableId").appendChild(tableRow5);
				
	}
		
	}
	},false);
	xhr.open("get","amusements.xml",true);
	xhr.send(null);
	
	
	
}


function getXMLDataSchlitterbahn()
{
	
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			AmusementArray= xhr.responseXML.getElementsByTagName("Schlitterbahn");
			for(var i=0;i<AmusementArray.length;i++)
			{
				
				var AmusementName= AmusementArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var AmusementLocation = AmusementArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var AmusementAddress=AmusementArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var AmusementPhone= AmusementArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var AmusementWebsite=AmusementArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var AmuseName=document.createElement("td");
		AmuseName.innerHTML="Name";
		AmuseName.style.fontSize="30px";
		AmuseName.style.fontcolor="blue";
		
		var AmusementNameCell=document.createElement("td");
		AmusementNameCell.innerHTML=AmusementName;
		AmusementNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(AmuseName);
		tableRow.appendChild(AmusementNameCell);
		
		var tableRow1 = document.createElement("tr");
		var AmuseLocation=document.createElement("td");
		AmuseLocation.innerHTML="Address";
		AmuseLocation.style.fontSize="30px";	
			//for displaying address discription
		var AmusementLocationCell=document.createElement("td");
		AmusementLocationCell.innerHTML=AmusementLocation;
		AmusementLocationCell.style.fontSize="30px";
		
		tableRow1.appendChild(AmuseLocation);
		tableRow1.appendChild(AmusementLocationCell);
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var AmuseAddress=document.createElement("td");
		AmuseAddress.innerHTML="Address";
		AmuseAddress.style.fontSize="30px";	
			//for displaying address discription
		var AmusementAddressCell=document.createElement("td");
		AmusementAddressCell.innerHTML=AmusementAddress;
		AmusementAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(AmuseAddress);
		tableRow2.appendChild(AmusementAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var AmusePhone=document.createElement("td");
		AmusePhone.innerHTML="Contact Number:";
		AmusePhone.style.fontSize="30px";
			//for displaying contact number
		var AmusementContactCell=document.createElement("td");
		AmusementContactCell.innerHTML=AmusementPhone;
		AmusementContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(AmusePhone);
		tableRow3.appendChild(AmusementContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var AmuseWebsite=document.createElement("td");
		AmuseWebsite.innerHTML="weblink:";	
		AmuseWebsite.style.fontSize="30px";
			//for displaying contact number
		var AmusementWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",AmusementWebsite);
		anchorTag2.innerHTML=AmusementWebsite;
		anchorTag2.style.fontSize="30px";
		AmusementWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(AmuseWebsite);
		tableRow5.appendChild(AmusementWebsiteCell);
		
		document.getElementById("amusementTableId").appendChild(tableRow);
		document.getElementById("amusementTableId").appendChild(tableRow1);
		document.getElementById("amusementTableId").appendChild(tableRow2);
		document.getElementById("amusementTableId").appendChild(tableRow3);
		document.getElementById("amusementTableId").appendChild(tableRow5);
				
	}
		
	}
	},false);
	xhr.open("get","amusements.xml",true);
	xhr.send(null);
	
	
	
}