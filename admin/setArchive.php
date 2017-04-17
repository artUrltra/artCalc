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

    $DB = new SQLite3('./db/DataBaseAdmin.db3');
    $DB->exec('CREATE TABLE IF NOT EXISTS calcmanagers (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,mail TEXT,phone TEXT, pass TEXT NULL, text TEXT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS cap ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , `name` TEXT NOT NULL , `img` TEXT NOT NULL );');
    $DB->exec('CREATE TABLE IF NOT  EXISTS carcastype (id integer primary key autoincrement,name text, price double,img text )');
    $DB->exec('CREATE TABLE IF NOT  EXISTS castomfurn (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,type TEXT,profiles  TEXT,materials TEXT,option TEXT,formula TEXT,accessory BOOLEAN);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS catalogs(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,link TEXT,parent_id INTEGER,hide BOOLEAN,\"left\" BOOLEAN,\"group\" BOOLEAN,separately BOOLEAN,level INTEGER, description TEXT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS categorydekor (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,name text);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS categorymaterials(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,name TEXT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS "decor"(id INTEGER PRIMARY KEY,parent_id INTEGER,name TEXT,img TEXT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS expmatireals (id    INTEGER PRIMARY KEY AUTOINCREMENT,name  TEXT,img   TEXT,type  INTEGER,arr_p TEXT,price INTEGER);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS formula(id  integer PRIMARY KEY AUTOINCREMENT ,name TEXT,formula TEXT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS furnitura (id INTEGER PRIMARY KEY AUTOINCREMENT,cat INTEGER,pro INTEGER,name TEXT,img TEXT,imgBig TEXT,characteristics TEXT,description TEXT,benefits TEXT,price INTEGER DEFAULT 0,formula INTEGER DEFAULT 1);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS furnituracat (cid INTEGER PRIMARY KEY,cview INTEGER,ctype INTEGER,cname TEXT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS furniturapro (pid INTEGER PRIMARY KEY,pfid INTEGER,ppid INTEGER);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS images(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,description TEXT,tags TEXT,img TEXT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS  itemsnewfurn (id        INTEGER PRIMARY KEY AUTOINCREMENT,other     TEXT,parent_id INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS "materials"(id INTEGER PRIMARY KEY NOT NULL,name TEXT,img TEXT,type TEXT,thickness TEXT,zakalka TEXT,characteristics TEXT,description TEXT,benefits TEXT, price TEXT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS "Peremochki"(id INTEGER PRIMARY KEY,name TEXT,img TEXT,max INTEGER,paz REAL,steklo REAL,penal REAL,height REAL,price INTEGER,priceK INTEGER,priceDekor TEXT,priceColor TEXT,priceAnod TEXT, width INT NULL, thickness INT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS profil_cap(id_profil INT,id_c INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS profil_h(id_profil INT,id_h INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS  profil_tabel1(id_profil INT,id_t INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS profil_tabel3(id_profil INT,id_t INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS profil_type(id_profil INT,id_t INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS  profil_v(id_profil INT,id_v INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS ProfilAndSupplements(Profil INT,Supplements INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS `profile` (`id`      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,`name`    TEXT    NOT NULL,`img`     TEXT    NOT NULL,`formula` TEXT    NOT NULL,`max`     INTEGER NOT NULL,`paz`     DOUBLE  NOT NULL,`steklo`  DOUBLE  NOT NULL,`penal`   DOUBLE  NOT NULL,`height`  DOUBLE  NOT NULL, model TEXT, int price, price INTEGER, priceK INT NULL, view INT NULL, priceDekor REAL NULL, priceColor REAL NULL, characteristics TEXT NULL, description TEXT NULL, benefits TEXT NULL, priceAnod TEXT NULL, thicknessSteklo TEXT NULL, thicknessMaterials TEXT NULL, doubleFilling INT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS "Supplements"(id INTEGER PRIMARY KEY,patern_id INTEGER,name TEXT,img TEXT, price REAL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS SupplementsM(id  integer PRIMARY KEY AUTOINCREMENT ,name TEXT,type TEXT,typeprice TEXT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS `tabel1` (`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,`name` text NOT NULL,`price` double NOT NULL,`img` text NOT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS `tabel2` (`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,`name` text NOT NULL,`price` double NOT NULL,`img` text NOT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS `tabel3` (`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,`name` text NOT NULL,`price` double NOT NULL,`img` text NOT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS temp(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,user TEXT,text TEXT, code TEXT NULL, theme TEXT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS \"type\" (name  TEXT,value INT);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS `users` (`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT ,`Name` text NOT NULL,`Pass` text NOT NULL,`hash` text NOT NULL);');
    $DB->exec('CREATE TABLE IF NOT  EXISTS view_profil (id integer PRIMARY KEY AUTOINCREMENT ,name text);');

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
