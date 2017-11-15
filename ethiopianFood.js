var table;//variable for table object
var xhr; //XMLHttpRequset object
var restaurantArray;
var tableHidden = true;

//event listener for load
window.addEventListener("load",start,false);

function start()
{
	
	document.getElementById("blueNileButtonId").addEventListener("click",function(){
		table=document.getElementById("ethipianTableId");
		table.style.visibility="hidden";
		tableHidden= true;
		console.log("In 1st");
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataBlueNile();
		}
		deleteRows();
		},false);
	
		//e1 restaurant eventlistener
	document.getElementById("awazeButtonId").addEventListener("click",function(){
		table=document.getElementById("ethipianTableId");
		table.style.visibility="hidden";
		tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAwaze();
		//displayData();
		}
		deleteRows();
		},false);
		
	document.getElementById("mesobButtonId").addEventListener("click",function(){
		table=document.getElementById("ethipianTableId");
		table.style.visibility="hidden";
		tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataMesob();
		//displayData();
		}
		deleteRows();
		},false);
	
	document.getElementById("elsaButtonId").addEventListener("click",function(){
		table=document.getElementById("ethipianTableId");
		table.style.visibility="hidden";
		tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataElsa();
		//displayData();
		}
		deleteRows();
		},false);
}

function deleteRows()
{
	var elmtTable = document.getElementById('ethipianTableId');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>=0; x--) 
		{
		elmtTable.removeChild(tableRows[x]);
		}
}
function getXMLDataBlueNile()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			restaurantArray= xhr.responseXML.getElementsByTagName("blueNileRestaurant");
			for(var i=0;i<restaurantArray.length;i++)
			{
				
				var restaurantName= restaurantArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var restAddress=restaurantArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var restPhone= restaurantArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var restWebsite=restaurantArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		//td element for naming the cell
		var restName=document.createElement("td");
		restName.innerHTML="Name:";
		restName.style.fontSize="30px";
		restName.style.fontWeight="bold";
		
		//td element for displaying name
		var restNameCell=document.createElement("td");
		restNameCell.innerHTML=restaurantName;
		//adding attributes to the td
		restNameCell.style.fontSize="30px";
		restNameCell.style.fontWeight="bold";
		
		//appending td to the table row
		tableRow.appendChild(restName);
		tableRow.appendChild(restNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var restaurantLocation=document.createElement("td");
		restaurantLocation.innerHTML="Location:";
		restaurantLocation.style.fontSize="30px";
		restaurantLocation.style.fontWeight="bold";
			//for displaying location name
		var restLocationCell=document.createElement("td");
		restLocationCell.innerHTML=restLocation;
		restLocationCell.style.fontSize="30px";
		restLocationCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow1.appendChild(restaurantLocation);
		tableRow1.appendChild(restLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var restaurantAddress=document.createElement("td");
		restaurantAddress.innerHTML="Address:";
		restaurantAddress.style.fontSize="30px";
		restaurantAddress.style.fontWeight="bold";
			//for displaying address discription
		var restAddressCell=document.createElement("td");
		restAddressCell.innerHTML=restAddress;
		restAddressCell.style.fontSize="30px";
		restAddressCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow2.appendChild(restaurantAddress);
		tableRow2.appendChild(restAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var restaurantPhone=document.createElement("td");
		restaurantPhone.innerHTML="Contact Number:";
		restaurantPhone.style.fontSize="30px";
		restaurantPhone.style.fontWeight="bold";
			//for displaying contact number
		var restContactCell=document.createElement("td");
		restContactCell.innerHTML=restPhone;
		restContactCell.style.fontSize="30px";
		restContactCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow3.appendChild(restaurantPhone);
		tableRow3.appendChild(restContactCell);
		
		//Fifth row
		var tableRow4= document.createElement("tr");
			//for Timings
		var restaurantTimings=document.createElement("td");
		restaurantTimings.innerHTML="Timings:";	
		restaurantTimings.style.fontSize="30px";
		restaurantTimings.style.fontWeight="bold";
			//for displaying contact number
		var restTimingCell=document.createElement("td");
		restTimingCell.innerHTML=restTimings;
		restTimingCell.style.fontSize="30px";
		restTimingCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow4.appendChild(restaurantTimings);
		tableRow4.appendChild(restTimingCell);
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var restaurantWebsite=document.createElement("td");
		restaurantWebsite.innerHTML="weblink:";	
		restaurantWebsite.style.fontSize="30px";
		restaurantWebsite.style.fontWeight="bold";
			//for displaying contact number
		var restWebsiteCell=document.createElement("td");
		
		//creating anchor tag
		var anchorTag=document.createElement("a");
		//setting attribute for anchor tag
		anchorTag.setAttribute("href",restWebsite);
		anchorTag.innerHTML=restWebsite;
		anchorTag.style.fontSize="30px";
		//appending anchor tag to td cell
		restWebsiteCell.appendChild(anchorTag);
			//appending two cells to the table
		tableRow5.appendChild(restaurantWebsite);
		tableRow5.appendChild(restWebsiteCell);
				
		
		document.getElementById("ethipianTableId").appendChild(tableRow);
		document.getElementById("ethipianTableId").appendChild(tableRow1);
		document.getElementById("ethipianTableId").appendChild(tableRow2);
		document.getElementById("ethipianTableId").appendChild(tableRow3);
		document.getElementById("ethipianTableId").appendChild(tableRow4);
		document.getElementById("ethipianTableId").appendChild(tableRow5);
				
		
			}
		
	}
	},false);
	xhr.open("get","ethiopianFood.xml",true);
	xhr.send(null);
	
}

