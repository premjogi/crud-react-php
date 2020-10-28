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

    $query = "SELECT * FROM students";
    if($result = mysqli_query($conn, $query)){
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
        }
        echo json_encode($data);
    }else{
        http_response_code(404);
    }
    
?>