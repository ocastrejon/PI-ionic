<?php
Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password = "123456";
$dbname = "id6833158_prueba";

$nombre=$_GET["nombre"];
$preciodeventa=$_GET["preciodeventa"];
$cantidad=$_GET["cantidad"];
$preciodecosto=$_GET["preciodecosto"];
$descripcion=$_GET["descripcion"];
$fotografia=$_GET["fotografia"];
$idproducto=$_GET["idproducto"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE productos SET nombre='$nombre', preciodecosto=$preciodecosto, cantidad=$cantidad, preciodeventa=$preciodeventa, descripcion='$descripcion', fotografia='$fotografia' WHERE idproducto=$idproducto";

if ($conn->query($sql) === TRUE) {
    echo '{"status":"ok"}';
} else {
   echo '{"status":"error"}';
}
$conn->close();
 ?>