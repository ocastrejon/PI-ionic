<?php
//header("Content-type: application/json; charset=utf-8");
Header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "id6833158_gmorentin";
$password = "123456";
$dbname = "id6833158_prueba";

$idusuario=$_GET["idusuario"];

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM clientes WHERE idusuario='$idusuario'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $registros=array();
    $i=0;
    while($row = $result->fetch_assoc()) {
     $registros[$i]=$row;
     $i++;
    }
    echo '{"records":'. json_encode($registros).'}';
} else {
    echo '{"records":[]}';
}
$conn->close();
 ?>