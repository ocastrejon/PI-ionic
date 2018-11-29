<?php
Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password = "123456";
$dbname = "id6833158_prueba";
$idcliente=$_GET["idcliente"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM clientes WHERE idcliente=$idcliente";

if ($conn->query($sql) === TRUE) {
    echo '{"status":"ok"}';
} else {
    echo '{"status":'.$conn->error.'}';
}
$conn->close();
 ?>