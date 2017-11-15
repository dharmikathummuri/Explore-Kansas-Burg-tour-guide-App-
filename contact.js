 var asyncRequest; // variable to hold XMLHttpRequest object


//event listener for loading page
window.addEventListener("load",start,false);
var table;

function start()
{
	//event listener for button
	table=document.getElementById("contactTable");
	table.style.cellspacing="10px";
	document.getElementById("contactId").addEventListener("click", function()
	{ 
		//getting images from xml file
		getImages( "contact.xml" ); 
		//for deleting rows
		deleteRows();
	}, false );
	
}
//this function deletes rows in table and prevents from appending data
function deleteRows()
{
	var elmtTable = document.getElementById('contactTable');
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;
	//deleting from first row
	for (var x=rowCount-1; x>=0; x--) 
		{
		elmtTable.removeChild(tableRows[x]);
		}
}

   // set up and send the asynchronous request to get the XML file
   function getImages( url )
   {
      // attempt to create XMLHttpRequest object and make the request
      try
      {
         asyncRequest = new XMLHttpRequest(); // create request object

         // register event handler
         asyncRequest.addEventListener("readystatechange", processResponse, false); 
         asyncRequest.open( "GET", url, true ); // asyncRequest
         asyncRequest.send( null ); // send data
      } // end try
      catch ( exception )
      {
         alert( "Request Failed" );
      } // end catch
   } // end function getImages
   
   
    function processResponse()
   {
      // if request completed successfully and responseXML is non-null
      if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 && 
         asyncRequest.responseXML )
      {
         // get the covers from the responseXML
         var contacts = asyncRequest.responseXML.getElementsByTagName("contact" );

         // get base URL for the images
         var baseUrl = asyncRequest.responseXML.getElementsByTagName("baseurl" ).item( 0 ).firstChild.nodeValue;
         
         // get the placeholder div element named covers
         var output = document.getElementById( "contacts" );
		 var details=document.getElementById("title");
		 
		 
         
         // create an table row
        var imagesTR = document.createElement( "tr" );
         
         // place images in unordered list
         for ( var i = 0; i < contacts.length; ++i )
         {
            var contact = contacts.item( i ); // get a cover from covers array
         
            // get the image filename
            var image = contact.getElementsByTagName( "image" ).item( 0 ).firstChild.nodeValue;
            var name = contact.getElementsByTagName( "name" ).item( 0 ).firstChild.nodeValue;  
			var id = contact.getElementsByTagName( "id" ).item( 0 ).firstChild.nodeValue; 
			var email=contact.getElementsByTagName( "email" ).item( 0 ).firstChild.nodeValue; 
         
            // create td element and img element to display the image
			 var imagesTD = document.createElement( "td" );
            var imageTag = document.createElement( "img" );
			
			//creating paragraph elemnts to display names and ids
			var para=document.createElement("p");
			var para1=document.createElement("p");
			var para2=document.createElement("p");
			
			// set img element's src attribute
            imageTag.id = title;
            imageTag.setAttribute( "src", baseUrl + escape( image ) ); 
			imageTag.setAttribute("height",250);
			imageTag.setAttribute("width",250);
			
			imagesTD.appendChild( imageTag ); // place img in TD element
			
			//putting data in para elements
			para.innerHTML=name;
			para.style.fontWeight="bold";
			para1.innerHTML= id ;
			para1.style.fontWeight="bold";
			para2.innerHTML= email;
			para2.style.fontWeight="bold";
			
			//appending paras to td element
			imagesTD.appendChild(para);
			imagesTD.appendChild(para1);
			imagesTD.appendChild(para2);
			
			//appending td elements to table row
           imagesTR.appendChild( imagesTD );
           table.appendChild( imagesTR ); // appending table row to table
		
            
		 
		 
			
			
         } // end for statement

         
      } // end if 
   } // end function processResponse
   
