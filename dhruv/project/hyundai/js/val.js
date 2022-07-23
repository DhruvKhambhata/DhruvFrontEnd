function reg_form(str)
	{
		if(str.contact.value=="")
		{
		document.getElementById("msg1").innerHTML="! Please fill the required field ";
		str.contact.focus();
		return false;
		}
		
		if(!str.contact.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[ 0-9]{3}[-\s\.]?[ 0-9]{4,6}$/))
		{
		document.getElementById("msg1").innerHTML="Error! Please enter valid mobile number.";
		str.contact.focus();
		return false;
		}		
		


	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	