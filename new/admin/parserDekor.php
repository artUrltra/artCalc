<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 22.11.2016
 * Time: 20:35
 */
if(!empty($_FILES)){

    $temp = $_FILES['file']['tmp_name'];

    $dir_separator = DIRECTORY_SEPARATOR;

    $folder ="dekor";

    $path = dirname(__FILE__).$dir_separator.$folder.$dir_separator;

    $targer_path = $path.$_FILES['file']['name'];

    move_uploaded_file($temp,$targer_path);
}