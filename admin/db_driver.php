<?php

/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 01.11.2016
 * Time: 23:08
 */
class DB
{
    private  $DataBase = NULL;
    private $DataBasePath =NULL;


    //Конструктор
    function __construct()
    {
        $this->DataBasePath =__DIR__.'/db/DataBaseAdmin.db3';
        $this->DataBase =new SQLite3($this->DataBasePath);
    }

    //Функция для формирования масивва из Базы Данных
    private function createArray($rs)
    {

        if (!$rs) return false;
        $smartyRs = array();
        while ($row = $rs->fetchArray(SQLITE3_ASSOC)) {
            $smartyRs[] = $row;
        }
        return $smartyRs;
    }

    //Запрос в базу данных
    public function query($string)
    {
        $this->DataBase =new SQLite3($this->DataBasePath);
        $rs =$this->DataBase->query($string);
        return $this->createArray($rs);
    }

    public function query_no_var($string)
    {
        $this->DataBase =new SQLite3($this->DataBasePath);
        $this->DataBase->query($string);
    }
}
//echo __DIR__."/db/DataBaseAdmin.db3";

