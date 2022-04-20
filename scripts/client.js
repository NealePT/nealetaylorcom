$(document).ready(function() {
  $('.click').click(function() {
    $('.slide-out').css('right', '0');
    $('.arrowButton').css('right', '-200px');
  });
  
  $('.clickOff').click(function() {
    $('.slide-out').css('right', '-200px');
    $('.arrowButton').css('right', '0');
  });
});
