
var table;
var asyncReq;
//var tableHidden=true;
var storeDetails;

//var tableId;

window.addEventListener("load",start,false);

function start()
{
	
	table=document.getElementById("displayId");
	table.style.visibility="hidden";
	//tableHidden=true;
	//imageHidden= false;
	document.getElementById("swagatButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		//document.getElementById("tableId").deleteRow(0);
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			displaySwagat();
			table.style.visibility="visible";
			
			
			//tableHidden=false;
		
			
		}
		
	},false);//end event listener for swagatButton
	
	document.getElementById("KCIndiaButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		deleteRows();
		//document.getElementById("tableId").deleteRow(0);
		if(table.style.visibility=="hidden")
		{
			displayKc();
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
	},false);//end event listener for KCIndiaButton
	
	document.getElementById("opigButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		deleteRows();
		//document.getElementById("tableId").deleteRow(0);
		if(table.style.visibility=="hidden")
		{
			
			opigDetails();
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
			},false);//end event listener for opigButton
	
	document.getElementById("niButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		deleteRows();
		//document.getElementById("tableId").deleteRow(0);
		if(table.style.visibility=="hidden")
		{
			niDetails();
			
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
			},false);//end event listener for niButton
		
		
		document.getElementById("afButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		//document.getElementById("tableId").deleteRow(0);
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			ambicaFoodDetails();
			
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
			},false);//end event listener for afButton
			
			
		document.getElementById("csButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		//document.getElementById("tableId").deleteRow(0);
		deleteRows();
		if(table.style.visibility=="hidden")
		{
			
			chaiShaiDetails();
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
			},false);//end event listener for csButton
		
		
		document.getElementById("pfigbutton").addEventListener("click",function(){
		table.style.visibility="hidden";
		deleteRows();
		//document.getElementById("tableId").deleteRow(0);
		if(table.style.visibility=="hidden")
		{
			
			patelDetails();
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
			},false);//end event listener for pfigbutton
			
		
				
		document.getElementById("ttButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		deleteRows();
		//document.getElementById("tableId").deleteRow(0);
		if(table.style.visibility=="hidden")
		{
			
			asianDetails();
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
			},false);//end event listener for ttButton
			
			
		document.getElementById("ieButton").addEventListener("click",function(){
		table.style.visibility="hidden";
		deleteRows();
		//document.getElementById("tableId").deleteRow(0);
		if(table.style.visibility=="hidden")
		{
			
			indianDetails();
			table.style.visibility="visible";
			
		
			//tableHidden=false;
			
			
		}
		
		
			},false);//end event listener for ieButton
			
			
	
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
}//end delete rows




function displaySwagat()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("swagatDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontColor="blue";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours :";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell =document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
	
}//end displaySwagat



function displayKc()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("kcDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end displayKc


function opigDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("opigDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end display opigDetails


function niDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("namasteIndiaDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end display niDetails


function ambicaFoodDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("ambicaFoodDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end display ambicaFoodDetails



function chaiShaiDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("chaiShaiDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end display chaiShaiDetails


function patelDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("patelDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end display patelDetails



function asianDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("asianDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end display asianDetails



function indianDetails()
{
	asyncReq= new XMLHttpRequest;
	asyncReq.addEventListener("readystatechange",function(){
	if(asyncReq.readyState==4 && asyncReq.status==200 && asyncReq.responseXML)
	{
		storeDetails= asyncReq.responseXML.getElementsByTagName("indianDetails");
		
			
			for(var i=0;i<storeDetails.length;i++)
			{
				
				
				var storeName= storeDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
				var storePhone = storeDetails.item(i).getElementsByTagName("phone").item(0).firstChild.nodeValue;
				var storeLocation=storeDetails.item(i).getElementsByTagName("location").item(0).firstChild.nodeValue;
				var storeAddress=storeDetails.item(i).getElementsByTagName("address").item(0).firstChild.nodeValue;
				var storeHours=storeDetails.item(i).getElementsByTagName("hours").item(0).firstChild.nodeValue;
				
				//first row for Name of the store
				var storeRow= document.createElement("tr");
				
				var storeCell= document.createElement("td");
				
				storeCell.innerHTML="Name: ";
				storeCell.style.fontSize="30px";
				storeCell.style.fontcolor="#982B14";
				
			
				var storeNameCell=document.createElement("td");
				storeNameCell.innerHTML=storeName;
				storeNameCell.style.fontSize="30px";
				
				storeRow.appendChild(storeCell);
				storeRow.appendChild(storeNameCell);
				table.appendChild(storeRow);
				
				//second row for displaying location of the store 
				
				var storeRow2=document.createElement("tr");
				var storeCell2= document.createElement("td");
				
				storeCell2.innerHTML="Location: ";
				storeCell2.style.fontSize="30px";
				storeCell2.style.fontcolor="#982B14";
				 
				var storeLocationCell = document.createElement("td");
				storeLocationCell.innerHTML=storeLocation;
				storeLocationCell.style.fontSize="30px";
				
				storeRow2.appendChild(storeCell2);
				storeRow2.appendChild(storeLocationCell);
				table.appendChild(storeRow2);
				
				//third row for displaying address of the store 
				
				
				var storeRow3=document.createElement("tr");
				var storeCell3= document.createElement("td");
				
				storeCell3.innerHTML="Address: ";
				storeCell3.style.fontSize="30px";
				storeCell3.style.fontcolor="#982B14";
				
				var storeAddressCell = document.createElement("td");
				storeAddressCell.innerHTML=storeAddress;
				storeAddressCell.style.fontSize="30px";
				storeRow3.appendChild(storeCell3);
				storeRow3.appendChild(storeAddressCell);
				
				table.appendChild(storeRow3);
				
				//fourth row for displaying contact of the store 
				
				
				var storeRow4=document.createElement("tr");
				var storeCell4= document.createElement("td");
				
				storeCell4.innerHTML="Phone:";
				storeCell4.style.fontSize="30px";
				storeCell4.style.fontcolor="982B14";
				
				var storePhoneCell=document.createElement("td");
				storePhoneCell.innerHTML=storePhone;
				storePhoneCell.style.fontSize="30px";
				
				storeRow4.appendChild(storeCell4);
				storeRow4.appendChild(storePhoneCell);
				table.appendChild(storeRow4);
				
				//fifth row for displaying hours of the store 
				
				var storeRow5=document.createElement("tr");
				var storeCell5= document.createElement("td");
				
				storeCell5.innerHTML="Open Hours:";
				storeCell5.style.fontSize="30px";
				storeCell5.style.fontcolor="982B14";
				
				var storeHoursCell=document.createElement("td");
				storeHoursCell.innerHTML=storeHours;
				storeHoursCell.style.fontSize="30px";
				
				storeRow5.appendChild(storeCell5);
				storeRow5.appendChild(storeHoursCell);
				table.appendChild(storeRow5);
				
				
				
				
			}//end for loop
			

	
	
	}//end if for 
	},false);//end anon for call back
	asyncReq.open("get","groceries.xml",true);
	asyncReq.send(null);
	
	
}//end display indianDetails