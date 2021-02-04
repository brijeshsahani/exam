<!DOCTYPE html>
<html lang="en">
<head>

    <title>Document</title>
</head>
<body>
    <form action="addAction.php" method="post" enctype="multipart/form-data">
    
    <label for="name">name</label>
    <input type="text" name="txtname" id="txtname">
    
    <label for="address">address</label>
    <input type="text" name="txtaddress" id="txtaddress">

    <label for="photo">photo</label>
    <input type="file" name="txtphoto" id="txtphoto">

    <button type="submit" name="btnadd" id="btnadd" >add</button>
    
    </form>

    <form method="get">
    
    <table border="1">
    <tr>
    <td>name</td>
    <td>address</td>
    <td>img</td>
    </tr>

        <?php

        $host="localhost";
        $username="root";
        $password="root";
        $database="finalphp";


        $con = mysqli_connect($host,$username,$password,$database);

        $sql = "select * from product";

        $result = mysqli_query($con,$sql);

        while($row =mysqli_fetch_array($result))
        {?>

        <tr>
             <td><?php echo $row['name']?></td>
             <td><?php echo $row['address']?></td>
             <td><img src="<?php echo $row['photos']?>" alt=""></td>
        </tr>

        <?php }

        ?>




    </table>
    </form>
</body>
</html>