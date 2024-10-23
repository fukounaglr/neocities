
// stolen from https://classicj.neocities.org/
// for later use...

          
      //floating head code
      dragElement(document.getElementById("floatinghead", true));
      dragElement(document.getElementById("house", false));

      function dragElement(elmnt, ishead) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "image")) {
          // if present, the header is where you move the DIV from:
          document.getElementById(elmnt.id + "image").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
          
          //floating head reaction to dragging
          randomDialogue(pickedUpTextArray, 'img/foxidlescared.gif', 3800);
          
          window.clearTimeout(talktimer);
          window.clearTimeout(holdtimer);
          
          //if held too long, scream
          holdtimer = window.setTimeout(function(){
            randomDialogue(scaredTextArray, 'img/foxtalkscared.gif', 3800);
            screaming = true;
          } , 5000);
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
          
          if (screaming == true)
          {
            randomDialogue(releasedTextArray, 'img/foxtalk.gif', 3800);
            screaming = false;
          }
          else
          {
            randomDialogue(idleTextArray, 'img/foxtalk.gif', 1000);
          }
          window.clearTimeout(holdtimer);
        }
      }
      
      function changeImage(a,b) {
        document.getElementById(b).src=a;
      }
      
      function changeHtml(a,b) {
        document.getElementById(b).innerHTML=a;
      }
      
      var talktimer = null;
      var holdtimer = null;
      var screaming = false;
      

      function newDialogue(a,b,c) {
        window.clearTimeout(talktimer);
        changeImage(b,'floatingheadimage'); 
        changeHtml(a,"floatingheadtext");
        
        if (b == 'img/foxtalk.gif') {
          talktimer = window.setTimeout(function(){
            changeImage('img/foxidle.gif','floatingheadimage');
          } , c);
        }
        
        //if (b == 'img/foxtalkscared.gif') {
        //  talktimer = window.setTimeout(function(){
        //    changeImage('img/foxidlescared.gif','floatingheadimage');
        //  } , 3300);
        //}
      }
      
      function randomDialogue(a, b, c) {
        var randomNumber = Math.floor(Math.random()*a.length);
        var selectedDialogue = a[randomNumber];
        
        if (document.getElementById('floatingheadimage').src == selectedDialogue)
        {
          if ((a[randomNumber] + 1) > a.length)
          {
            selectedDialogue = a[randomNumber - 1];
          }
          else
          {
            selectedDialogue = a[randomNumber + 1];
          }
        }
        
        newDialogue(selectedDialogue, b, c);
        
      }
      
      //music functions
      
      function loadMusicMenu() {
        randomDialogue(musicTextArray, 'img/foxtalk.gif', 2000);
        document.getElementById("musicmenuoptions").style.display = "inline";
        document.getElementById("musiccontrols").style.display = "none";
      }
      
      function closeMusicMenu() {
        document.getElementById("musicmenuoptions").style.display = "none";
        d
      }
      
      function playSong(a) {
        var musicplayer = document.getElementById("musicplayer");
        musicplayer.setAttribute('src', a);
        musicplayer.play();
        newDialogue("now playing: " + a, 'img/foxtalk.gif', 3800);
        document.getElementById("musicmenuoptions").style.display = "none";
        document.getElementById("musiccontrols").style.display = "inline";
      }
      
      function playRandomSong(a) {
        var randomNumber = Math.floor(Math.random()*a.length);
        playSong(a[randomNumber]);
      }
      
      function getRandomImage(a, b) {
        var randomNumber = Math.floor(Math.random()*a.length);
        changeImage(a[randomNumber], b);
      }
      
      function changeJGif() {
        getRandomImage(jGifArray, 'jgif'); 
        document.getElementById('jgif').style.display = 'inline';
        document.getElementById('jtext').style.display = 'none';
      }
      
      function undoJGif() {
        document.getElementById('jgif').style.display = 'none';
        document.getElementById('jtext').style.display = 'inline';
      }
      
      function stopSong() {
        document.getElementById("musicplayer").pause();
        document.getElementById("musicmenuoptions").style.display = "none";
        document.getElementById("musiccontrols").style.display = "none";
        randomDialogue(idleTextArray, 'img/foxtalk.gif');
      }
      
      var idleTextArray = [
        '....',
        ':)',
        ':]',
        ':o',
        ':p',
        'h',
        'you can click and drag me across the screen!',
        'you can click and drag me if you feel like it',
        ",",
        ".",
        ":)",
        ':)',
        '*nods*',
        ':v',
        'beep boop',
        '*fox noise*'
      ];
      
      var aboutTextArray = [
        "hi! i am a virtual assistant. i am made by j but i am not j. my pronouns are it/its. i can do a couple of things, listed above, but i'm mostly here because it's fun",
      ];
      
      var talkTextArray = [
        'umm... woof woof woof',
        'has anyone ever been so far as decided to do to want to look more like?',
        'make sure to eat a peanut butter and jelly sandwich if you get the chance.',
        'i am literally chilling',
        'looks like you are trying to read a website, do you need some fucking help?',
        'hey :)',
        'oh worm?',
        'you are made of meat and bones, i am made of polygons and javascript, yet here we are just chilling on the web together. i think that is neat',
        'i was modeled and animated in blender and then converted to a low bitrate gif in photoshop! how were you born?',
        "scooby doo taught us that dogs love treats and if that isn't deep, then i don't know what is",
        "...............",
        "scooby doo taught us that the real monsters are draculas, and if that isn't scary, i don't know what is",
        "i know how to say a lot of different things!",
        "hey whats",
        "a",
        "scooby doo taught us that the real monsters are draculas",
        "i don't know how to send an email!",
        "O_O",
        "i am not a virus!",
        "i will never steal your data!",
        'my position is fixed!',
        'if you click view source you might find some interesting comments...',
        'do you believe in ghosts????????????????????????????????????????????????????',
        "i love being a fox!!!!! yippeeeee!!!!!!!!",
        "i play it off legit because i know i'm legit!",
        "sorry i don't have a lot to say on account of i don't have a real brain....",
        "all my thoughts exist in an array of html strings in js/homepage.js!"
        ];
        
      var releasedTextArray = [
        'ahhh thank you, much better',
        'thanks for putting me down, i will now resume my chilling.',
        'thank you for letting go of me',
        'thanks, i was getting real freaked out',
        'just be careful if you pick me up!'
        ];
      
      var pickedUpTextArray = [
        'ohhh ok here we go haha',
        "please don't move me too fast i have a preprogrammed response if you move your cursor too fast while holding me",
        'please be careful!',
        'whoa my x and y values are changing',
        "ok i think i'm ready for a change of scenery",
        'yeah!',
        '!',
        'ok!'
      ];
        
      var scaredTextArray = [
        'AAAAAHHHHHHHH PUT ME DOWN',
        'YOURE DRAGGING ME AROUND TOO MUCH',
        'WHAT THE HELL ARE YOU DOING????',
        'LET GO OF ME!!!!!',
        'oh fuck!!!!!!!!!!!!!!!!!'
      ];
      
      var spinTextArray = [
        'weeeeeeeeeeee',
        'rotation!',
        'here i go rotating',
        'i am literally rotating',
        'is this the x, y, or z axis that i am rotating around?'
      ];
      
      //menu prompts
      var musicTextArray = [
        'what kind of music?',
        'ok what type of music?',
        'which type?',
        'what kind?',
      ];
      
      //images
      var randomGifArray = [
        '<img src="img/rainsymbol.gif">',
        '<img src="img/rainwindow.gif">',
        '<img src="img/pine.gif">',
        '<img src="img/ufo.gif">',
        '<img src="img/world.gif">',
        '<img src="img/questionmark.gif">',
        '<img src="img/gay.gif">',
        '<img src="img/note.gif">',
        '<img src="img/art.gif">',
        '<img src="img/vhs2.gif">',
        '<img src="img/hotdrink.gif">',
        '<img src="img/lizard.gif">',
        '<img src="img/Frograin.gif">',
        '<img src="img/fishschool.gif">',
        '<img src="img/dolphin1.gif">',
        '<img src="img/house2.gif">',
        '<img src="img/sun.gif">',
        '<img src="img/spiral.gif">'
      ];
      
      var jGifArray = [
        "j.gif",
        "img/letters/j1.gif",
        "img/letters/j2.gif",
        "img/letters/j3.gif",
        "img/letters/j5.gif",
        "img/letters/j6.gif",
        "img/letters/j8.gif",
        "img/letters/j9.gif",
        "img/letters/j10.gif",
        "img/letters/j11.gif"
      ];
      
      //music playlists
      var vocalMusicArray = [
        'music/sure.wav',
        'music/walking_the_cow_(daniel_johnston_cover).wav'
      ]
      var instrumentalMusicArray = [
        'music/seal_realm.wav',
        'music/whatever.wav',
        'music/stationary.wav',
        'music/folder_02.wav',
        'music/mingus_chords.wav',
        'guitarthroughwalls.mp3'
      ]