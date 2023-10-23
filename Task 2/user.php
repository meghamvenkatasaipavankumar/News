<?php
include 'dbcon.php';
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['mail'];
$cpas=$_POST['cpas'];

$sql="INSERT INTO userdet VALUES('$fname','$lname','$email','$cpas');";
if(mysqli_query($conn,$sql)>0)
{
header("Location: login.html");
}
?>