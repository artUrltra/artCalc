<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 11.01.2017
 * Time: 11:33
 */

if(isset($_GET['set'])){

    removeDirectory('db');
    removeDirectory('dekor');
    removeDirectory('materials');
    removeDirectory('uploads');

    $zip = new ZipArchive();

    if ($zip->open("zip/".$_GET['set']) === true) {
        $zip->extractTo("./");
        $zip->close();
    } else echo "Архива не существует!";



    echo 'Архив Установлен';
}
function removeDirectory($dir)
{
    if ($objs = glob($dir . "/*")) {
        foreach ($objs as $obj) {
            is_dir($obj) ? removeDirectory($obj) : unlink($obj);
        }
    }
    rmdir($dir);
}
