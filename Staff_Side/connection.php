<?php
$host = "localhost";
$user = "root";
$pass = "";
$db_name = "hc-assist_database1";

$conn = mysqli_connect($host,$user,$pass,$db_name);
if(!$conn){
die(mysqli_error($conn));
}
?>

