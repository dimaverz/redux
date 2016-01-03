<?php

function branchGetList($data){
   $bid = (isset($data['bid']))?intval($data['bid']):0;

   $r = getNested($bid);
   $branch_list = convertList($r);

   $tree_data = getTreeData($bid);

   return array('tree'=>$tree_data, 'branch'=>$branch_list);
}

function getTreeData($bid){
   global $wpdb;

   return $wpdb->get_results( 'SELECT * FROM cw_c_trees WHERE bid='.intval($bid), ARRAY_A );
}

function getNested($tree){
 global $wpdb;

 $refs = array();
 $list = array();

 $db_list = $wpdb->get_results('SELECT * FROM cw_c_branch WHERE btree = '.intval($tree).' ORDER BY blvl, bord', ARRAY_A );

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
