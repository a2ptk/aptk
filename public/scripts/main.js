$(document).ready(function() {
    $('#fullpage').fullpage({
    	//Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['homePage', 'expPage', 'contactPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : true,
        //sectionsColor : ['#000', '#fff', '#ccc'],
        paddingTop: '20px',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

	$('.image').hover(function () {
	  $(this).children('.pronounce').fadeIn();
  	}, function() {
      $(this).children('.pronounce').fadeOut();
	});

	//work around
	/*
	onLeave: function(index, nextIndex, direction){
            if(index == 2 && direction =='up'){
                $('.fullpage-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
            }
        }
	*/
});