function getXMLDataAwaze()
{
		xhr= new XMLHttpRequest;
		xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			restaurantArray= xhr.responseXML.getElementsByTagName("awazeRestaurant");
			for(var i=0;i<restaurantArray.length;i++)
			{
				
				var restaurantName= restaurantArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var restAddress=restaurantArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var restPhone= restaurantArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var restWebsite=restaurantArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		//td element for naming the cell
		var restName=document.createElement("td");
		restName.innerHTML="Name:";
		restName.style.fontSize="30px";
		restName.style.fontWeight="bold";
		
		//td element for displaying name
		var restNameCell=document.createElement("td");
		restNameCell.innerHTML=restaurantName;
		//adding attributes to the td
		restNameCell.style.fontSize="30px";
		restNameCell.style.fontWeight="bold";
		
		//appending td to the table row
		tableRow.appendChild(restName);
		tableRow.appendChild(restNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var restaurantLocation=document.createElement("td");
		restaurantLocation.innerHTML="Location:";
		restaurantLocation.style.fontSize="30px";
		restaurantLocation.style.fontWeight="bold";
			//for displaying location name
		var restLocationCell=document.createElement("td");
		restLocationCell.innerHTML=restLocation;
		restLocationCell.style.fontSize="30px";
		restLocationCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow1.appendChild(restaurantLocation);
		tableRow1.appendChild(restLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var restaurantAddress=document.createElement("td");
		restaurantAddress.innerHTML="Address:";
		restaurantAddress.style.fontSize="30px";
		restaurantAddress.style.fontWeight="bold";
			//for displaying address discription
		var restAddressCell=document.createElement("td");
		restAddressCell.innerHTML=restAddress;
		restAddressCell.style.fontSize="30px";
		restAddressCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow2.appendChild(restaurantAddress);
		tableRow2.appendChild(restAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var restaurantPhone=document.createElement("td");
		restaurantPhone.innerHTML="Contact Number:";
		restaurantPhone.style.fontSize="30px";
		restaurantPhone.style.fontWeight="bold";
			//for displaying contact number
		var restContactCell=document.createElement("td");
		restContactCell.innerHTML=restPhone;
		restContactCell.style.fontSize="30px";
		restContactCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow3.appendChild(restaurantPhone);
		tableRow3.appendChild(restContactCell);
		
		//Fifth row
		var tableRow4= document.createElement("tr");
			//for Timings
		var restaurantTimings=document.createElement("td");
		restaurantTimings.innerHTML="Timings:";	
		restaurantTimings.style.fontSize="30px";
		restaurantTimings.style.fontWeight="bold";
			//for displaying contact number
		var restTimingCell=document.createElement("td");
		restTimingCell.innerHTML=restTimings;
		restTimingCell.style.fontSize="30px";
		restTimingCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow4.appendChild(restaurantTimings);
		tableRow4.appendChild(restTimingCell);
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var restaurantWebsite=document.createElement("td");
		restaurantWebsite.innerHTML="weblink:";	
		restaurantWebsite.style.fontSize="30px";
		restaurantWebsite.style.fontWeight="bold";
			//for displaying contact number
		var restWebsiteCell=document.createElement("td");
		
		//creating anchor tag
		var anchorTag=document.createElement("a");
		//setting attribute for anchor tag
		anchorTag.setAttribute("href",restWebsite);
		anchorTag.innerHTML=restWebsite;
		anchorTag.style.fontSize="30px";
		//appending anchor tag to td cell
		restWebsiteCell.appendChild(anchorTag);
			//appending two cells to the table
		tableRow5.appendChild(restaurantWebsite);
		tableRow5.appendChild(restWebsiteCell);
				
		
		document.getElementById("ethipianTableId").appendChild(tableRow);
		document.getElementById("ethipianTableId").appendChild(tableRow1);
		document.getElementById("ethipianTableId").appendChild(tableRow2);
		document.getElementById("ethipianTableId").appendChild(tableRow3);
		document.getElementById("ethipianTableId").appendChild(tableRow4);
		document.getElementById("ethipianTableId").appendChild(tableRow5);
				
		
			}
		
	}
	},false);
	xhr.open("get","ethiopianFood.xml",true);
	xhr.send(null);
}

