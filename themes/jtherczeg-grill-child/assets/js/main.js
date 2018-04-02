$(document).ready(function() {

	
$('#startDate').datepicker({
});
  $("div.blog-post").hover(
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    }
  );
    	$(".img-check").on('click', function() {
    	    console.log('fdgfdg')
			 var itemId = $(this).data('item-id');
            console.log(itemId)
      
             $('.img-check').addClass('check');

        //Look for the full post and activated
        $('#item_' + itemId).removeClass('check');
			});
  $('.flexslider').flexslider({
		prevText: '',
		nextText: ''
	});

  $('.testimonails-slider').flexslider({
    animation: 'slide',
    slideshowSpeed: 5000,
    prevText: '',
    nextText: '',
    controlNav: false
  });

  $(function(){

  // Instantiate MixItUp:

  $('#Container').mixItUp();

  

  $(document).ready(function() {
      $(".fancybox").fancybox();
    });

  });


});

