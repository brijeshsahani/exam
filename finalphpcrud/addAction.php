<?php

$host="localhost";
$username="root";
$password="root";
$database="finalphp";


$con = mysqli_connect($host,$username,$password,$database);

if(isset($_POST["btnadd"]) !=null)
{
    $names= $_POST["txtname"];
    $addresss=$_POST["txtaddress"];
    $photos="image/".$_FILES["txtphoto"]["name"];

    if(move_uploaded_file($_FILES["txtphoto"]["tmp_name"],$photos))
{
    echo "done";
}

$sql = "insert into product(name,address,photos) values('$names','$addresss','$photos')";

$result = mysqli_query($con,$sql);
}






?>