<?php 
	$email = trim($_POST['email']);
	$phone = trim($_POST['phone']);
	$name = trim($_POST['name']);

	if ($email == '' || $phone == '' || $name == ""){
		echo "Заполните все поля";
	}
	elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "Введите корректный адрес эл. почты";
	}
	else {
		file_put_contents('apps.text', "$email $phone $name \n", FILE_APPEND);
		echo "1";
	}
?>