<?php
$fp = fopen("../db/".$_GET['n'],"w");
fwrite($fp,$_POST['url']);
fclose($fp);
?>
