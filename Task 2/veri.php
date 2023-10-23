<?php
include 'dbcon.php';
$email=$_POST['mail'];
$cpas=$_POST['pas'];

$sql="SELECT Email,Password from userdet WHERE Email='$email' and Password='$cpas';";
$res=mysqli_query($conn,$sql);
if(mysqli_num_rows($res)==1)
{
	header("Location: News.html");
}
else{
	header("Location: login.html");
}

?>