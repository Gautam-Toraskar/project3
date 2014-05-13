// $("#internship-form").submit(function(event){
// 	event.preventDefault();
// 	alert('hello');
// 	return false;
// });
// alert("Hello World");






// function setToolTip(jsId){
// 	return $(jsId).tooltip({
// 	  placement : 'right',
// 	  trigger : 'manual',
// 	  title : 'some title'
// 	});
// }
var totalRequiredFields = 14;
var fieldsValidatedFlag = false;


function setTitleForToolTip(jsId,title){
	$(jsId).attr('title', title).tooltip('fixTitle').tooltip('show');
}
function validateNumberField(){
	var field = $(this);
	var fieldValue = field.val();
	var numberLength = phoneNumberLength(fieldValue);

	if(numberLength == 0){
		setTitleForToolTip(this,'please enter your phone number');
		$(this).removeClass('correct_field');
	} else if((numberLength > 10 || numberLength < 10)){
		setTitleForToolTip(this,'invalid number');
		$(this).removeClass('correct_field');
	} else{
		$(this).tooltip('hide');
		$(this).addClass('correct_field');
	}
}
function finalValidateNumberField(id){
	var field = $(id);
	var fieldValue = field.val();
	var numberLength = phoneNumberLength(fieldValue);

	if(numberLength == 0){
		setTitleForToolTip(id,'please enter your phone number');
		$("#error-in-form").show();
		return false;
	} else if((numberLength > 10 || numberLength < 10)){
		setTitleForToolTip(id,'invalid number');
		$("#error-in-form").show();
		return false;
	} else{
		$(id).tooltip('hide');
		$("#error-in-form").hide();
		return true;
	}
}
function validateEmailFields(){
	var field = $(this);
	var fieldValue = field.val();
	var emailField = validateEmail(fieldValue);

	if(fieldValue == ""){
		setTitleForToolTip(this,'this field cannot be empty');
		$(this).removeClass('correct_field');
	} else if(!emailField){
		setTitleForToolTip(this,'please enter the correct email');
		$(this).removeClass('correct_field');
	} else {
		$(this).tooltip('hide');
		$(this).addClass('correct_field');
	}
}

function finalValidateEmailFields(id){
	var field = $(id);
	var fieldValue = field.val();
	var emailField = validateEmail(fieldValue);

	if(fieldValue == ""){
		setTitleForToolTip(id,'this field cannot be empty');
		$("#error-in-form").show();
		return false;
	} else if(!emailField){
		setTitleForToolTip(id,'please enter the correct email');
		$("#error-in-form").show();
		return false;
	} else {
		$(id).tooltip('hide');
		$("#error-in-form").hide();
		return true;
	}
}

function validateEmptyAndNumberFields(){
	var field = $(this);
	var fieldValue = field.val();
	nameErrorFlag = containsNumber(fieldValue);
	emptyErrorFlag = checkIfEmpty(fieldValue);

	if(nameErrorFlag){
		setTitleForToolTip(this,'this field can\'t contain number');
		// $(this).removeClass('correct_field');
	} else if(emptyErrorFlag){
		setTitleForToolTip(this,'this field can\'t be empty');
		// $(this).removeClass('correct_field');
	} else {
		$(this).tooltip('hide');
		// $(this).addClass('correct_field');
	}
}

function finalValidateEmptyAndNumberFields(id){
	var field = $(id);
	var fieldValue = field.val();
	nameErrorFlag = containsNumber(fieldValue);
	emptyErrorFlag = checkIfEmpty(fieldValue);

	if(nameErrorFlag){
		setTitleForToolTip(id,'this field can\'t contain number');
		$("#error-in-form").show();
		return false;
	} else if(emptyErrorFlag){
		setTitleForToolTip(id,'this field can\'t be empty');
		$("#error-in-form").show();
		return false;
	} else {
		$(id).tooltip('hide');
		$("#error-in-form").hide();
		return true;
	}
}

function validateSelectField(){
	var field = $(this);
	// var fieldValue = $( id+" option:selected" ).text();
	var fieldValue = $(this).find(":selected").text();
	// var numberLength = phoneNumberLength(fieldValue);
	// alert(fieldValue);
	if(fieldValue == "select"){
		setTitleForToolTip(this,'Please select the option');
		$(this).removeClass('correct_field');
		// return false;
	} else{
		$(this).tooltip('hide');
		$(this).addClass('correct_field');
		// return true;
	}
}
function finalValidateSelectField(id){
	var field = $(id);
	// var fieldValue = $( id+" option:selected" ).text();
	var fieldValue = $(id).find(":selected").text();
	// var numberLength = phoneNumberLength(fieldValue);
	// alert(fieldValue);
	if(fieldValue == "select"){
		setTitleForToolTip(id,'Please select the option');
		$(id).removeClass('correct_field');
		return false;
	} else{
		$(id).tooltip('hide');
		$(id).addClass('correct_field');
		return true;
	}
}

function checkLinks(){
	var field = $(this);
	var fieldValue = field.val();
	var urlField = validateURL(fieldValue);

	if(!urlField && fieldValue != ""){
		setTitleForToolTip(this,'please enter correct url');
		$(this).removeClass('correct_field');
	} else {
		$(this).tooltip('hide');
		$(this).addClass('correct_field');
	}
}




