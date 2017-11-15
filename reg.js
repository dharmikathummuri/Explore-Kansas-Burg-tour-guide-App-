
		function clickMe()
		{
			
		
		var firstName= document.getElementById("input1").value;
		var LastName= document.getElementById("input2").value;
		
		if(firstName=="")
		{
	
			alert("please Enter your first Name");
			
			if(LastName=="")
			{
				
				alert("please Enter your last Name");
				
			}
		}
		if(LastName=="")
		{
			
			alert("please Enter your last Name");
		}
		
		
			else
			{
				
			 
				document.getElementById("displayId").innerHTML = "Welcome to Our Website " +firstName+ "  " + LastName + ".";
			
			}
		
		
		
		
		
		}//end click me