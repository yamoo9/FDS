/*! simple-photo-gallery.js © yamoo9.net, 2016 */

// TODO:
// HTML Structure
// Sass Presentation
// JavaScript Behavior

//  1. `.simple-photo-gallery` 요소에 접근
var gallery                 = document.querySelector('.simple-photo-gallery');
var gallery_control_buttons = gallery.querySelectorAll('button');
var gallery_view            = gallery.querySelector('.gallery-view');

var chageGalleryView = function(){
  var img         = this.querySelector('img');
  var view        = gallery_view.querySelector('img');
  // var src      = img.src; // HTML DOM
  var src         = img.getAttribute('src'); // XML DOM
  var alt         = img.getAttribute('alt'); // XML DOM
  var changed_src = src.replace('thumbs', 'big');
  // 설정
  view.setAttribute('src', changed_src);
  view.setAttribute('alt', alt);
};

for (var i=0, l=gallery_control_buttons.length; i<l; i++) {
  gallery_control_buttons[i].onclick = chageGalleryView;
}