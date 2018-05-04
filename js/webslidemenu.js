$(function() {
	$('#wsnavtoggle').click(function () {
		$('.wsmenucontainer').toggleClass('wsoffcanvasopener');
	  $('#noover').toggleClass('noverf');
	});
	
	$('.overlapblackbg').click(function () {
	  $('.wsmenucontainer').removeClass('wsoffcanvasopener');
	});
	
	
	//MAIN Menu UL SHOW/HIDE JS
	$('.wsmenu-list> li').has('.wsmenu-submenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	$('.wsmenu-list > li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	
	$('.wsmenu-click').click(function(){
		$(this).toggleClass('ws-activearrow')
		.parent().siblings().children().removeClass('ws-activearrow');
	
		$(".wsmenu-submenu, .megamenu").not($(this).siblings('.wsmenu-submenu, .megamenu')).slideUp('slow');
		$(this).siblings('.wsmenu-submenu').slideToggle('slow');
		$(this).siblings('.megamenu').slideToggle('slow');	
	});
	
	//MAIN Menu UL SHOW/HIDE JS
	//SUB Menu UL SHOW JS
	$('.wsmenu-list > li > ul > li').has('.wsmenu-submenu-sub').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	$('.wsmenu-list > li > ul > li > ul > li').has('.wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	
	$('.wsmenu-click02').click(function(){
		$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
		$(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');
		$(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');
	
	});
		//SUB Menu UL SHOW JS
		
	// Append the aero class
	$('.wsmenu-list > li').has('.wsmenu-submenu').addClass('menu-arrow-1');
	$('.wsmenu-list > li > .wsmenu-submenu > li').has('.wsmenu-submenu-sub').addClass('menu-arrow-2');
	$('.wsmenu-list > li > .wsmenu-submenu > li > .wsmenu-submenu-sub > li').has('.wsmenu-submenu-sub-sub').addClass('menu-arrow-2');		
	
	$('.wsmenu-list > li').has('.megamenu').addClass('menu-arrow-1');
		
	window.onresize = function(event) {
		console.log('window resize');
		if($(window).width() > 781){
			$('.wsmenu-submenu').removeAttr("style");
 			$('.wsmenu-list').removeAttr("style");
 		}
    };
	
});