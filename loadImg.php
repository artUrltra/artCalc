<?php
    $data = $_REQUEST['screen'];
    list($type, $data) = explode(';', $data);
    list(, $data)      = explode(',', $data);
    $data = base64_decode($data);
    $time = (string) time();
    $time6 = date('H-i-s', time());
    file_put_contents("./img/screen/".$time6.".png", $data);
    echo $time6 ;

