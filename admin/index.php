<?php

include_once "db_driver.php";

//Запус сессии
session_start();

require_once('Smarty/libs/Smarty.class.php');
require_once('test.php');
$smarty = new Smarty;

$smarty->template_dir = 'Smarty/templates';
$smarty->compile_dir = 'Smarty/templates_c';
$smarty->config_dir = 'Smarty/configs';
$smarty->cache_dir = 'Smarty/cache';
$smarty->caching = false;
$smarty->force_compile = true;
$smarty->compile_check = false;
$DB = new DB();
if (isset($_POST['submit'])) {
    $Users = $DB->query("SELECT * FROM `users` WHERE `Name` LIKE '{$_POST['inputLogin']}'");
    if ($_POST['inputPassword'] == $Users[0]['Pass']) {
        $_SESSION['Pass'] = $_POST['inputPassword'];
        $_SESSION['Login'] = $_POST['inputLogin'];
        header('Location:  ../admin/?page=stol');;
    }
}

if (isset($_SESSION['Login'])) {

    $Users = $DB->query("SELECT * FROM `users` WHERE `Name` LIKE '{$_SESSION['Login']}'");
    if ($_SESSION['Pass'] == $Users[0]['Pass']) {
        loading(isset($_GET['page']) ? $_GET['page'] : 'stol', $smarty, $DB);
    }
} else {
    $smarty->assign('name', 0);
    $smarty->display('load.tpl');
}


function loading($page, $smarty, $DB)
{
    switch ($page) {
        case 'admin':
            admin($smarty, $DB, $DB);
            break;
        case 'stol':
            stol($smarty, $DB);
            break;
        case 'stol2':
            stol2($smarty, $DB);
            break;
        case 'form':
            formula($smarty, $DB);
            break;
        case 'manager':
            manager($smarty, $DB);
            break;

        case 'materials':
            materials($smarty, $DB);
            break;

        case 'decor':
            decor($smarty, $DB);
            break;
        case  'managermaterials':
            managermaterials($smarty, $DB);
            break;
        case  'manegerdekor':
            manegerdekor($smarty, $DB);
            break;
        case 'stolType';
            stolType($smarty, $DB);
            break;
        case 'stolcap';
            stolcap($smarty, $DB);
            break;
        case 'Peremochki';
            Peremochki($smarty, $DB);
            break;
        case 'manegerstart';
            manegerstart($smarty, $DB);
            break;
        case 'viewprofil';
            viewprofil($smarty, $DB);
            break;
        case 'furnitura0';
            furnitura0($smarty, $DB);
            break;
        case 'furnitura1';
            furnitura($smarty, $DB, 1);
            break;
        case 'furnitura2';
            furnitura($smarty, $DB, 2);
            break;
        case 'furnitura3';
            furnitura($smarty, $DB, 3);
            break;
        case 'calcmanagers';
            calcmanagers($smarty, $DB);
            break;
        case 'EquationEditor';
            EquationEditor($smarty, $DB);
            break;
        case 'managersupplements';
            managersupplements($smarty, $DB);
            break;
        case 'Supplements';
            Supplements($smarty, $DB);
            break;
        case 'archive';
            archive($smarty, $DB);
            break;
        case 'gallery';
            gallery($smarty, $DB);
            break;
        case 'gallery3d';
            gallery3d($smarty, $DB);
            break;
        case 'castomfurnitura';
            castomfurnitura($smarty, $DB);
            break;
        case 'furn';
            furn($smarty, $DB);
            break;
        case 'editfurn';
            editfurn($smarty, $DB);
            break;
        case 'ExpMatireals';
            ExpMatireals($smarty, $DB);
            break;
        case 'Catalogs';
            Catalogs($smarty, $DB);
            break;
        case 'temp';
            temp($smarty, $DB);
            break;
        case 'manufacturer';
            manufacturer($smarty, $DB);
    }
}

