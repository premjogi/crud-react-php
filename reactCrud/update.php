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
    $first_name = $_REQUEST['first_name'];
    $last_name = $_REQUEST['last_name'];
    $email = $_REQUEST['email'];

    $query = "UPDATE students SET first_name = '{$first_name}',last_name = '{$last_name}',email = '{$email}'WHERE students.id = '{$id}'";

    if(mysqli_query($conn, $query)){
        echo 'Data Updated';
    }else{
        echo 'Error occured';
    }
    
?>