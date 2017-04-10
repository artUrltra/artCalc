<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 19.11.2016
 * Time: 15:01
 */
if(!empty($_FILES)){

    $temp = $_FILES['file']['tmp_name'];

    $dir_separator = DIRECTORY_SEPARATOR;

    $folder ="uploads";

    $path = dirname(__FILE__).$dir_separator.$folder.$dir_separator;

    $targer_path = $path.$_FILES['file']['name'];

    move_uploaded_file($temp,$targer_path);
}