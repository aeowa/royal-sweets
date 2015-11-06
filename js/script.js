$(document).ready(function() {
 
  $("#owl-example").owlCarousel({items: 1, navigationText : false, 
    transitionStyle: "fade", 
    autoPlay: 7000, rewindSpeed: 5000, slideSpeed: 3000,});


  jQuery('#camera-slideshow').camera({
    pagination: false,
    thumbnails: true,
    navigation: false,
    playPause: false,
    imagePath: 'img/',
    thumbUrl: 'img/thumbs',
    overlayer: true,
    barPosition: 'right',
    hover: false,
    loader: false
  });
});



