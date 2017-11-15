
var table;
var tableHidden = true;
var theatreArray;
var xhr;
window.addEventListener("load",start,false);
function start()
{
	
	document.getElementById("alamoButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAlamo();
		//displayData();
		}
		deleteRows();
		},false);
	
	document.getElementById("amcBarryButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAmcBarry();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("amcLegendsButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
		tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAMCLegends();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("amcTownButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAMCTown();
		//displayData();
		}
		deleteRows();
		},false);
	
	document.getElementById("rioButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataRio();
		//displayData();
		}
		deleteRows();
		},false);
		
		
	document.getElementById("standeesDetailsButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataStandees();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("amcIndepButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
		tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAMCIndependence();
		//displayData();
		}
		deleteRows();
		},false);
	
		
	document.getElementById("amcWardButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataAmcWard();
		//displayData();
		}
		deleteRows();
		},false);
		
		
	document.getElementById("BBLibertyButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataBBLiberty();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("BBTheatresButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataBBTheatre();
		//displayData();
		}
		deleteRows();
		},false);
		
		document.getElementById("BBShawneeButtonId").addEventListener("click",function(){
			table=document.getElementById("theatresTableId");
		table.style.visibility="hidden";
	tableHidden= true;
		if(table.style.visibility=="hidden")
		{
		table.style.visibility="visible";	
		tableHidden=false;
		getXMLDataBBShawnee();
		//displayData();
		}
		deleteRows();
		},false);
	
}
function deleteRows()
{
	var elmtTable = document.getElementById('theatresTableId');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>=0; x--) 
		{
		elmtTable.removeChild(tableRows[x]);
		}
}

function getXMLDataAlamo()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			
			theatreArray= xhr.responseXML.getElementsByTagName("AlamoDrafthouse");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataAmcBarry()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			
			console.log(xhr.responseXML);
			theatreArray= xhr.responseXML.getElementsByTagName("AMCBarrywoods");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataAMCLegends()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("AMCLegends");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataAMCTown()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("AMCTownCentre");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataRio()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("RioTheatre");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
		
		
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataStandees()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("StandeesTheatre");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}
function getXMLDataAmcWard()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("AMCWard");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
		
		
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}
function getXMLDataAMCIndependence()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("AMCIndependence");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);getXMLDataBBLiberty
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataBBLiberty()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("BBLiberty");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataBBTheatre()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("BBTheatres");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}

function getXMLDataBBShawnee()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi theatre details

		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
				console.log("alamo");

			theatreArray= xhr.responseXML.getElementsByTagName("BBShawnee");

			for(var i=0;i<theatreArray.length;i++)
			{
				var theatreName= theatreArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var theatLocation = theatreArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var theatAddress=theatreArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var theatPhone= theatreArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				//var theatTimings=theatreArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var theatWebsite=theatreArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var theatName=document.createElement("td");
		theatName.innerHTML="Name";
		theatName.style.fontSize="30px";
		theatName.style.fontcolor="blue";
		
		var theatNameCell=document.createElement("td");
		theatNameCell.innerHTML=theatreName;
		theatNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(theatName);
		tableRow.appendChild(theatNameCell);
		
		//second row for displaying location:
		var tableRow1= document.createElement("tr");
			//for location
		var theatreLocation=document.createElement("td");
		theatreLocation.innerHTML="Location";
		theatreLocation.style.fontSize="30px";
			//for displaying location name
		var theatLocationCell=document.createElement("td");
		theatLocationCell.innerHTML=theatLocation;
		theatLocationCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow1.appendChild(theatreLocation);
		tableRow1.appendChild(theatLocationCell);
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var theatreAddress=document.createElement("td");
		theatreAddress.innerHTML="Address";
		theatreAddress.style.fontSize="30px";	
			//for displaying address discription
		var theatAddressCell=document.createElement("td");
		theatAddressCell.innerHTML=theatAddress;
		theatAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(theatreAddress);
		tableRow2.appendChild(theatAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var theatrePhone=document.createElement("td");
		theatrePhone.innerHTML="Contact Number:";
		theatrePhone.style.fontSize="30px";
			//for displaying contact number
		var theatContactCell=document.createElement("td");
		theatContactCell.innerHTML=theatPhone;
		theatContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(theatrePhone);
		tableRow3.appendChild(theatContactCell);
		
		
		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var theatreWebsite=document.createElement("td");
		theatreWebsite.innerHTML="weblink:";	
		theatreWebsite.style.fontSize="30px";
			//for displaying contact number
		var theatWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",theatWebsite);
		anchorTag2.innerHTML=theatWebsite;
		anchorTag2.style.fontSize="30px";
		theatWebsiteCell.appendChild(anchorTag2);
			//appending two cells to the table
		tableRow5.appendChild(theatreWebsite);
		tableRow5.appendChild(theatWebsiteCell);
				
		
		document.getElementById("theatresTableId").appendChild(tableRow);
		document.getElementById("theatresTableId").appendChild(tableRow1);
		document.getElementById("theatresTableId").appendChild(tableRow2);
		document.getElementById("theatresTableId").appendChild(tableRow3);
		//document.getElementById("theattheatableId").appendChild(tableRow4);
		document.getElementById("theatresTableId").appendChild(tableRow5);
				
			}
		
	}
	},false);
	xhr.open("get","theatres.xml",true);
	xhr.send(null);
	
}