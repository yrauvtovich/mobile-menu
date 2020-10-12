$(document).ready(function(){
  $('#nav-icon').click(function(){
    if(!$(this).hasClass("open")){
      $(this).toggleClass('open');
      $('.mobile-menu').toggleClass('triggered');
      $ ('div.menu').show();
    } else {
      $(this).removeClass('open');
      $('.mobile-menu').removeClass('triggered');
      $('div.menu').hide();
    }
  });
  $('div.menu').hide();
});

