<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 27.11.2016
 * Time: 23:49
 */
include_once "db_driver.php";

session_start();

$DB = new DB();

if (isset($_POST['id'])) {
    $_SESSION['id'] = $_POST['id'];
    echo $_POST['id'];
}
if (isset($_GET['select'])) {
    $items = $DB->query('SELECT *FROM profil_h WHERE id_profil =' . $_SESSION['id']);
    $array = array();
    for ($i = 0; $i < count($items); $i++) {
        $select = $DB->query('SELECT *FROM Peremochki WHERE id=' . $items[$i]['id_h']);
        $array = array_merge($array, $select);
    }
    echo json_encode($array);
}
if (isset($_GET['select_v'])) {
    $items = $DB->query('SELECT *FROM profil_v WHERE id_profil =' . $_SESSION['id']);
    $array = array();
    for ($i = 0; $i < count($items); $i++) {
        $select = $DB->query('SELECT *FROM VertikalnuePeremochki WHERE id=' . $items[$i]['id_v']);
        $array = array_merge($array, $select);
    }
    echo json_encode($array);
}
if (isset($_GET['select_carcas_type'])) {
    $items = $DB->query('SELECT *FROM profil_type WHERE id_profil =' . $_SESSION['id']);
    $array = array();
    for ($i = 0; $i < count($items); $i++) {
        $select = $DB->query('SELECT *FROM carcastype WHERE id=' . $items[$i]['id_t']);
        $array = array_merge($array, $select);
    }
    echo json_encode($array);
}
if (isset($_GET['select_carcas_cap'])) {
    $items = $DB->query('SELECT *FROM profil_cap WHERE id_profil =' . $_SESSION['id']);
    $array = array();
    for ($i = 0; $i < count($items); $i++) {
        $select = $DB->query('SELECT *FROM tabel2 WHERE id=' . $items[$i]['id_c']);
        $array = array_merge($array, $select);
    }
    echo json_encode($array);
}
if (isset($_GET['select_carcas_tabel1'])) {
    $items = $DB->query('SELECT *FROM profil_tabel1 WHERE id_profil =' . $_SESSION['id']);
    $array = array();
    for ($i = 0; $i < count($items); $i++) {
        $select = $DB->query('SELECT *FROM tabel1 WHERE id=' . $items[$i]['id_t']);
        $array = array_merge($array, $select);
    }
    echo json_encode($array);
}
if (isset($_GET['select_carcas_tabel3'])) {
    $items = $DB->query('SELECT *FROM profil_tabel3 WHERE id_profil =' . $_SESSION['id']);
    $array = array();
    for ($i = 0; $i < count($items); $i++) {
        $select = $DB->query('SELECT *FROM tabel3 WHERE id=' . $items[$i]['id_t']);
        $array = array_merge($array, $select);
    }
    echo json_encode($array);
}