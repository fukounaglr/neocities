// Make the DIV element draggable:
// Make the DIV element draggable:
   
      (function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';

    // Obtain a node list of all elements that have class="draggable":
    var draggable = document.getElementsByClassName('draggable'),
        draggableCount = draggable.length, // cache the length
        i; // iterator placeholder

    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {

        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
                         // let's keep it in cache for later use.

        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }

        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }

    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
    for (i = 0; i < draggableCount; i += 1) {
        draggable[i].addEventListener('mousedown', startDrag);
    }
}(document));







//go home

home_url = "https://ashhmillr.neocities.org/";

pathArray = document.referrer.split( '/' );
protocol = pathArray[0];
host = pathArray[2];

url_before = protocol + '//' + host;

url_now = window.location.protocol + "//" + window.location.host;


function goBackOrGoHome(){
  if ( url_before == url_now) {
    window.history.back();    
  }else{
    window.location = home_url;
  };
}









//scrool to top

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}









//play audio

document.getElementById('play').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio').play();
});





//go to a section of page
let a = document.querySelectorAll("a[name]");
window.onhashchange = () => {
  a.forEach(function(e) {
    if ("#" + e.getAttribute("name") != location.hash) {
      e.style.display = "none";
    }
  })
}






//tabs

function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}








//lightbox

document.querySelectorAll('.gallery-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup').onclick = () =>{
        document.querySelector('.popup').style.display = 'none';
};












