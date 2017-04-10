<?php
$data = array();
$error = false;
$uploaddir = './../img/uploads/';

if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );

    if( move_uploaded_file($_FILES[0]['tmp_name'], $uploaddir . $_FILES[0]['name'] ) ){
          $files[] =  './img/uploads/' . $_FILES[0]['name'];
    }
    else{
        $error = true;
    }


$data = $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files );
echo json_encode( $data );
