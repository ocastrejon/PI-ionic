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
$idcliente=$_GET["idcliente"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE clientes SET nombre='$nombre', direccion='$direccion', telefono=$telefono, correo='$correo', fotografia='$fotografia' WHERE idcliente=$idcliente";

if ($conn->query($sql) === TRUE) {
    echo '{"status":"ok"}';
} else {
   echo '{"status":"error"}';
}
$conn->close();
 ?>