<?php
session_start();
$host="localhost";
$username="root";
$password="root";
$database="finalphp";

$con=mysqli_connect($host,$username,$password,$database);

if(isset($_POST["btns"]) != null){

    $emails= $_POST["txtemail"];
    $password= $_POST["txtpassword"];

    $sql = "select * from tbluser where email='$emails' && password='$password' ";

    $result=mysqli_query($con,$sql);

    while($row=mysqli_fetch_array($result))
    {

          $_SESSION["user"]=$row["email"];
          $_SESSION["pass"]=$row["password"];
            header("Location:add.php");
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
    <label for="email">email</label>
    <input type="text" name="txtemail" id="txtemail">
    <label for="password">password</label>
    <input type="password" name="txtpassword" id="txtpassword">

   <input type="submit" value="login" name="btns" id="btns">
    </form>
</body>
</html>