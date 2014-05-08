function fitBanner(id,offset){
	var originalHeight = $(id).height();
	// console.log("width of "+id+": "+originalHeight);
	var windowHeight = $(window).height();
	var headerHeight = $("header").height();
	// alert($(".center-triangle-div").height());
	var triangleHeight = 30; //height of the triangle

	windowHeight = windowHeight - triangleHeight - offset;
	$(id).css({ "min-height": windowHeight+"px" });

	if(windowHeight > originalHeight){
		// alert($(".center-tringle:after").width());
	}
	// $(window).resize(function() {      
	//   hi = $(window).height();
	//   $(id).css({ height: hi+"px" });
	// });
}

fitBanner("#intro-banner",0);
fitBanner('#services',$('header').height());

function scrollToDiv(id){
  $('html,body').animate({scrollTop: $(id).offset().top - 50},500,"swing");
   return false;
}

$('.nav ul li a').click(function(){
	event.preventDefault();
	scrollToDiv($(this).attr('href')+"");
	return false;
});


