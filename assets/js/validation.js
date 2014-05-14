var formElements = {
	name: false,
	email : false,
	company : false,
	project : false,
	projectname : false,
	platform : false,
	desc : false,
	captcha : false
};

var timer = 1000;

for (var x in formElements) {
  // text += person[x];
  console.log( x + " = " + formElements[x]);
}


var a = Math.ceil(Math.random() * 10);
var b = Math.ceil(Math.random() * 10);       
var c = a + b;

function DrawBotBoot()
{
    $("label[for='captcha']").text('ne '+ a + " + "+ b + " ?");
}    
function ValidBotBoot(d){
		if (d == c) 
  		return true;  
  	else      
  		return false;
}

function checkcaptcha(id){
	if($(id).val() == ""){
		newErrorFunction(id,"gereken");
	} else if(!ValidBotBoot($(id).val())){
  	newErrorFunction(id,"yanlış Captcha");
  } else {
  	$(id).parent().find("label.required-field").remove();
  	return true;
  }
  return false;
}

function checkTextBoxes(id){
	if(id.id != 'captcha'){
		if(($(id).val() == "")){
			newErrorFunction(id,"gereken");
		} else if(containsNumber($(id).val())){
			newErrorFunction(id,"sayı içeremez");
		} else {
			$(id).parent().find("label.required-field").remove();
			return true;
		}
		return false;
	}
}

function checkEmail(id){
	if(($(id).val() == "")){
		newErrorFunction(id,"gereken");
	} else if(!validateEmail($(id).val())){
  	newErrorFunction(id,"geçersiz e-posta");
	} else {
		$(id).parent().find("label.required-field").remove();
		return true;
	}
	return false;
}

function checkTextarea(id){
	if(($(id).val() == "")){
		newErrorFunction(id,"gereken");
	} else {
		$(id).parent().find("label.required-field").remove();
		return true;
	}
	return false;
}

function checkSelect(id){
	var firstField = $(id).find('option').first().html();
	console.log($(id).val());
	if($(id).val() == firstField){
		$(id).find('option').first().text("gereken");
		$(id).addClass('error_label');
		setTimeout(function(){
			$(id).find('option').first().text(firstField);
			$(id).removeClass('error_label');
		},timer);
	} else {
		$(id).parent().find("label.required-field.to-select-box").remove();
		return true;
	}
	return false;
}

$("div.text-box input[name='captcha']").blur(function(){
	checkcaptcha(this);
});

$("div.text-box input[name='name']").blur(function(){
	checkTextBoxes(this);
});
$("div.text-box input[name='projectname']").blur(function(){
	checkTextBoxes(this);
});

$("div.text-box input[name='email']").blur(function(){
	checkEmail(this);
});

$("div.text-box textarea").blur(function(){
	checkTextarea(this);
});

$("div.text-box select").on('change',function(){
	checkSelect(this);
});

/////////////////////lib/////////////////////////////

function displayError(id,labelName,className,displayText){
	$(id).parent().find(labelName).remove();
	$(id).parent().append('<label class="'+className+'">'+ displayText +'</label>');
}

function newErrorFunction(id,errorText){
	if($(id).val() == ""){
		var labelText = $(id).parent().find("label").text();
		$(id).parent().find("label").text(errorText);
		$(id).parent().find("label").next().addClass("error_label");

		setTimeout(function(){
			$(id).parent().find("label").text(labelText);
			$(id).parent().find("label").next().removeClass("error_label");
		},timer);
	} else {
		var inputText = $(id).val();
		$(id).val(errorText);
		$(id).addClass("error_label");
		setTimeout(function(){
			$(id).val(inputText);
			$(id).removeClass("error_label");
		},timer);
	}
	
}

$("input#captcha").keypress(function (evt){
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
});

function checkIfEmpty(field){
	if(field == ""){
		return true;
	}
	return false;
}

function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(emailField);
}

function validateURL(texturl) {
  var urlregex = new RegExp(
        "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
  return urlregex.test(texturl);
}

function phoneNumberLength(phone){
	return phone.length;
}

function containsNumber(val){
	var matches = val.match(/\d+/g);
	if (matches != null) {
	    // alert('number');
	    return true;
	}
	return false;
}
