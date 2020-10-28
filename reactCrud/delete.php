<?php
     header('Access-Control-Allow-Origin: *'); 
     header("Access-Control-Allow-Credentials: true");
     header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS, PATCH');
     header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
     $dbhost = 'localhost';
     $dbuser = 'root';
     $dbpass = '';
     $db = 'reactjscrud';
     $conn = mysqli_connect($dbhost, $dbuser, $dbpass,$db);

     $id = $_GET['id'];

     $query = "DELETE FROM students where id = '{$id}' LIMIT 1";

     if(mysqli_query($conn, $query)){
         http_response_code(204);
     }else{
        http_response_code(422);
     }

?>