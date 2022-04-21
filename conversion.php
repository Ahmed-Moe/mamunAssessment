<?php
$mon = $_POST['mon'];
$cur = $_POST['cur'];


if($cur =="USD")
{
    $mon= $mon*0.39;
}

echo $mon;
return $mon;

?>