function getXMLDataMesob()
{
		xhr= new XMLHttpRequest;
		xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			restaurantArray= xhr.responseXML.getElementsByTagName("MesobRestaurant");
			for(var i=0;i<restaurantArray.length;i++)
			{
				
				var restaurantName= restaurantArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var restAddress=restaurantArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var restPhone= restaurantArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var restWebsite=restaurantArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		//td element for naming the cell
		var restName=document.createElement("td");
		restName.innerHTML="Name:";
		restName.style.fontSize="30px";
		restName.style.fontWeight="bold";
		
		//td element for displaying name
		var restNameCell=document.createElement("td");
		restNameCell.innerHTML=restaurantName;
		//adding attributes to the td
		restNameCell.style.fontSize="30px";
		restNameCell.style.fontWeight="bold";
		
		//appending td to the table row
		tableRow.appendChild(restName);
		tableRow.appendChild(restNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var restaurantLocation=document.createElement("td");
		restaurantLocation.innerHTML="Location:";
		restaurantLocation.style.fontSize="30px";
		restaurantLocation.style.fontWeight="bold";
			//for displaying location name
		var restLocationCell=document.createElement("td");
		restLocationCell.innerHTML=restLocation;
		restLocationCell.style.fontSize="30px";
		restLocationCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow1.appendChild(restaurantLocation);
		tableRow1.appendChild(restLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var restaurantAddress=document.createElement("td");
		restaurantAddress.innerHTML="Address:";
		restaurantAddress.style.fontSize="30px";
		restaurantAddress.style.fontWeight="bold";
			//for displaying address discription
		var restAddressCell=document.createElement("td");
		restAddressCell.innerHTML=restAddress;
		restAddressCell.style.fontSize="30px";
		restAddressCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow2.appendChild(restaurantAddress);
		tableRow2.appendChild(restAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var restaurantPhone=document.createElement("td");
		restaurantPhone.innerHTML="Contact Number:";
		restaurantPhone.style.fontSize="30px";
		restaurantPhone.style.fontWeight="bold";
			//for displaying contact number
		var restContactCell=document.createElement("td");
		restContactCell.innerHTML=restPhone;
		restContactCell.style.fontSize="30px";
		restContactCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow3.appendChild(restaurantPhone);
		tableRow3.appendChild(restContactCell);
		
		//Fifth row
		var tableRow4= document.createElement("tr");
			//for Timings
		var restaurantTimings=document.createElement("td");
		restaurantTimings.innerHTML="Timings:";	
		restaurantTimings.style.fontSize="30px";
		restaurantTimings.style.fontWeight="bold";
			//for displaying contact number
		var restTimingCell=document.createElement("td");
		restTimingCell.innerHTML=restTimings;
		restTimingCell.style.fontSize="30px";
		restTimingCell.style.fontWeight="bold";
			//appending two cells to the table
		tableRow4.appendChild(restaurantTimings);
		tableRow4.appendChild(restTimingCell);
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var restaurantWebsite=document.createElement("td");
		restaurantWebsite.innerHTML="weblink:";	
		restaurantWebsite.style.fontSize="30px";
		restaurantWebsite.style.fontWeight="bold";
			//for displaying contact number
		var restWebsiteCell=document.createElement("td");
		
		//creating anchor tag
		var anchorTag=document.createElement("a");
		//setting attribute for anchor tag
		anchorTag.setAttribute("href",restWebsite);
		anchorTag.innerHTML=restWebsite;
		anchorTag.style.fontSize="30px";
		//appending anchor tag to td cell
		restWebsiteCell.appendChild(anchorTag);
			//appending two cells to the table
		tableRow5.appendChild(restaurantWebsite);
		tableRow5.appendChild(restWebsiteCell);
				
		
		document.getElementById("ethipianTableId").appendChild(tableRow);
		document.getElementById("ethipianTableId").appendChild(tableRow1);
		document.getElementById("ethipianTableId").appendChild(tableRow2);
		document.getElementById("ethipianTableId").appendChild(tableRow3);
		document.getElementById("ethipianTableId").appendChild(tableRow4);
		document.getElementById("ethipianTableId").appendChild(tableRow5);
				
		
			}
		
	}
	},false);
	xhr.open("get","ethiopianFood.xml",true);
	xhr.send(null);
	
}

