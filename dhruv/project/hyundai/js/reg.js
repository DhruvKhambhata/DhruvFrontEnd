function reg_form(str){
  
      
    if(str.email.value=="")
    {
    document.getElementById("msg1").innerHTML="! Please enter Some Value in Email";
    str.email.focus();
    return false;
    }

    if(!str.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/))
    {
    document.getElementById("msg1").innerHTML="! Please enter Correct Email Address";
    str.email.focus();
    return false;
    }

    if(str.pass.value=="")
    {
    document.getElementById("msg2").innerHTML="! Please enter valid Password";
    str.pass.focus();
    return false;
    }


    if(str.pass.value.length<8)
    {
    document.getElementById("msg2").innerHTML="! Please enter minimum 8 digit length";
    str.pass.focus();
    return false;
    }
		var chk = document.getElementsByName("chk[]");
    if (chk[0].checked == true) 
		{
                   
    }	
		else if (chk[1].checked == true) 
		{
                  
    } 
		else if (chk[2].checked == true) 
		{
               
                      
    }
		else 
		{
      document.getElementById("msg3").innerHTML="! Please accept T & C  ";
       return false;
    }
}