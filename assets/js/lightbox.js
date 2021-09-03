---
layout: null
---
var lightBox = document.getElementById("lightbox");
lightBox.addEventListener("click", toggleLightBox);

var thumbs = document.querySelectorAll(".lightbox img");

for (var i=0; i < thumbs.length; i++) {
  // keyboard navigation for accessibility
  thumbs[i].tabIndex = "0";
  document.onkeydown = function(e) { 
    // "enter" key
    if(e.keyCode === 13){ 
      document.activeElement.click(); 
    } 
  }
  thumbs[i].addEventListener("click", toggleLightBoxAndAddImage);
}

function toggleLightBoxAndAddImage(eventObj){
  lightBox.style.display = "flex"; 
  var lightBoxImage = lightBox.querySelector("img");
  var lightBoxCaption = lightBox.querySelector("p");
  
  toggleLightBox();
  lightBoxImage.srcset = "";
  lightBoxImage.src = "";
  lightBoxCaption.innerText = "";
  lightBoxImage.srcset = eventObj.target.srcset;
  lightBoxImage.sizes = `{{ site.responsive_images.lightbox_sizes }}`;
  lightBoxImage.src = eventObj.target.src;
  lightBoxImage.alt = eventObj.target.alt;
  lightBoxCaption.innerText = eventObj.target.nextElementSibling.innerText;
}

function toggleLightBox() {
  lightBox.classList.toggle("lightbox-on");
}
