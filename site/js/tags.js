$(document).ready(function () {
  var tagger = new Tagger();
})

function Tagger() {
  
  var isOpen = false;
  
  this.knownTags = [
    "happy",
      "cute",
      "crying",
      "love",
      "tbh creature",
      "violent"
  ];
  
  this.tags = [];
  this.suggestions = [];
  
  var tagButton = $('#tag');
  var addButton = $('#add');
  var suggestions = $('#suggestions');
  var tags = $('#tags');
  	
  this.suggestTag = function (string) {
    this.suggestions = [];
    this.knownTags.forEach(function (tag, index) {
      if (tag.toLowerCase().match(string.toLowerCase())) {
        this.suggestions.push(tag);
      }
    }, this);
    this.suggestions = this.suggestions.slice(0,4);
    return this.suggestions
  }
  
  this.learnTag = function (string) {
    if (this.knownTags.indexOf(string) == -1) {
      this.knownTags.push(string);
    }
    return false;
  }
  
  this.updateSuggestions = function () {
    
    var tag = (tagButton.html().toLowerCase() == 'tag') ? '' : tagButton.html().toLowerCase();
    this.suggestions = this.suggestTag(tag);
    
    var childrenArray = suggestions.children().toArray();
    var childrenStringsArray = childrenArray.map(function (param) { return $(param).html() });
  
    childrenArray.forEach(function (child, index) {
      if (this.suggestions.indexOf($(child).html()) == -1) {
        $(child).addClass('deleting');
        setTimeout(function(){ $(child).remove(); }, 500);
      }
    }, this)
    
    this.suggestions.forEach(function(suggestion, index) {
      if (childrenStringsArray.indexOf(suggestion) == -1) {
        suggestions.append('<span>'+suggestion+'</span>');
      }
    }, this)
    
    return this.suggestions;
  }

  this.restoreButton = function () {
    isOpen = true;
    var input = tagButton;
    setTimeout(function () { input.html('Tag'); isOpen = false; }, 500)
  }
  
  
  
  
  this.addTag = function (tag) {
    tagButton.blur()
    
    if (typeof tag === 'undefined') {
      tag = tagButton.html().toLowerCase();
    }
    
    if (this.tags.length >= 5) {
      $('#tags span').shake();
      tagButton.shake();
      return;
    }
    
    if (this.tags.indexOf(tag) > -1) {
      $('#tags span[data-tag="'+tag+'"]').shake();
      tagButton.shake();
      return;
    }
    this.learnTag(tag);
    this.tags.push(tag);
    tags.append('<span data-tag="'+tag+'">'+tag+'<i data-tag="'+tag+'">x</i></span>')
  }
  
  this.removeTag = function (tag) {
    var index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
    
    var tagEl = $('#tags span[data-tag="'+tag+'"]');
    tagEl.addClass('deleting');
    setTimeout(function () { tagEl.remove(); }, 500)
  }
  
  
  

  this.init = function () {
    var self = this;
    
    self.updateSuggestions();
    
    tagButton.focus(function () {
      $(this).selectText();
    });
    tagButton.keyup(function () {
      self.updateSuggestions();
    });
    tagButton.blur(function () {
      self.restoreButton();
    });
    tagButton.keyup(function (event) {
      switch (event.keyCode) {
        case 27:
          tagButton.blur();
          break;
        case 13:
          event.preventDefault();
          self.addTag();
          break;
        case 188:
          event.preventDefault();
          self.addTag();
          break;
        case 9:
          event.preventDefault();
          self.addTag();
          break;
      }
    });
    tagButton.keydown(function (event) {
      switch (event.keyCode) {
        case 27:
          tagButton.blur();
          break;
        case 13:
          event.preventDefault();
          self.addTag();
          break;
        case 188:
          event.preventDefault();
          self.addTag();
          break;
        case 9:
          event.preventDefault();
          self.addTag();
          break;
      }
    });
    addButton.click(function () {
      if (!isOpen) {
        tagButton.focus();
      } else {
        tagButton.blur();
        self.addTag();
      }
    });
    
    
    suggestions.delegate("span", "click", function () {
      self.addTag($(this).html().toLowerCase())
    })
    
    tags.delegate("i", "click", function () {
      var tag = $(this).data('tag');
      self.removeTag(tag)
    })
    
  }
  this.init();
}

jQuery.fn.shake = function () {
  var el = this;
  el.addClass('shake');
  el.removeClass('notShake');
  setTimeout(function () { el.addClass('notShake'); el.removeClass('shake'); }, 500);
}

// selectText from Tom Oakley
// @ http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
jQuery.fn.selectText = function(){
   var doc = document;
   var element = this[0];
   if (doc.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(element);
       range.select();
   } else if (window.getSelection) {
       var selection = window.getSelection();
       var range = document.createRange();
       range.selectNodeContents(element);
       selection.removeAllRanges();
       selection.addRange(range);
   }
};