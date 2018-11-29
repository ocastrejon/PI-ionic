<?php

Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password2 = "123456";
$dbname = "id6833158_prueba";

$correo=$_GET["correo"];
$password=$_GET["password"];

      $conn = new mysqli($servername, $username, $password2, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

    $sql = "SELECT * FROM usuarios WHERE correo = '$correo' AND constrasena = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
       $registros=array();
        $i=0;
        while($row = $result->fetch_assoc()) {
         $registros[$i]=$row;
         $i++;
        }
        echo '{"records":'. json_encode($registros).',"status":"ok"}';
        //echo '{"records":'. json_encode($registros).'}';
    } else  {
        //echo '{"records":[]}';
        echo '{"status":"error"}';
    }
    $conn->close();
?>