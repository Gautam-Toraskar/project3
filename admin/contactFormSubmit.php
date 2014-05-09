<?php  

	$company = $_POST["company"];
	$email = $_POST["email"];
	$project = $_POST["project"];
	$name = $_POST["name"];
	$projectname = $_POST["projectname"];
	$platform = $_POST["platform"];
	$desc = $_POST["desc"];

	// echo "
	// company = {$_POST['company']}
	// email = {$_POST['email']}
	// project = {$_POST['project']}
	// name = {$_POST['name']}
	// projectname = {$_POST['projectname']}
	// platform = {$_POST['platform']}
	// desc = {$_POST['desc']}
	// ";

	$toNotify      = "gtmtoraskar19@gmail.com";
	$subjectNotify = "New Customer has applied at codfabrik.com" ; 
	$messageNotify = " 
	Name: {$name}\n
	Email address: {$email}\n
	Company: {$company}\n
	Project name: {$projectname}\n
	Project type: {$project}\n
	Platform: {$platform}\n
	Project Description: {$desc}
	";
	// $messageNotify .= "\r\n".'Cover Letter of Resume '."\r\n".$resumeCover;
	$headersNotify = 'From: contact@codfabrik.com'."\r\n";

	if(mail($toNotify, $subjectNotify, $messageNotify, $headersNotify)){
	   echo "mail sent";
	} else {
	   echo "mail not sent";
	}
?>