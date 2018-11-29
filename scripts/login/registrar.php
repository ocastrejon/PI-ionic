<?php

Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password2 = "123456";
$dbname = "id6833158_prueba";

$nombre=$_GET["nombre"];
$direccion=$_GET["direccion"];
$telefono=$_GET["telefono"];
$correo=$_GET["correo"];
$password=$_GET["password"];

      $conn = new mysqli($servername, $username, $password2, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

    $sql = "INSERT INTO usuarios (nombre, direccion, telefono,correo, constrasena)
    VALUES ('$nombre', '$direccion', $telefono, '$correo', '$password')";
    //$result = $conn->query($sql);

    if ($conn->query($sql) === TRUE) {
        echo '{"status":"ok"}';
    } else {
       echo '{"status":"error"}';
    }
    $conn->close();
?>