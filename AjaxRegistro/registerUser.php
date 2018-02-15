<?php

	//Variables
	$name = $_POST['name'];
	$password = $_POST['password'];

	$errors = array();
	$data = array();

	//Validate params
	if( empty($_POST['name']) )
		$errors['name'] = "user name required";
	else $name = $_POST['name'];

	if( empty($_POST['password']) )
		$errors['password'] = "user password required";
	else $password = $_POST['password'];	

	//Database operations
	if( empty($errors) ){
		$con = mysqli_connect("localhost", "jnda", "contraseña", "bdusuario");
		mysqli_query($con, "insert into register values (null, '".$name."', '".$password."')");

		$data['success'] = true;
		$data['message'] = "Success registration"; 
	} else {
		$data['success'] = false;
		$data['errors'] = $errors; 
	}

	//Server response
	echo json_encode( $data );
?>