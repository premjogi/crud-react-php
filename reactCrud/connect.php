<?php
 define('DB_HOST', 'localhost');
 define('DB_USER', 'root');
 define('DB_PASS', '');
 define('DB_NAME', 'reactjscrud');
 
 function connect(){
     $conn = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);

     if(mysqli_connect_errno($conn)){
         die("Failed to connect". mysqli_connect_error());
     }

     return $conn;
 }

 $con = connect();

?>