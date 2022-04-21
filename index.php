<?php




$servername = "localhost";
$username = "root";
$password = "";

$cardNum = $_POST['cardNum'];
$cardHolder =$_POST['cardHolder'];
$expDM = $_POST['expDM'];
$expDY = $_POST['expDY'];
$code = $_POST['code'];



$conn = mysqli_connect($servername,$username, $password , 'moneytransferform');

if(!$conn){
   
}else{
   
   
}


$sql = "INSERT INTO save_data (cardNum,cardHolder,expDM,expDY,code) VALUES (?,?,?,?,?)";
$stmt= $conn->prepare($sql);
$stmt->bind_param("isddi",$cardNum, $cardHolder, $expDM, $expDY,$code);
$stmt->execute();


?>