<?php
$data = array();
$error = false;
$files = array();
$uploaddir = './../img/uploads/';
if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );
foreach( $_FILES as $file ){
    if( move_uploaded_file( $file['tmp_name'], $uploaddir . basename($file['name']) ) ){
        $files[] = realpath( $uploaddir . $file['name'] );
    }
    else{
        $error = true;
    }
}
$data = $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files );
echo json_encode( $data );
