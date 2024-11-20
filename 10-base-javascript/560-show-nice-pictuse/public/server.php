<?php
//echo var_dump($_GET);
// echo json_encode([
//     'GET' => $_GET,
//     'POST' => $_POST,
//     'REQUEST' => $_REQUEST,
// ]);

$_POST = json_decode( file_get_contents("php://input"), true );
echo var_dump($_POST);