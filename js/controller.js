$('.faq-heading').click(function () {
        
    $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
    });

$('.vMore').click(function () {
    $(this).text(function(i, text){
          return text === "View More" ? "View Less" : "View More";
      })

  $('.features-full').slideToggle();
});

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  function copy(){
  console.time('time1');
	var temp = $("<input>");
  $("body").append(temp);
 temp.val($('#copyText1').text()).select();
  document.execCommand("copy");
  temp.remove();
    console.timeEnd('time1');
}


var swiper = new Swiper('.swiper-loop', {
	loop: true,
	autoplay: {
	  delay: 1,
	},

	freeMode: true,
	speed: 5000,
	slidesPerView: 5,
	spaceBetween: 50,
	centeredSlides: true,
  breakpoints: {
		1900: {
			slidesPerView: 4,
			spaceBetween: 0,
		 },

		1400: {
			slidesPerView: 4,
			spaceBetween: 50,
		 },
		 1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		 },
		 900: {
			slidesPerView: 2,
			spaceBetween: 10,
		 },

		 320: {
			slidesPerView: 3,
			spaceBetween: 10,
		 },
	   }
     
  });

  var swiper = new Swiper('.swiper-loop2', {
	loop: true,
	autoplay: {
	  delay: 1,
	},
	freeMode: true,
	speed: 8000,
	slidesPerView: 'auto',
	spaceBetween: 0,
	centeredSlides: true,
  });

  $(window).scroll(function(){
	var sticky = $('.sticky-header'),
		scroll = $(window).scrollTop();
	if (scroll >= 100) sticky.slideDown();
	else sticky.slideUp();
  });
  
  $(function() {
    $('a.page').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });
});

$(".swiper-loop").hover(function () {
	(this).swiper.autoplay.stop();
  }, function () {
	(this).swiper.autoplay.start();
  });
