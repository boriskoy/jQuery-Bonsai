var main = function() {
  
  $('#top-text').keyup(function(){
   	$('#top-text').val();
			$('.top-caption').text($('#top-text').val());
  });

  $('#bottom-text').keyup(function(){
  	$('#bottom-text').val();
      $('.bottom-caption').text($('#bottom-text').val());
  });
  
  $('#image-url').keyup(function(){
    var imageAdd = $('#image-url').val();
    $('img').attr('src', imageAdd);
  });
};
 
$(document).ready(main);
