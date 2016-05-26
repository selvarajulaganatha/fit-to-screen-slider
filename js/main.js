function setScreen(){
	var $windowWidth = $(window).width(),
		$windowHeight = $(window).height(),
        $headerHeight = $('header').height(),
        $containerWidth = $('.container').width(),
        $contentWidth = $('.center-content').width(),
        $dividWidth = ($windowWidth - $contentWidth)/2,
        $toolTipHalf = ($('.toolTip').innerHeight())/2;

   var $outContainerWidth = ($containerWidth - $contentWidth)/2;
   var $minusHeader = ( $windowHeight - $headerHeight );
	$(".full-height").css('minHeight', $minusHeader);

}  

$(document).ready(function($) {

    // slider 
    $('.hero-slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        draggable: false,
        arrows: true,
        slide: 'div',
        cssEase: 'linear',
    });

	setScreen();

});



/*window load*/
jQuery(window).load(function(){
    setScreen();
});

 
if(!Modernizr.touch) {
    jQuery(window).resize(function(){
        setScreen();
    });     
}

jQuery(window).on('orientationchange', function(){
    setScreen();
});

