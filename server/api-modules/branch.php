<?php
//echo 'branch-module';

function spBranch_GetResult($json){

   if(isset($json['action'])){
      switch($json['action']){
         case 'get-list':
            $bid = (isset($json['filter']['bid']))?intval($json['filter']['bid']):0;
            return getList($bid);
            
         break;
      }
   }
}

function getList($bid){

   $r = getNested($bid);
   $branch_list = convertList($r);

   return array('branch'=>$branch_list);
}

function getNested($tree){
    global $wpdb;

    $refs = array();
    $list = array();
// new 'test' table will go here : cw_c_branch
    $db_list = $wpdb->get_results('SELECT * FROM cw_c_branch WHERE btree = '.intval($tree).' ORDER BY blvl, bord', ARRAY_A );
//print_r($db_list);
    foreach($db_list as $data){
        $thisref = &$refs[ $data['bid'] ];

        $thisref['bid'] = intval($data['bid']);
        $thisref['bname'] = $data['bname'];
        $thisref['bcolor'] = $data['bcolor'];
        $thisref['bparent'] = ($data['bparent'] == 0) ? '-' : $data['bparent'];
        $thisref['bord'] = $data['bord'];

        if ($data['bparent'] == 0) {
            $list[ $data['bid'] ] = &$thisref;
        } else {
            $refs[ $data['bparent'] ]['children'][ $data['bid'] ] = &$thisref;
        }
    }
    return $list;
  }

  function convertList($arr){
    $res = array();

    foreach($arr as $el){
      if(isset($el['children'])){
        $ch = convertList($el['children']);
        $el['children'] = $ch;
      }
      $res[] = $el;
    }
    return $res;
  }
 ?>
