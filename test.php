<html>
<head>
	<title>test mail</title>
</head>
<body>
	hello world
	<form id="test">
		<input name="test" type="text"/>
		<input name="submit" type="submit" value="check" />
	</form>
	<script src="http://code.jquery.com/jquery.js"></script>
	<script>
		$(document).ready(function(){
			$("#test").submit(function(){
				event.preventDefault();
				alert('hello');
				return false;
			});
		});
	</script>
</body>
</html>