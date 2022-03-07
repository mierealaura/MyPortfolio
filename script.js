let isScrolling = false;
var input = document.getElementById("myInput");
var fullScreen = false;
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

window.addEventListener('keydown', (event) =>{
    if(event.key === "f"){
        pushFullscreenButton()
    }
});

function pushFullscreenButton(){
    if(!fullScreen){
        openFullscreen()
    }else{
        closeFullscreen()
    }
}

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  fullScreen = true;
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  fullScreen = false;
}
   

let index = 0; 

var slidePages = document.querySelectorAll("body > div > section");

const viewWindow = document.documentElement.clientWidth;
let viewHeight = viewWindow * 0.5625;

    //FOARTE FRUMOS, MERGEA DE 1000 DE ORI MAI SIMPLU LOL
checkWidth();
window.addEventListener('resize', checkWidth);

function checkWidth(){
    for(let i = 0; i < slidePages.length; i++){
        var widthFloat;
        let widthStr = window.getComputedStyle(slidePages[i], null).getPropertyValue('width');
        let newStr = "";
        for(let j = 0; j < widthStr.length; j++){
            if("0123456789.".includes(widthStr[j])){
                newStr = newStr.concat(widthStr[j].toString());
                
            }
            if(j == widthStr.length - 1){
                widthStr = newStr;
            }
        }
        widthFloat = parseFloat(newStr)*9/16;
        slidePages[i].style.height = widthFloat + "px";
    }
}

document.addEventListener("keydown", function(event) {

    if ((!isScrolling) && (event.code == "ArrowLeft" ||  event.code == "ArrowUp" )) /*left arrow*/ {
        if(index > 0){
            index--;
            scrollToPage(index);
        }else if(index == 0){
            index = slidePages.length-1;
            scrollToPage(index);
        }
    }
    if ((!isScrolling) && (event.code == "ArrowRight" || event.code == "ArrowDown" || event.code == "Space")) /*right arrow*/ {
        if(index < slidePages.length - 1){
          index++;
          scrollToPage(index);
        }else if(index >= slidePages.length - 1){
          index = 0;
          scrollToPage(index);
        }
    }

    //animateLowGradient();
    // animateUpperGradient();
});

var slidePages = document.querySelectorAll("body > div > section");
// for(let i = 0; i < slidePages.length; i++){
//     console.log(slidePages[i].firstElementChild.textContent);
// }


function scrollToPage(ind){
    var navBar = document.getElementsByTagName("nav");
    var listElement = document.getElementById(ind + 1);
    var allLinks = document.getElementsByTagName("a");
    if(ind === 2){
      navBar[0].style.removeProperty("right");
      navBar[0].style.left = "1%";

      // navBar[0].style.backgroundColor = "red";
    }else{
      navBar[0].style.removeProperty("left");
      navBar[0].style.right = "1%";
    }
    for(let i = 0; i < allLinks.length; i++){
      allLinks[i].style.color = "rgb(197, 197, 197)";
      allLinks[i].style.fontSize = "1.2vw";
      allLinks[i].style.fontWeight = "300";
    }
    listElement.style.color = "white";
    listElement.style.fontSize = "1.4vw";
    listElement.style.fontWeight = "800";
    slidePages[ind].scrollIntoView({behavior: "smooth", block: 'start'});
}

// let topLink = document.querySelector("#topLink");
// topLink.addEventListener("click", scrollToTop, false);
function scrollToTop(e){
    document.body.scrollIntoView({behavior: "smooth"});
}


//Scrolling Block
// var scrollTimeout;
// addEventListener('scroll', function(e) {
//     clearTimeout(scrollTimeout);

//     isScrolling = true;
//     scrollTimeout = setTimeout(function() {
//         isScrolling = false;
//     }, 100);
// });

function onLinkClick() {
  document.getElementsByTagName("TheRedCastle")[0].scrollIntoView();
  // will scroll to 4th h3 element
}

window.onload = function() {

  //index = 0;
  //scrollToPage(index);
  checkWidth();
 //Get a reference to the link on the page
          // with an id of "mylink"
          var a = document.getElementById("1");
          var b = document.getElementById("2");
          var c = document.getElementById("3");
          var d = document.getElementById("4");
          var e = document.getElementById("5");
          var f = document.getElementById("6");
          var g = document.getElementById("7");
          var h = document.getElementById("8");
          var i = document.getElementById("9");
          var j = document.getElementById("10");
          var k = document.getElementById("11");
          var l = document.getElementById("12");
          var m = document.getElementById("13");

          a.onclick = function() {
            index = 0;
            scrollToPage(index);
            return false;
          }
          b.onclick = function() {
            index = 1;
            scrollToPage(index);
            return false;
          }
          c.onclick = function() {
            index = 2;
            scrollToPage(index);
            return false;
          }
          d.onclick = function() {
            index = 3;
            scrollToPage(index);
            return false;
          }
          e.onclick = function() {
            index = 4;
            scrollToPage(index);
            return false;
          }
          f.onclick = function() {
            index = 5;
            scrollToPage(index);
            return false;
          }
          g.onclick = function() {
            index = 6;
            scrollToPage(index);
            return false;
          }
          h.onclick = function() {
            index = 7;
            scrollToPage(index);
            return false;
          }
          i.onclick = function() {
            index = 8;
            scrollToPage(index);
            return false;
          }
          j.onclick = function() {
            index = 9;
            scrollToPage(index);
            return false;
          }
          k.onclick = function() {
            index = 10;
            scrollToPage(index);
            return false;
          }
          l.onclick = function() {
            index = 11;
            scrollToPage(index);
            return false;
          }
          m.onclick = function() {
            index = 12;
            scrollToPage(index);
            return false;
          }


}

//document.body.addEventListener('mouseup', nextPage, true); 

// function nextPage(){
//   if(index < slidePages.length - 1){
//     index++;
//     scrollToPage(index);
//   }else if(index >= slidePages.length - 1){
//     index = 0;
//     scrollToPage(index);
//   }
// }






// listen for scroll event and call animate function
// document.addEventListener('scroll', animateLowGradient);

// // check if element is in view
// function inView() {
//   // get window height
//   var windowHeight = window.innerHeight;
//   // get number of pixels that the document is scrolled
//   var scrollY = window.scrollY || window.pageYOffset;
  
//   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//   var scrollPosition = scrollY + windowHeight;
//   // get element position (distance from the top of the page to the bottom of the element)
//   var elementPosition = lowerGradient.getBoundingClientRect().top + scrollY + elementHeight;
  
//   // is scroll position greater than element position? (is element in view?)
//   if (scrollPosition != elementPosition) {
//     return true;
//   }
  
//   return false;
// }

// var lowerGradient = document.getElementById("lowerGradient");
// var elementHeight = lowerGradient.clientHeight/2;

// animate element when it is in view
// function animateLowGradient() {
//   // is element in view?
//   if (index == 1) {
//       // element is in view, add class to element
//     lowerGradient.classList.add('lowerGradientAnim');
//     // lowerGradient.style.setProperty("downOffset", "0%");
    
//   }else{
//     lowerGradient.classList.remove('lowerGradientAnim');
//   }
// }




// var upperGradient = document.getElementById("lowerGradient");
// var elementHeight = upperGradient.clientHeight/2;

// function animateUpperGradient() {
//   // is element in view?
//   if (index == 1) {
//       // element is in view, add class to element
//     upperGradient.classList.add('upperGradientAnim');
//     upperGradient.style.setProperty("upOffset", 300);
    
//   }else{
//     upperGradient.classList.remove('upperGradientAnim');
//   }
// }
