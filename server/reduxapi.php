<?php
add_action( 'init', 'checkApiCall' );

function checkApiCall(){

   header('Access-Control-Allow-Origin: http://localhost:3003');
   header('Access-Control-Allow-Methods: GET, POST');
   header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
   header("Content-Type: application/json; charset=utf-8");

   //echo '-checkApiCall-';

   $json = json_decode(file_get_contents("php://input"), true);
   //print_r($json);

   $local_location = 'C:\wamp\www\canabi\wp-content\plugins\cw-app';

   $result = array();

   if(isset($json['tag']) && $json['tag'] == 'ww'){

      $result = array('status'=>0);

      if(isset($json['module'])){
         switch($json['module']){
            case 'branch':
               include( $local_location . '\\includes\\api-modules\\branch.php');
               $result = spBranch_GetResult($json);
            break;
         }
      }

      echo json_encode($result);
      die();
   }
}


 ?>