function getXMLDataElsa()
{
		xhr= new XMLHttpRequest;
		xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			restaurantArray= xhr.responseXML.getElementsByTagName("elsaRestaurant");
			for(var i=0;i<restaurantArray.length;i++)
			{
				
				var restaurantName= restaurantArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var restAddress=restaurantArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var restPhone= restaurantArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var restWebsite=restaurantArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var restName=document.createElement("td");
		restName.innerHTML="Name";
		restName.style.fontSize="30px";
		restName.style.fontcolor="blue";
		
		var restNameCell=document.createElement("td");
		restNameCell.innerHTML=restaurantName;
		restNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(restName);
		tableRow.appendChild(restNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var restaurantLocation=document.createElement("td");
		restaurantLocation.innerHTML="Location";
		restaurantLocation.style.fontSize="30px";
			//for displaying location name
		var restLocationCell=document.createElement("td");
		restLocationCell.innerHTML=restLocation;
		restLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(restaurantLocation);
		tableRow1.appendChild(restLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var restaurantAddress=document.createElement("td");
		restaurantAddress.innerHTML="Address";
		restaurantAddress.style.fontSize="30px";	
			//for displaying address discription
		var restAddressCell=document.createElement("td");
		restAddressCell.innerHTML=restAddress;
		restAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(restaurantAddress);
		tableRow2.appendChild(restAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var restaurantPhone=document.createElement("td");
		restaurantPhone.innerHTML="Contact Number:";
		restaurantPhone.style.fontSize="30px";
			//for displaying contact number
		var restContactCell=document.createElement("td");
		restContactCell.innerHTML=restPhone;
		restContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(restaurantPhone);
		tableRow3.appendChild(restContactCell);
		
		//Fifth row
		var tableRow4= document.createElement("tr");
			//for Timings
		var restaurantTimings=document.createElement("td");
		restaurantTimings.innerHTML="Timings:";	
		restaurantTimings.style.fontSize="30px";
			//for displaying contact number
		var restTimingCell=document.createElement("td");
		restTimingCell.innerHTML=restTimings;
		restTimingCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow4.appendChild(restaurantTimings);
		tableRow4.appendChild(restTimingCell);
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var restaurantWebsite=document.createElement("td");
		restaurantWebsite.innerHTML="weblink:";	
		restaurantWebsite.style.fontSize="30px";
			//for displaying contact number
		var restWebsiteCell=document.createElement("td");
		restWebsiteCell.innerHTML=restWebsite;
		restWebsiteCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow5.appendChild(restaurantWebsite);
		tableRow5.appendChild(restWebsiteCell);
				
		
		document.getElementById("ethipianTableId").appendChild(tableRow);
		document.getElementById("ethipianTableId").appendChild(tableRow1);
		document.getElementById("ethipianTableId").appendChild(tableRow2);
		document.getElementById("ethipianTableId").appendChild(tableRow3);
		document.getElementById("ethipianTableId").appendChild(tableRow4);
		document.getElementById("ethipianTableId").appendChild(tableRow5);
				
		
			}
		
	}
	},false);
	xhr.open("get","ethiopianFood.xml",true);
	xhr.send(null);
	
}