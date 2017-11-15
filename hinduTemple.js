
var table;//variable for table object
var xhr; //XMLHttpRequset object
var templeArray;
var tableHidden = true;

//event listener to load a page
window.addEventListener("load",start,false);
function start()
{
	
			//creating event listener when the first button is clicked
			document.getElementById("krishnaButtonId").addEventListener("click",function(){
			table=document.getElementById("templeTableId");
			table.style.visibility="hidden";
			tableHidden= true;
			//if the table is hidden,make it visible 
			if(table.style.visibility=="hidden")
			{
				table.style.visibility="visible";	
				tableHidden=false;
				//function to get xml data when the first button is clicked
				getXMLDataIskon();
				//displayData();
			}
			//function to delete the rows when a next button is clicked
			deleteRows();
			},false);
	
			document.getElementById("hinduButtonId").addEventListener("click",function(){
			table=document.getElementById("templeTableId");
			table.style.visibility="hidden";
			tableHidden= true;
			if(table.style.visibility=="hidden")
			{
				table.style.visibility="visible";	
				tableHidden=false;
				getXMLDataHindu();
		//displayData();
			}
				deleteRows();
		},false);
		
	
}
//function to remove the previous button data when next button is clicked
function deleteRows()
{
	var elmtTable = document.getElementById('templeTableId');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>=0; x--) 
		{
		elmtTable.removeChild(tableRows[x]);
		}
}
//function to get xml data by sending asych request
function getXMLDataIskon()
{
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			//an array to store the first node data
			templeArray= xhr.responseXML.getElementsByTagName("Iskcon");
			for(var i=0;i<templeArray.length;i++)
			{
				//fetching its child elements of the parent node
				var templeName= templeArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				
				var templeAddress=templeArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				
				var templePhone= templeArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				var templeWebsite=templeArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var tempName=document.createElement("td");
		tempName.innerHTML="Name";
		tempName.style.fontSize="30px";
		tempName.style.fontcolor="blue";
		
		var templeNameCell=document.createElement("td");
		templeNameCell.innerHTML=templeName;
		templeNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(tempName);
		tableRow.appendChild(templeNameCell);
		
		
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var tempAddress=document.createElement("td");
		tempAddress.innerHTML="Address";
		tempAddress.style.fontSize="30px";	
			//for displaying address discription
		var templeAddressCell=document.createElement("td");
		templeAddressCell.innerHTML=templeAddress;
		templeAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(tempAddress);
		tableRow2.appendChild(templeAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var tempPhone=document.createElement("td");
		tempPhone.innerHTML="Contact Number:";
		tempPhone.style.fontSize="30px";
			//for displaying contact number
		var templeContactCell=document.createElement("td");
		templeContactCell.innerHTML=templePhone;
		templeContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(tempPhone);
		tableRow3.appendChild(templeContactCell);
		

		
		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var tempWebsite=document.createElement("td");
		tempWebsite.innerHTML="weblink:";	
		tempWebsite.style.fontSize="30px";
			//for displaying contact number
		var templeWebsiteCell=document.createElement("td");
		
		var anchorTag1= document.createElement("a");
		anchorTag1.setAttribute("href",templeWebsite);
		anchorTag1.innerHTML=templeWebsite;
		anchorTag1.style.fontSize="30px";
		templeWebsiteCell.appendChild(anchorTag1);
		
			//appending two cells to the table
		tableRow5.appendChild(tempWebsite);
		tableRow5.appendChild(templeWebsiteCell);
		
		document.getElementById("templeTableId").appendChild(tableRow);
		document.getElementById("templeTableId").appendChild(tableRow2);
		document.getElementById("templeTableId").appendChild(tableRow3);
		document.getElementById("templeTableId").appendChild(tableRow5);
		
				
	}
		
	}
	},false);
	xhr.open("get","temples.xml",true);
	xhr.send(null);
	
	
}

function getXMLDataHindu()
{
	
	xhr= new XMLHttpRequest;
	xhr.addEventListener("readystatechange",function(){
				console.log(xhr.responseXML);

		//anonymous function for displaying ruchi restaurant details
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML)
		{
			templeArray= xhr.responseXML.getElementsByTagName("CulturalCenter");
			for(var i=0;i<templeArray.length;i++)
			{
				
				var templeName= templeArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				
				//var restLocation = restaurantArray.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var templeAddress=templeArray.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var templePhone= templeArray.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				
				//var restTimings=restaurantArray.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				var templeWebsite=templeArray.item(i).getElementsByTagName("website").item(0).firstChild.nodeValue;
				
				
		
		//for first row:
		//displays name in first row:
		var tableRow= document.createElement("tr");
		
		var tempName=document.createElement("td");
		tempName.innerHTML="Name";
		tempName.style.fontSize="30px";
		tempName.style.fontcolor="blue";
		
		var templeNameCell=document.createElement("td");
		templeNameCell.innerHTML=templeName;
		templeNameCell.style.fontSize="30px";
		
		
		tableRow.appendChild(tempName);
		tableRow.appendChild(templeNameCell);
		
		
		
		
		//Third row for displaying address:
		var tableRow2= document.createElement("tr");
			//for Address
		var tempAddress=document.createElement("td");
		tempAddress.innerHTML="Address";
		tempAddress.style.fontSize="30px";	
			//for displaying address discription
		var templeAddressCell=document.createElement("td");
		templeAddressCell.innerHTML=templeAddress;
		templeAddressCell.style.fontSize="30px";
		
			//appending two cells to the table
		tableRow2.appendChild(tempAddress);
		tableRow2.appendChild(templeAddressCell);
		
		//Fourth row 
		var tableRow3= document.createElement("tr");
			//for phone number
		var tempPhone=document.createElement("td");
		tempPhone.innerHTML="Contact Number:";
		tempPhone.style.fontSize="30px";
			//for displaying contact number
		var templeContactCell=document.createElement("td");
		templeContactCell.innerHTML=templePhone;
		templeContactCell.style.fontSize="30px";
			//appending two cells to the table
		tableRow3.appendChild(tempPhone);
		tableRow3.appendChild(templeContactCell);
		

		//sixth row
		var tableRow5= document.createElement("tr");
			//for website
		var tempWebsite=document.createElement("td");
		tempWebsite.innerHTML="weblink:";	
		tempWebsite.style.fontSize="30px";
			//for displaying contact number
		var templeWebsiteCell=document.createElement("td");
		
		var anchorTag2= document.createElement("a");
		anchorTag2.setAttribute("href",templeWebsite);
		anchorTag2.innerHTML=templeWebsite;
		anchorTag2.style.fontSize="30px";
		templeWebsiteCell.appendChild(anchorTag2);
		
			//appending two cells to the table
		tableRow5.appendChild(tempWebsite);
		tableRow5.appendChild(templeWebsiteCell);
		
		document.getElementById("templeTableId").appendChild(tableRow);
		//document.getElementById("templeTableId").appendChild(tableRow1);
		document.getElementById("templeTableId").appendChild(tableRow2);
		document.getElementById("templeTableId").appendChild(tableRow3);
		document.getElementById("templeTableId").appendChild(tableRow5);
				
	}
		
	}
	},false);
	xhr.open("get","temples.xml",true);
	xhr.send(null);
	
	
	
}