function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";  
}
$("#firstname,#lastname,#email,#phone,#homecity,#homestate,#collegename,#university,#branch,#semester,#year,#city,#state,#country,#website,#fb,#tw,#ln").tooltip({
  placement : 'right',
  trigger : 'manual',
  title : 'this field is empty'
});



$("#phone").blur(validateNumberField);

$("#email").blur(validateEmailFields);

$("#firstname,#lastname,#homecity,#homestate,#collegename,#university,#branch,#year,#city,#state,#country").blur(validateEmptyAndNumberFields);

$("#fb,#tw,#ln").blur(checkLinks);


$("#semester").on("change",validateSelectField);
// $("input").attr("value","");

// fade out the tool tip
// $("#firstname,#lastname,#phone").on('shown.bs.tooltip', function () {
//   setTimeout(function(){$(this).tooltip('hide');},2000);
// });

$("#internship-form").submit(function(event){
	event.preventDefault();
	
	var stateValidate = finalValidateEmptyAndNumberFields("#state");
	var firstNameValidate = finalValidateEmptyAndNumberFields("#firstname");
	var homecityValidate = finalValidateEmptyAndNumberFields("#homecity");
	var homestateValidate = finalValidateEmptyAndNumberFields("#homestate");
	var collegenameValidate = finalValidateEmptyAndNumberFields("#collegename");
	var universityValidate = finalValidateEmptyAndNumberFields("#university");
	var branchValidate = finalValidateEmptyAndNumberFields("#branch");
	var yearValidate = finalValidateEmptyAndNumberFields("#year");
	var cityValidate = finalValidateEmptyAndNumberFields("#city");
	var countryValidate = finalValidateEmptyAndNumberFields("#country");
	var lastnameValidate = finalValidateEmptyAndNumberFields("#lastname");
	var semesterValidate = finalValidateSelectField("#semester");
	var emailValidate = finalValidateEmailFields("#email");
	var phoneValidate = finalValidateNumberField("#phone");

	if(stateValidate && firstNameValidate && homestateValidate && homecityValidate && collegenameValidate && universityValidate && branchValidate && yearValidate && cityValidate && countryValidate && lastnameValidate && semesterValidate && emailValidate && phoneValidate){
		// alert($("input[name='gender']:checked").val());

		document.cookie  = "firstname="+$("#firstname").val();
		document.cookie  = "lastname="+$("#lastname").val();
		document.cookie  = "gender="+$("input[name='gender']:checked").val();
		document.cookie  = "email="+$("#email").val();
		document.cookie  = "phone="+$("#phone").val();
		document.cookie  = "homecity="+$("#homecity").val();
		document.cookie  = "homestate="+$("#homestate").val();
		document.cookie  = "collegename="+$("#collegename").val();
		document.cookie  = "university="+$("#university").val();
		document.cookie  = "branch="+$("#branch").val();
		document.cookie  = "semester="+$("#semester").val();
		document.cookie  = "year=" + $("#year").val();
		document.cookie  = "city=" + $("#city").val();
		document.cookie  = "state=" + $("#state").val();
		document.cookie  = "country=" + $("#country").val();
		document.cookie  = "website=" + $("#website").val();
		document.cookie  = "fb=" + $("#fb").val();
		document.cookie  = "tw=" + $("#tw").val();
		document.cookie  = "ln=" + $("#ln").val();

		// alert(getCookie("firstname")
		// 	+"\n"+getCookie("lastname")
		// 	+"\n"+getCookie("gender")
		// 	+"\n"+getCookie("email")
		// 	+"\n"+getCookie("phone")
		// 	+"\n"+getCookie("homecity")
		// 	+"\n"+getCookie("homestate")
		// 	+"\n"+getCookie("collegename")
		// 	+"\n"+getCookie("university")
		// 	+"\n"+getCookie("branch")
		// 	+"\n"+getCookie("year")
		// 	+"\n"+getCookie("city")
		// 	+"\n"+getCookie("state")
		// 	+"\n"+getCookie("country")
		// 	+"\n"+getCookie("website")
		// 	+"\n"+getCookie("fb")
		// 	+"\n"+getCookie("tw")
		// 	+"\n"+getCookie("ln")
		// 	);
		window.location.href = "./questionaire.php";
	}
	// var nameErrorFlag = false;
	// var emptyErrorFlag = false;

	// alert(
	// 	"firstname: "+firstname+"\nlastname: "+lastname+"\ngender: "+gender+"\nemail: "+email+"\nphone: "+phone+"\nhomecity: "+homecity+"\nhomestate: "+homestate+"\ncollegename: "+collegename+"\nuniversity: "+university+"\nbranch: "+branch+"\nsemester: "+semester+"\nyear: "+year+"\ncity: "+city+"\nstate: "+state+"\ncountry: "+country+"\nwebsite: "+website+"\nfb: "+fb+"\ntw: "+tw+"\nln: "+ln
	// 	);
	// if($("#error-in-form").css("display") == "none"){
	// 	alert("done");
	// }

	return false;
});

function checkAllFields(){


}


$("#phone,#semester").keypress(function (evt){
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

