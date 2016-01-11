<?php

error_reporting(0);
@ini_set('display_errors', 0);

$con = mysql_connect('localhost', 'root', '');
mysql_select_db('test', $con);
$qry_em = 'select name, email from users';
$qry_res = mysql_query($qry_em);
$jsonData = array();
while ($array = mysql_fetch_row($qry_res)) {
    $jsonData[] = array('uname'=>$array[0], 'email'=>$array[1]); 
 }
echo json_encode($jsonData);