function fitBanner(id,offset){
	var originalHeight = $(id).height();
	// console.log("width of "+id+": "+originalHeight);
	var windowHeight = $(window).height();
	var headerHeight = $("header").height();
	// alert($(".center-triangle-div").height());
	var triangleHeight = 30; //height of the triangle

	windowHeight = windowHeight - offset;
	

	if(windowHeight > originalHeight){
		$(id).css({ "min-height": windowHeight+"px" });
	}
	// $(window).resize(function() {      
	//   hi = $(window).height();
	//   $(id).css({ height: hi+"px" });
	// });
}

fitBanner("#intro-banner",0);
fitBanner('#services',0);
fitBanner('#contact',0);

$("#contact-spinner").hide();
$("#contact-form").show();
$(".after-submit").hide();
function scrollToDiv(id){
  $('html,body').animate({scrollTop: $(id).offset().top - 50},500,"swing");
   return false;
}

$('body#home .nav ul li a, a.down-arrow').click(function(event){
	event.preventDefault();
	scrollToDiv($(this).attr('href')+"");
	return false;
});

$("#contact-form").submit(function(event){
	event.preventDefault();

	// var formdata = new FormData($(this)[0]);

	var formElement1 = checkcaptcha("div.text-box input#captcha");
	var formElement2 = checkTextBoxes("div.text-box input#name");
	var formElement3 = checkTextBoxes("div.text-box input#projectname");
	var formElement4 = checkEmail("div.text-box input#email");
	var formElement5 = checkTextarea("div.text-box textarea");
	var formElement6 = checkSelect("div.text-box select#company");
	var formElement7 = checkSelect("div.text-box select#project");
	var formElement8 = checkSelect("div.text-box select#platform");

	if(
		formElement1 &&
		formElement2 &&
		formElement3 &&
		formElement4 &&
		formElement5 &&
		formElement6 &&
		formElement7 &&
		formElement8
		){
		var name = $("#contact-form #name").val();
		var email = $("#email").val();
		var project = $("#project").val();
		var company = $("#company").val();
		var projectname = $("#projectname").val();
		var platform = $("#platform").val();
		var desc = $("#desc").val();



		var mailingString = "name="+name+"&email="+email+"&project="+project+"&projectname="+projectname+"&platform="+platform+"&desc="+desc+"&company="+company;

		// console.log(mailingString);
		$("#contact-form").hide();
		$("#contact-spinner").show();
		$.ajax({   
		  type:"POST",   
		  // url: "admin/contactFormSubmit.php",
		  data: mailingString,
		  success: function(data) {
		    console.log(data);
		    // setTimeout(function(){alert("Hello")}, 3000);

		    setTimeout(function(){
		    	$("#contact-spinner").hide();
		    	$(".after-submit").show();
		    },1000);
		  }
		}); 
	}

	return false;
});


$("div.text-box label[for='name']").click(function(){
  if($("div.text-box input#name").val() == ""){
    $(this).hide();
  }
});

$("div.text-box label[for='desc']").click(function(){
  if($("div.text-box>textarea#desc").val() == ""){
    $(this).hide();
  }
});

$("div.text-box label[for='email']").click(function(){
  if($("div.text-box input#email").val() == ""){
    $(this).hide();
  }
});
$("div.text-box label[for='projectname']").click(function(){
  if($("div.text-box input#projectname").val() == ""){
    $(this).hide();
  }
});
$("div.text-box label[for='captcha']").click(function(){
  if($("div.text-box input#captcha").val() == ""){
    $(this).hide();
  }
});


//////////////////////////////////////////////////////////////////////////////

$("div.text-box input[name='name']").blur(function(){
  if($(this).val() == ""){
  	$("div.text-box label[for='name']").show();
  }
});
$("div.text-box textarea[name='desc']").blur(function(){
  if($(this).val() == ""){
  	$("label[for='desc']").show();
  }
});
$("div.text-box input[name='email']").blur(function(){
  if($(this).val() == ""){
  	$("div.text-box label[for='email']").show();
  }
});
$("div.text-box input[name='projectname']").blur(function(){
  if($(this).val() == ""){
  	$("div.text-box label[for='projectname']").show();
  }
});
$("div.text-box input[name='captcha']").blur(function(){
  if($(this).val() == ""){
  	$("div.text-box label[for='captcha']").show();
  }
});



/////////////////////navbar//////////////////////////

$(function() {
  $('nav#menu').mmenu({
    // classes: 'mm-light',
    // searchfield : true ,
    // counters    : true 
  });
});


// for menu close
// use id as menu only
$(function() {
	var $menu = $('#menu');

	//	Toggle menu 
	$('#open-icon-menu a').click(function( e ) {
		e.stopImmediatePropagation();
		e.preventDefault();
		$menu.trigger( $menu.hasClass( 'mm-opened' ) ? 'close.mm' : 'open.mm' );					
	});

	//	Create the menu
	$menu.mmenu({
		onClick: {
			preventDefault	: true,
			setSelected		: false
		}
	});

	//	Click an anchor, scroll to section
	$menu
		.find( 'a' )
		.on( 'click',
			function()
			{
				var href = $(this).attr( 'href' );
				if ( $menu.hasClass( 'mm-opened' ) )
				{
					$menu
						.off( 'closed.mm' )
						.one( 'closed.mm',
							function()
							{
								setTimeout(
									function()
									{
										$('html, body').animate({
											scrollTop: $( href ).offset().top
										});
									}, 10
								);
							}
						);
				}
				else
				{
					$('html, body').animate({
						scrollTop: $( href ).offset().top
					});
				}
			}
		);
});

// $("#menu").mmenu().trigger( "open.mm" );
$('a[href="#menu"]').click(function(){
	$("#menu").mmenu().trigger( "close.mm" );
});

