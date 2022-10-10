function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }
  
  window.addEventListener("scroll", reveal);


  function onScroll(){
    var textfocus = document.querySelectorAll(".textfocus");

    for (var i = 0; i < textfocus.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = textfocus[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
            textfocus[i].classList.add("active");
        } else {
            textfocus[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", textfocus);
  