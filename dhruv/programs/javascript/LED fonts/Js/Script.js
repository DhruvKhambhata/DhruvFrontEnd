function text(){
    const screenvalue = document.getElementById("textfield").value;
    document.getElementById("marqueeText").innerHTML = screenvalue;
    
    var element = document.getElementById("myDiv");
    element.style.display = "none";
    
    document.getElementById("marqueeText").style.color = document.getElementById("myColor").value;

}


