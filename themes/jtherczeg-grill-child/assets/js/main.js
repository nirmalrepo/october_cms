$(document).ready(function() {
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
			$('#noOfGuests').change(function(){
			    var no = $(this).val()
			    var price = 100 * no
			    if(no !== 'Select'){
			        $('#summary-qty').html(no)
			        $('#summary-total, #traveller-total').html(price+'.00')
			        $('input[name=amount]').val(price)
			        console.log($('input[name=amount]').val())
			        }else{
			         $('#summary-qty').html('0')
			         $('#summary-total, #traveller-total').html('0.00')
			         $('input[name=amount]').val(0)
			        }
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
 $( "#startDate" ).datepicker();
 $('.paypal-button').html('Book Now');
 $('#noOfGuests').val('Select');


  $(document).ready(function() {
      $(".fancybox").fancybox();
    });

  });


});

