
$(function(){

// Button scroll top

	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});


// preloader

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

// scroll
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});

// hamburger
	 $('.burger').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
	})
//Slider

	 $('.slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });


 
	});	
