<?php

$nombre = $_POST['nombre'];
$email = $_POST['email_from'];
$mensaje = $_POST['mensaje'];
$email_to = "mariortega1995@gmail.com";
email($email_to,$email,$mensaje);
header('Location: ../contact.html');
?>