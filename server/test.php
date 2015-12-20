<?php
header('Access-Control-Allow-Origin: http://localhost:3003');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header("Content-Type: application/json; charset=utf-8");

if($_SERVER['REQUEST_METHOD'] !== 'POST'){
  echo json_encode( array('status' => 0, 'msg' => 'bad method') );
  die();
}else{
  $json = json_decode(file_get_contents("php://input"), true);
  echo json_encode( array_merge( array('status' => 1), $json) );
}

die();
?>
