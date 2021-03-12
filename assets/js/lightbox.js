// TODO: get 'imageSizes' from _data/responsives.json
const imageSizes = [160,320,480,640,960,1280,1920,2560];
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
  //
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
  // TODO: get 'sizes' from _data/responsives.json
  lightBoxImage.sizes = "(max-width: 535px) " + imageSizes[1] + "px," +   // 320px
                        "(max-width: 767px) " + imageSizes[2] + "px," +   // 480px
                        "(max-width: 991px) " + imageSizes[3] + "px," +  // 640px
                        "(max-width: 1279px) " + imageSizes[4] + "px," +  // 960px
                        imageSizes[5] + "px";                             // 1280px
  lightBoxImage.src = eventObj.target.src;
  lightBoxImage.alt = eventObj.target.alt;
  lightBoxCaption.innerText = eventObj.target.nextElementSibling.innerText;
}

function toggleLightBox() {
  lightBox.classList.toggle("lightbox-on");
}
