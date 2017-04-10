<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 02.12.2016
 * Time: 16:16
 */

function setStart($id)
{
    file_put_contents('./startMaterial.txt', $id);
    echo 'Стартовый материал установлен';
}
function getStart(){
    echo file_get_contents('./startMaterial.txt');
}
if (isset($_POST['id'])) {
    setStart($_POST['id']);
}

if(isset($_POST['get'])) {
    getStart();
}