<?php

$data = array();

if (isset($_GET['uploadfiles'])) {
    $error = false;
    $files = array();

    $uploaddir = './uploads/';

    if (!is_dir($uploaddir)) mkdir($uploaddir, 0777);

    foreach ($_FILES as $file) {
        if (move_uploaded_file($file['tmp_name'], $uploaddir . basename($file['name']))) {
            $files[] = realpath($uploaddir . $file['name']);
        }else{
            $error = true;
        }
    }

    $data =  $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files );
    file_put_contents('counter.txt', var_dump($data));
    echo json_encode($data);
}
if (isset($_GET['uploadfiles2'])) {
    $error = false;
    $files = array();

    $uploaddir = './dekor/';

    if (!is_dir($uploaddir)) mkdir($uploaddir, 0777);

    foreach ($_FILES as $file) {
        if (move_uploaded_file($file['tmp_name'], $uploaddir . basename($file['name']))) {
            $files[] = realpath($uploaddir . $file['name']);
        }else{
            $error = true;
        }
    }

    $data =  $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files );
    file_put_contents('counter.txt', var_dump($data));
    echo json_encode($data);
}