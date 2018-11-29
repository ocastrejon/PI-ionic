<?php
Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password = "123456";
$dbname = "id6833158_prueba";

$fecha=$_GET["fecha"];
$idcliente=$_GET["idcliente"];
$idproducto=$_GET["idproducto"];
//$fotografia=$_GET["fotografia"];
$tipo_venta=$_GET["tipo_venta"];
$pagado=$_GET["pagado"];
$idusuario=$_GET["idusuario"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO ventas (fecha, idcliente, idproducto, fotografia, tipo_venta, pagado, idusuario)
VALUES ('$fecha', '$idcliente', $idproducto, '', '$tipo_venta','$pagado','$idusuario')";

if ($conn->query($sql) === TRUE) {
    echo '{"status":"ok"}';
} else {
   echo '{"status":'.$conn->error.'}';
}
$conn->close();
 ?>