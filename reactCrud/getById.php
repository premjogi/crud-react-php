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

    $query = "SELECT * FROM students where id='{$id}' LIMIT 1";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);

    echo json_encode($row);
?>