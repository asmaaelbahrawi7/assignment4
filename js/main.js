window.addEventListener("scroll" , function(){
    const navbar = document.querySelector(".navbar");
    const logoImage = document.getElementById("logo-img");
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
        logoImage.src="images/bakery-color.png";

    }else{
        navbar.classList.remove("scrolled");
        logoImage.src="images/bakery-light-1 (1).png";


    }

   
    
});


window.addEventListener("scroll",function(){
    const scrollTop = document.getElementById("top-scroll");

    if(window.scrollY < 50){
        scrollTop.classList.add("hidden");
    }else{
        scrollTop.classList.remove("hidden");
    }
});

window.addEventListener("scroll", function() {
  if (window.innerWidth < 991) {
    const navBar = document.getElementById("top");
    const logoImage = document.getElementById("logo-img");
    logoImage.src="images/bakery-color.png";


  }
  else{

  }
});