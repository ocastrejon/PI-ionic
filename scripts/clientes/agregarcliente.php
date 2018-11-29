<?php
Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password = "123456";
$dbname = "id6833158_prueba";

$nombre=$_GET["nombre"];
$direccion=$_GET["direccion"];
$telefono=$_GET["telefono"];
$correo=$_GET["correo"];
$fotografia=$_GET["fotografia"];
$idusuario=$_GET["idusuario"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO clientes (nombre, direccion, telefono,correo,fotografia, idusuario)
VALUES ('$nombre', '$direccion', $telefono, '$correo', '$fotografia', '$idusuario')";

if ($conn->query($sql) === TRUE) {
    echo '{"status":"ok"}';
} else {
   echo '{"status":"error"}';
}
$conn->close();
 ?>