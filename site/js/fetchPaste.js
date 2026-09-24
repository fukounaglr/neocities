//script by https://xobyte.neocities.org/ edited by https://fukounaglr.neocities.org/
// <a href="#page"  onclick='Paste("/page.html")'>page</a></li>

Element.prototype.fetchPaste = function(url){
  var elem = this;
  var ping = new XMLHttpRequest();
  ping.open("GET", url, true);
  ping.responseType = "text";
  ping.onload = function(){
    if(ping.readyState === ping.DONE){
      if(ping.status == 200){
        var pong = ping.response;
        elem.innerHTML = pong;
        var scripts = elem.querySelectorAll("script");
        if(scripts){
          for(var i = 0; i < scripts.length; i++){
            var script = new Function(scripts[i].innerHTML);
            script();
          }
        }
      }
    }
  };
  ping.send();
};

function Paste(a) {
  document.querySelector("#middle-box").fetchPaste(a);
}
function PasteNav(a) {
  document.querySelector("#nav-box").fetchPaste(a);
}
//if (window.location.hash.substring(1) != ""){
//Paste(window.location.hash.substring(1));
//}



const hash = window.location.hash.substring(1);
const ListNav = [
  "create/shimejis/index.html",
  "create/papercraft/index.html",
  "resources/index.html"
];

if (window.location.hash.substring(1) != ""){
  if (ListNav.includes(window.location.hash.substring(1))) {
    PasteNav(window.location.hash.substring(1));
  } else {
    Paste(window.location.hash.substring(1));
  }
}
//Paste(localStorage.getItem("OpenPage"));
//Paste(url.searchParams.toString());
