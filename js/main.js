// new WOW (
//   { offset: 100 }
// ).init();

// $(function() {
//   $("#left-panel").animate({
//     opacity: 40%;
//     width: 60%;
//     height: 576px;
//     float: left;
//     }, 1000);
// });


function oneSec() {

  setTimeout(function() {
    $('#left-panel').show('slide', {direction: 'left'}, 1000);
    $('#right-panel').show('slide', {direction: 'right'}, 1000),
       setTimeout(function() {
        $('.logo').show('slide', {direction: 'left'}, 1000);
      }, 1300);     
  }, 1000);

}


$(function() {
  
oneSec();

  $('.close').on('click', function() {
      $('#left-panel').hide('slide', {direction: 'left'}, 1000);
      $('#right-panel').hide('slide', {direction: 'right'}, 1000);
      $('.logo').hide('slide', {direction: 'left'}, 1300);
    });

  

});


    




