
var table;
var asyncReq;

window.addEventListener("load",start,false);

function start()
{
	table=document.getElementById("displayId");
	table.style.visibility="hidden";
	document.getElementById("oakButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			OakDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for oakButton
	
	
	document.getElementById("metcalfButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			metcalfDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for metcalfButton
	
		document.getElementById("townButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			townDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for townButton
	
	
	
		document.getElementById("corbinButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			corbinDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for corbinButton
	
	
	document.getElementById("prairiefireButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			prairiefireDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for prairiefireButton
	
		document.getElementById("parkButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			parkDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for parkButton
	
	
	document.getElementById("summitbutton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			summitDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for summitbutton
	
	document.getElementById("SummitWoodsButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			summitWoodsDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for SummitWoodsButton
	
	document.getElementById("BayberryButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			bayBerryDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for BayberryButton
	
	


	document.getElementById("thoseButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			thoseDetails();
			table.style.visibility="visible";
			
			
			
		}
		
	},false);//end event listener for thoseButton
	
	
}//end start function


function deleteRows()
{
	var elmtTable = document.getElementById("displayId");
	var tableRows = elmtTable.getElementsByTagName("tr");
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>=0; x--) 
		{
		elmtTable.removeChild(tableRows[x]);
		}
		
}//end deleteRows

function OakDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("OakDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function oakDetails

function metcalfDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("MetcalfDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function metcalfButtonDetails

function townDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("townDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function townDetails

function corbinDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("CorbinDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function corbinDetails


function prairiefireDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("PrairiefireDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function prairiefireDetails


function parkDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("ParkDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function ParkDetails

function summitDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("SummitDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function summitDetails


function summitWoodsDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("SummitWoodsDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function summitWoodsDetails

function bayBerryDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("BayberryDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function bayBerryDetails

function thoseDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		mallDetails = asyncReq.responseXML.getElementsByTagName("ThoseDetails");
		
			
			for(var i=0;i<mallDetails.length;i++)
			{
				var mallName= mallDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var mallPhone = mallDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var mallLocation=mallDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var mallAddress=mallDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var mallHours=mallDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row to display name of of the Mall
				
				var mallRow= document.createElement("tr");
				
				var mallCell= document.createElement("td");
				
				mallCell.innerHTML="Name: ";
				mallCell.style.fontSize="30px";
				mallCell.style.fontColor="blue";
				
				var mallNameCell=document.createElement("td");
				mallNameCell.innerHTML=mallName;
				mallNameCell.style.fontSize="30px";
				
				mallRow.appendChild(mallCell);
				mallRow.appendChild(mallNameCell);
				table.appendChild(mallRow);
				
				
				
				//second row to display location of of the Mall
				
				
				
				var mallRow2= document.createElement("tr");
				
				var mallCell2= document.createElement("td");
				
				mallCell2.innerHTML="Location: ";
				mallCell2.style.fontSize="30px";
				mallCell2.style.fontColor="blue";
				
				var mallLocationCell=document.createElement("td");
				mallLocationCell.innerHTML=mallLocation;
				mallLocationCell.style.fontSize="30px";
				
				mallRow2.appendChild(mallCell2);
				mallRow2.appendChild(mallLocationCell);
				table.appendChild(mallRow2);
				
				
				//Third row to display Address of of the Mall
				
				var mallRow3= document.createElement("tr");
				
				var mallCell3= document.createElement("td");
				
				mallCell3.innerHTML="Address: ";
				mallCell3.style.fontSize="30px";
				mallCell3.style.fontColor="blue";
				
				var mallAddressCell=document.createElement("td");
				mallAddressCell.innerHTML=mallAddress;
				mallAddressCell.style.fontSize="30px";
				
				mallRow3.appendChild(mallCell3);
				mallRow3.appendChild(mallAddressCell);
				table.appendChild(mallRow3);
				
				//Fourth row to display Phone Number of of the Mall
	
	
				var mallRow4= document.createElement("tr");
				
				var mallCell4= document.createElement("td");
				
				mallCell4.innerHTML="Phone: ";
				mallCell4.style.fontSize="30px";
				mallCell4.style.fontColor="blue";
				
				var mallPhoneCell=document.createElement("td");
				mallPhoneCell.innerHTML=mallPhone;
				mallPhoneCell.style.fontSize="30px";
				
				mallRow4.appendChild(mallCell4);
				mallRow4.appendChild(mallPhoneCell);
				table.appendChild(mallRow4);
				
				//Fifth row to display Phone Number of of the Mall
				
				var mallRow5= document.createElement("tr");
				
				var mallCell5= document.createElement("td");
				
				mallCell5.innerHTML="Open Hours: ";
				mallCell5.style.fontSize="30px";
				mallCell5.style.fontColor="blue";
				
				var mallHoursCell=document.createElement("td");
				mallHoursCell.innerHTML=mallHours;
				mallHoursCell.style.fontSize="30px";
				
				mallRow5.appendChild(mallCell5);
				mallRow5.appendChild(mallHoursCell);
				table.appendChild(mallRow5);
				
				
				
			}//end for loop
			
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","shopping.xml",true);
	asyncReq.send(null);
	
	
	
}//end function thoseDetails

