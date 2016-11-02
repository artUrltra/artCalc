<?php
//$error = false;
//$files = array();
//$uploaddir = './img/uploads/'; // . - текущая папка где находится submit.php
//if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );
//foreach( $_FILES as $file ){
//    if( move_uploaded_file( $file['tmp_name'], $uploaddir . basename($file['name']) ) ){
//        $files[] = realpath( $uploaddir . $file['name'] );
//    }
//    else{
//        $error = true;
//    }
//}
//$data = $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files );
//echo json_encode( $data );

//
////if( !isset( $_GET['uploadfiles'] ) ){
//if( $_GET['uploadfiles'] ){
//    $error = false;
//    $files = array();
//    $uploaddir = './img/uploads/'; // . - текущая папка где находится submit.php
//    if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );
//    foreach( $_FILES as $file ){
//        if( move_uploaded_file( $file['tmp_name'], $uploaddir . basename($file['name']) ) ){
//            $files[] = realpath( $uploaddir . $file['name'] );
//        }
//        else{
//            $error = true;
//        }
//    }
//    $data = $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files );
//    echo json_encode( $data );
//}
//
//
////if ( !isset( $_GET['screen'] )){
//if (  $_GET['screen'] ){
//
//$fp = fopen("counter.txt", "a"); // Открываем файл в режиме записи
//$mytext = "Это строку необходимо нам записать\r\n"; // Исходная строка
//$test = fwrite($fp, $mytext); // Запись в файл
//fclose($fp); //Закрытие файла

    $data = $_REQUEST['screen'];
    list($type, $data) = explode(';', $data);
    list(, $data)      = explode(',', $data);
    $data = base64_decode($data);
    $time = (string) time();
    $time6 = date('H-i-s', time());
    file_put_contents("./img/screen/".$time6.".png", $data);
    echo $time6 ;

