$(document).ready(function() {
  $('.click').click(function() {
    $('.slide-out').css('right', '10px');
    $('.arrowButton').css('right', '-190px');
  });
  
  $('.clickOff').click(function() {
    $('.slide-out').css('right', '-190px');
    $('.arrowButton').css('right', '10px');
  });
});
