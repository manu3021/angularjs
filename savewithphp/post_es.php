<?php
error_reporting(0);
@ini_set('display_errors', 0);

$data = json_decode(file_get_contents("php://input"));

$usrname = mysql_real_escape_string($data->uname);
$upswd = mysql_real_escape_string($data->pswd);
$uemail = mysql_real_escape_string($data->email);

if(!$usrname && !$upswd && !$uemail) {
 $msg = "All fields are required";	
 print_r($msg);
 return;
}

$con = mysql_connect('localhost', 'root', '');
mysql_select_db('test', $con);

$qry_em = 'select count(*) as cnt from users where email ="' . $uemail . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);

if($res['cnt']==0){
	$qry = 'INSERT INTO users (name,pass,email) values ("' . $usrname . '","' . $upswd . '","' . $uemail . '")';
	$qry_res = mysql_query($qry);
	if ($qry_res) {
	    $msg = "User Created Successfully!!!";
	    print_r($msg);
	} else {
	    $msg = array('msg' => "", 'error'=> 'Error In inserting record');
	    $msg =json_encode($msg);

	    print_r($msg);
	}
}
else
{
   $msg = array('msg' => "", 'error'=> 'User Already exists with same email', 'email'=>$uemail);
	    $msg =json_encode($msg);
    print_r($msg);
}
?>