function manufacturer($smarty, $DB)
{
    menu($smarty, $DB);
    $smarty->assign('items', $DB->query('SELECT *
FROM manufacturer
GROUP BY name'));
    $smarty->display('manufacturer.tpl');
}

function temp($smarty, $DB)
{
    menu($smarty, $DB);

    $items = $DB->query('SELECT * FROM temp');
    $smarty->assign('items', $items);
    $smarty->assign('managers', $DB->query('SELECT * FROM calcmanagers'));
    $smarty->display('temp.tpl');
}

function Catalogs($smarty, $DB)
{
    menu($smarty, $DB);
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    $sql = 'SELECT * FROM catalogs WHERE parent_id =' . $id;
    $items = $DB->query($sql);
    $item = $DB->query('SELECT * FROM catalogs WHERE id =' . $id);
    $smarty->assign('items', $items);
    $smarty->assign('item', $item[0]);

    $smarty->display('catalogs.tpl');
}

function ExpMatireals($smarty, $DB)
{
    menu($smarty, $DB);
    $type = isset($_GET['type']) ? $_GET['type'] : null;
    if ($type == null) exit();

    $items = $DB->query("SELECT * FROM expmat WHERE cat = {$type}");
    $smarty->assign('items', $items);
    $smarty->assign('type', $type);
    $smarty->display('expmat.tpl');
}

function editfurn($smarty, $DB)
{
    menu($smarty, $DB);

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    if ($id == null) exit();

    $item = $DB->query("SELECT * FROM itemsnewfurn WHERE parent_id = {$_GET['nid']}");
    $smarty->assign('other', unserialize($item[$id]['other']));
    $smarty->assign('item', $item[$id]);
    $smarty->assign('id', $_GET['nid']);

    $smarty->display('editfurn.tpl');
}

function furn($smarty, $DB)
{
    menu($smarty, $DB);

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    if ($id == null) exit();
    $item = $DB->query("SELECT * FROM castomfurn WHERE id = {$id}");
    $items = $DB->query("SELECT * FROM itemsnewfurn WHERE parent_id = {$id}");
    $arr = [];
    foreach ($items as $i) {
        array_push($arr, unserialize($i['other']));
    }
    $smarty->assign('option', unserialize($item[0]['option']));
    $smarty->assign('items', $arr);
    $smarty->assign('name', $item[0]['name']);
    $smarty->assign('id', $id);


    $smarty->display('newFurn.tpl');
}

function menu($smarty, $DB)
{
    $supplements = $DB->query("SELECT * FROM SupplementsM");
    $smarty->assign('supplements', $supplements);

    $cMaterials = $DB->query("SELECT * FROM `categorymaterials`");
    $smarty->assign('categoryMaterials', $cMaterials);

    $furnituta = $DB->query("SELECT * FROM castomfurn");
    $smarty->assign('furnituta', $furnituta);

    $cDekor = $DB->query("SELECT * FROM `categorydekor`");
    $smarty->assign('dekors', $cDekor);
    $scan = scandir('uploads');
    unset($scan[array_search('.', $scan)]);
    unset($scan[array_search('..', $scan)]);
    $smarty->assign('archive', $scan);
    $smarty->assign('user', $_SESSION['Login']);
    $res = $DB->query('SELECT * FROM catalogs WHERE parent_id =0');
    $smarty->assign('catalog', $res);
    $res1 = $DB->query('SELECT * FROM catalogs WHERE "group" = 1 AND parent_id !=0');
    $smarty->assign('catalog1', $res1);
}

function castomfurnitura($smarty, $DB)
{
    menu($smarty, $DB);

    $type = $DB->query("SELECT * FROM type");
    $profiles = $DB->query("SELECT * FROM view_profil");
    $materials = $DB->query("SELECT * FROM `categorymaterials`");
    $formula = $DB->query("SELECT * FROM formula");
    $items = $DB->query("SELECT * FROM castomfurn");

    $smarty->assign('type', $type);
    $smarty->assign('formula', $formula);
    $smarty->assign('profiles', $profiles);
    $smarty->assign('materials', $materials);
    $smarty->assign('items', $items);
    $smarty->display('castomfurnitura.tpl');
}


/**
 * Галерея 3d
 * @param $smarty
 * @author Goncharenko Andiy
 */
function gallery3d($smarty, $DB)
{
    $supplements = $DB->query("SELECT * FROM SupplementsM");
    $smarty->assign('supplements', $supplements);

    $cMaterials = $DB->query("SELECT * FROM `categorymaterials`");
    $smarty->assign('categoryMaterials', $cMaterials);
    $scan = scandir('3d');
    unset($scan[array_search('.', $scan)]);
    unset($scan[array_search('..', $scan)]);
    $smarty->assign('archive', $scan);

    $cDekor = $DB->query("SELECT * FROM `categorydekor`");
    $smarty->assign('dekors', $cDekor);


    $smarty->assign('user', $_SESSION['Login']);
    $smarty->display('gallery3d.tpl');
}

/**
 * Галерея
 * @param $smarty
 * @author Goncharenko Andiy
 */
function gallery($smarty, $DB)
{
    menu($smarty, $DB);
    $smarty->display('gallery.tpl');
}

/**
 * Отрисовка Архиватора
 * @param $smarty
 * @author Goncharenko Andiy
 */
function archive($smarty, $DB)
{
    menu($smarty, $DB);
    $scan = scandir('zip');
    unset($scan[array_search('.', $scan)]);
    unset($scan[array_search('..', $scan)]);
    $smarty->assign('archive', $scan);
    $smarty->display('archive.tpl');
}

/**
 * Управоения дополнениям
 * @param $smarty
 * @author Goncharenko Andiy
 */
function managersupplements($smarty, $DB)
{
    menu($smarty, $DB);
    $items = $DB->query("SELECT * FROM SupplementsM");
    $forms = $DB->query('SELECT * FROM formula');
    $smarty->assign('items', $items);
    $smarty->assign('forms', $forms);
    $smarty->display('managersupplements.tpl');
}

/**
 * Дополнения
 * @param $smarty
 * @author Goncharenko Andiy
 */
function Supplements($smarty, $DB)
{
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    if ($id == null) exit();

    menu($smarty, $DB);
    $items = $DB->query('SELECT * FROM Supplements WHERE patern_id=' . $id);
    $smarty->assign('items', $items);
    $smarty->assign('profils', $DB->query('SELECT * FROM profile'));
    $smarty->assign('id', $id);
    $smarty->display('Supplements.tpl');

}

/**
 * Редактор Фомул в Админке
 * @param $smarty
 * Дата 23.12.2016 14:58
 * @author Goncharenko Andiy
 */
function EquationEditor($smarty, $DB)
{
    menu($smarty, $DB);
    $items = $DB->query('SELECT * FROM formula');
    $smarty->assign('items', $items);
    $smarty->display('form.tpl');
}

function manager($smarty, $DB)
{
    menu($smarty, $DB);

    $items = $DB->query("SELECT * FROM `users`");
    $smarty->assign('items', $items);
    $smarty->display('manager.tpl');
}


function admin($smarty, $DB)
{


}

function stol($smarty, $DB)
{
    menu($smarty, $DB);

    $scan = scandir('3d');
    unset($scan[array_search('.', $scan)]);
    unset($scan[array_search('..', $scan)]);
    $smarty->assign('3d', $scan);

    $item = $DB->query("SELECT * FROM `profile`");


    $smarty->assign('items', $item);
    $smarty->assign('view', $DB->query("SELECT * FROM view_profil"));

    $smarty->display('stol.tpl');
}

function tabelid($id)
{
    if ($id == 1) {
        return "tabel1";
    } elseif ($id == 2) {
        return "tabel2";
    } elseif ($id == 3) {
        return "tabel3";
    } elseif ($id == 4) {
        return "tabel4";
    } else {
        die();
    }
}

function tabelname($id)
{
    if ($id == 1) {
        return "Уплотнитель";
    } elseif ($id == 2) {
        return "Декоративная заглушка в паз";
    } elseif ($id == 3) {
        return "Декоративная заглушка";
    } else {
        die();
    }
}

function stol2($smarty, $DB)
{

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    if ($id == null) exit();


    menu($smarty, $DB);

    $item = $DB->query('SELECT * FROM `' . tabelid($id) . '`');
    $profils = $DB->query("SELECT *FROM profile");
    $smarty->assign('profils', $profils);
    $smarty->assign('stolid', $id);
    $smarty->assign('items', $item);
    if ($id < 4) {
        $smarty->assign('name', tabelname($id));
        $smarty->display('stol2.tpl');
    } elseif ($id = 4) {
        $smarty->display('stol3.tpl');
    }
}

function decor($smarty, $DB)
{
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    if ($id == null) exit();


    $name = $DB->query("SELECT * FROM `categorydekor` WHERE `id` =" . $id);

    menu($smarty, $DB);

    $items = $DB->query("SELECT * FROM decor WHERE parent_id=" . $id);

    $smarty->assign('items', $items);

    $smarty->display('decor.tpl');
}

function manegerdekor($smarty, $DB)
{

    menu($smarty, $DB);
    $items = $DB->query("SELECT * FROM `categorydekor`");
    $smarty->assign('items', $items);
    $smarty->display('managerdekor.tpl');

}

function managermaterials($smarty, $DB)
{
    menu($smarty, $DB);
    $items = $DB->query("SELECT * FROM `categorymaterials`");
    $smarty->assign('items', $items);
    $smarty->display('managermaterials.tpl');
}

function stolType($smarty, $DB)
{
    menu($smarty, $DB);
    $item = $DB->query("SELECT * FROM `carcastype`");
    $profils = $DB->query("SELECT *FROM profile");
    $smarty->assign('profils', $profils);
    $smarty->assign('items', $item);
    $smarty->display('stolType.tpl');

}

function stolcap($smarty, $DB)
{
    $item = $DB->query("SELECT * FROM `tabel2`");
    $profils = $DB->query("SELECT *FROM profile");
    menu($smarty, $DB);
    $smarty->assign('profils', $profils);
    $smarty->assign('items', $item);
    $smarty->display('stolcap.tpl');
}


function Peremochki($smarty, $DB)
{

    $item = $DB->query("SELECT *FROM Peremochki");
    $profils = $DB->query("SELECT *FROM profile");

    menu($smarty, $DB);

    $smarty->assign('profils', $profils);
    $smarty->assign('items', $item);
    $smarty->display('Peremochki.tpl');


}

function manegerstart($smarty, $DB)
{

    menu($smarty, $DB);
    $profils = $DB->query("SELECT * FROM profile");
    $materials = $DB->query("SELECT * FROM materials");
    $smarty->assign('profils', $profils);
    $smarty->assign('materials', $materials);

    $smarty->display('managerstart.tpl');

}

function viewprofil($smarty, $DB)
{
    menu($smarty, $DB);

    $items = $DB->query("SELECT * FROM view_profil");
    $smarty->assign('items', $items);
    $smarty->display('manageviewprofil.tpl');

}

function furnitura0($smarty, $DB)
{

    menu($smarty, $DB);

    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (1,  1, 1, 'Раздвижные механизмы')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (2,  1, 1, 'Механизм синхронизации')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (3,  1, 2, 'Направляющие верхние')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (4,  1, 2, 'Вид крепления направляющей')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (5,  1, 2, 'Поводок')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (6,  1, 3, 'Доводчик')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (7,  1, 3, 'Декоративная планка для профиля')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (8,  1, 3, 'Щеточный уплотнитель')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (9,  1, 3, 'Ручка')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (10, 1, 3, 'Замок дверной')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (11, 2, 1, 'Складные механизмы')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (12, 2, 1, 'Роторный механизм')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (13, 2, 2, 'Петли')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (14, 2, 2, 'Направляющие верхние')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (15, 2, 2, 'Вид крепления направляющей')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (16, 2, 3, 'Декоративная планка для профиля')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (17, 2, 3, 'Щеточный уплотнитель')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (18, 2, 3, 'Ручка')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (19, 2, 3, 'Крепление ручки')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (20, 2, 3, 'Замок дверной')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (21, 3, 2, 'Петли')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (22, 3, 2, 'Ручка')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (23, 3, 2, 'Замок')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (24, 4, 2, 'Ножки')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (25, 4, 2, 'Колесики')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (26, 4, 2, 'Стойки')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (27, 4, 2, 'Тип соединения полотен')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (28, 0, 2, 'Стойки')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (29, 1, 2, 'Направляющие нижние')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (30, 2, 2, 'Направляющие нижние')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (31, 1, 1, 'Телескопический механизм')");
    $DB->query_no_var("INSERT OR REPLACE INTO furnituracat (cid, cview, ctype, cname) VALUES (32, 4, 3, 'Телескопический механизм')");

    header('Location:  ../admin/index.php?page=furnitura1');

}

function furnitura($smarty, $DB, $type)
{

    $smarty->assign('items', $DB->query("
                SELECT furnitura.id,
                       furnitura.cat,
                       furnitura.name,
                       furnitura.img,
                       furnitura.imgBig,
                       furnitura.characteristics,
                       furnitura.description,
                       furnitura.benefits,
                       furnitura.price,
                       furnitura.formula,
                       furnitura.manufacturer,
                       furnituracat.cid,
                       furnituracat.cview,
                       furnituracat.ctype,
                       furnituracat.cname
                FROM furnitura
                INNER JOIN furnituracat
                WHERE furnituracat.ctype = {$type}
                  AND furnitura.cat = furnituracat.cid
            "));
    $formuls = $DB->query('SELECT * FROM  formula');
    $smarty->assign('formuls', $formuls);
    menu($smarty, $DB);

    $smarty->assign('manufacture', $DB->query('SELECT * FROM manufacturer'));
    $smarty->assign('cats', $DB->query("SELECT * FROM furnituracat WHERE ctype = {$type}"));
    $smarty->assign('profils', $DB->query("SELECT id,name FROM profile"));
    $smarty->display('furnitura' . $type . '.tpl');

}

function calcmanagers($smarty, $DB, $type)
{

    $DB->query_no_var("CREATE TABLE IF NOT EXISTS calcmanagers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                mail TEXT,
                phone TEXT
            )");
    $smarty->assign('items', $DB->query("SELECT * FROM calcmanagers"));
    $smarty->assign('user', $_SESSION['Login']);
    $smarty->display('calcManagers.tpl');

}

function materials($smarty, $DB)
{
    $type = isset($_GET['type']) ? $_GET['type'] : null;
    if ($type == null) exit();

    $name = $DB->query("SELECT * FROM `categorymaterials` WHERE `id` =" . $type);
    $dekotName = $name[0]['name'];
    menu($smarty, $DB);

    $items = $DB->query("SELECT * FROM materials WHERE type=" . $type);

    $smarty->assign('dekotName', $dekotName);
    $smarty->assign('items', $items);
    $smarty->display('materials.tpl');
}

if (isset($_GET['delete'])) {
    unlink('zip/' . $_GET['delete']);
    echo 'Zip Удален';
}
if (isset($_GET['delete1'])) {
    unlink($_GET['delete1']);
    echo 'Удален';
}
if (isset($_GET['delete2'])) {
    unlink('./3d/' . $_GET['delete2']);
    echo 'Удален ' . $_GET['delete2'];
}
