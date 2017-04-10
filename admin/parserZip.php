<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 11.01.2017
 * Time: 12:04
 */
if(!empty($_FILES)){
    if(is_dir('zip')==false){
        mkdir('zip', 0777, true);
    }

    $temp = $_FILES['file']['tmp_name'];

    $dir_separator = DIRECTORY_SEPARATOR;

    $folder ="zip";

    $path = dirname(__FILE__).$dir_separator.$folder.$dir_separator;

    $targer_path = $path.$_FILES['file']['name'];

    move_uploaded_file($temp,$targer_path);
}