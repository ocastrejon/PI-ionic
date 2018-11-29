<?php
Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password = "123456";
$dbname = "id6833158_prueba";

$idventa=$_GET['idventa'];
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

$sql = "UPDATE ventas SET fecha='$fecha', idcliente='$idcliente', idproducto=$idproducto, tipo_venta='$tipo_venta', pagado='$pagado' WHERE idventa=$idventa";

if ($conn->query($sql) === TRUE) {
    echo '{"status":"ok"}';
} else {
    echo '{"status":'.$conn->error.'}';
}
$conn->close();
 ?>