<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 28.03.2017
 * Time: 19:47
 */

include_once '/var/www/artul201/data/www/audoors.ru/new/admin/db_driver.php';
$DB = new DB();
$item = $DB->query("SELECT * FROM calcmanagers");
$managers = array();
foreach ($item as $value) {
    $managers[$value['mail']] =array('mail'=> $value['mail'],'name' =>  $value['name'],'phone' => $value['phone'],'position' => '');
}
var_dump($managers);