<?php
//echo var_dump($_GET);
echo json_encode([
    'GET' => $_GET,
    'POST' => $_POST,
    'REQUEST' => $_REQUEST,
]);