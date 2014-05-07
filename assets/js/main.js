function fitBanner(id){
	var originalHeight = $(id).height();
	console.log("width of "+id+": "+originalHeight);
	var windowHeight = $(window).height();
	var headerHeight = $("header").height();

	windowHeight = windowHeight - headerHeight;
	$(id).css({ "min-height": windowHeight+"px" });

	if(windowHeight > originalHeight){
		alert($(".center-tringle:after").width());
	}
	// $(window).resize(function() {      
	//   hi = $(window).height();
	//   $(id).css({ height: hi+"px" });
	// });
	
	
}

fitBanner("#intro-banner");