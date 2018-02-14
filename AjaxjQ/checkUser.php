<?php
	$user = $_GET['user'];
	$con = mysqli_connect("localhost", "user", "password", "bdusuario");
	$result = mysqli_query($con, "select * from usuario where nombre = '".$user."'");
	if (mysqli_num_rows($result) > 0)
		echo "1";
	else echo "0";
?>