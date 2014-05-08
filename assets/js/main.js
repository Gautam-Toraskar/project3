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

$("#contact-form").submit(function(){
	event.preventDefault();
	// alert("Hello World");

	// var formdata = new FormData($(this)[0]);
	var name = $("#contact-form #name").val();
	var email = $("#email").val();
	var project = $("#project").val();
	var company = $("#company").val();
	var projectname = $("#projectname").val();
	var platform = $("#platform").val();
	var desc = $("#desc").val();

	var mailingString = "name="+name+"&email="+email+"&project="+project+"&projectname="+projectname+"&platform="+platform+"&desc="+desc+"&company="+company;

	// console.log(mailingString);
	$.ajax({   
	  type:"POST",   
	  url: "admin/contactFormSubmit.php",
	  data: mailingString,
	  success: function(data) {
	    console.log(data);
	      // $('#code-sent').html("Code has been resent.").fadeOut(3000);
	  }
	}); 

	return false;
});