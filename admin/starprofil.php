<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 02.12.2016
 * Time: 16:16
 */

function setStartProfil($id)
{
    file_put_contents('./counter.txt', $id);
    echo 'Стартовый профиль установлен';
}
function getStartProfil(){
    echo file_get_contents('./counter.txt');
}
if (isset($_POST['id'])) {
    setStartProfil($_POST['id']);
}

if(isset($_POST['get'])) {
    getStartProfil();
}