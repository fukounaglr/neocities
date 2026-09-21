//script by https://xobyte.neocities.org/

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