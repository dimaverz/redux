<?php
add_action( 'init', 'checkApiCall' );

header('Access-Control-Allow-Origin: http://localhost:3003');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header("Content-Type: application/json; charset=utf-8");

function checkApiCall(){

   $local_location = 'C:\wamp\www\canabi\wp-content\plugins\cw-app';

   //include( $local_location . '\\includes\\router.php');
   include( $local_location . '\\includes\\api-modules\\branch.php');

   $api = new WW_Router();

   if($api->ifApiCall()){

      $api->addRoute('branch', 'get-list', 'branchGetList');
      $result = $api->routeIt();

      echo json_encode($result);
      die();
   }

}

class WW_Router {

   private $data_in;
   public $routes;

   public function __construct(){

      $this->data_in = json_decode(file_get_contents("php://input"), true);
   }

   public function routeIt(){

     if(isset($this->data_in['module'])){
       foreach($this->routes as $rou){
            if($rou['module'] == $this->data_in['module'] && $rou['action'] == $this->data_in['action'] ){
               return call_user_func($rou['func'],  $this->data_in['filter']);
            }
       }
     }

   }

   public function ifApiCall(){

     if(isset($_SERVER['REQUEST_URI']) && end(explode('/',$_SERVER['REQUEST_URI'])) == 'wwapi'){
        return true;
     }else{
        return false;
     }
   }

   public function addRoute($module, $action, $func){
      $this->routes[] = [
         'module' => $module,
         'action' => $action,
         'func' => $func
      ];
   }
}
 ?>
