<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 27.05.2017
 * Time: 18:29
 */
require_once('../admin/Smarty/libs/Smarty.class.php');
require_once('../html2pdf/html2pdf.class.php');

function d($input)
{
    $collapse = false;
    $recursive = function ($data, $level = 0) use (&$recursive, $collapse) {
        global $argv;

        $isTerminal = isset($argv);

        if (!$isTerminal && $level == 0 && !defined("DUMP_DEBUG_SCRIPT")) {
            define("DUMP_DEBUG_SCRIPT", true);

            echo '<script language="Javascript">function toggleDisplay(id) {';
            echo 'var state = document.getElementById("container"+id).style.display;';
            echo 'document.getElementById("container"+id).style.display = state == "inline" ? "none" : "inline";';
            echo 'document.getElementById("plus"+id).style.display = state == "inline" ? "inline" : "none";';
            echo '}</script>' . "\n";
        }

        $type = !is_string($data) && is_callable($data) ? "Callable" : ucfirst(gettype($data));
        $type_data = null;
        $type_color = null;
        $type_length = null;

        switch ($type) {
            case "String":
                $type_color = "green";
                $type_length = strlen($data);
                $type_data = "\"" . htmlentities($data) . "\"";
                break;

            case "Double":
            case "Float":
                $type = "Float";
                $type_color = "#0099c5";
                $type_length = strlen($data);
                $type_data = htmlentities($data);
                break;

            case "Integer":
                $type_color = "red";
                $type_length = strlen($data);
                $type_data = htmlentities($data);
                break;

            case "Boolean":
                $type_color = "#92008d";
                $type_length = strlen($data);
                $type_data = $data ? "TRUE" : "FALSE";
                break;

            case "NULL":
                $type_length = 0;
                break;

            case "Array":
                $type_length = count($data);
        }

        if (in_array($type, array("Object", "Array"))) {
            $notEmpty = false;

            foreach ($data as $key => $value) {
                if (!$notEmpty) {
                    $notEmpty = true;

                    if ($isTerminal) {
                        echo $type . ($type_length !== null ? "(" . $type_length . ")" : "") . "\n";

                    } else {
                        $id = substr(md5(rand() . ":" . $key . ":" . $level), 0, 8);

                        echo "<a href=\"javascript:toggleDisplay('" . $id . "');\" style=\"text-decoration:none\">";
                        echo "<span style='color:#666666'>" . $type . ($type_length !== null ? "(" . $type_length . ")" : "") . "</span>";
                        echo "</a>";
                        echo "<span id=\"plus" . $id . "\" style=\"display: " . ($collapse ? "inline" : "none") . ";\">&nbsp;&#10549;</span>";
                        echo "<div id=\"container" . $id . "\" style=\"display: " . ($collapse ? "" : "inline") . ";\">";
                        echo "<br />";
                    }

                    for ($i = 0; $i <= $level; $i++) {
                        echo $isTerminal ? "|    " : "<span style='color:black'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                    }

                    echo $isTerminal ? "\n" : "<br />";
                }

                for ($i = 0; $i <= $level; $i++) {
                    echo $isTerminal ? "|    " : "<span style='color:black'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                }

                echo $isTerminal ? "[" . $key . "] => " : "<span style='color:black'>[" . $key . "]&nbsp;=>&nbsp;</span>";

                call_user_func($recursive, $value, $level + 1);
            }

            if ($notEmpty) {
                for ($i = 0; $i <= $level; $i++) {
                    echo $isTerminal ? "|    " : "<span style='color:black'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                }

                if (!$isTerminal) {
                    echo "</div>";
                }

            } else {
                echo $isTerminal ?
                    $type . ($type_length !== null ? "(" . $type_length . ")" : "") . "  " :
                    "<span style='color:#666666'>" . $type . ($type_length !== null ? "(" . $type_length . ")" : "") . "</span>&nbsp;&nbsp;";
            }

        } else {
            echo $isTerminal ?
                $type . ($type_length !== null ? "(" . $type_length . ")" : "") . "  " :
                "<span style='color:#666666'>" . $type . ($type_length !== null ? "(" . $type_length . ")" : "") . "</span>&nbsp;&nbsp;";

            if ($type_data != null) {
                echo $isTerminal ? $type_data : "<span style='color:" . $type_color . "'>" . $type_data . "</span>";
            }
        }

        echo $isTerminal ? "\n" : "<br />";
    };

    call_user_func($recursive, $input);
    exit();
}


$smarty = new Smarty;
$smarty->template_dir = 'temp';
$smarty->compile_dir = 'temp_c';
$smarty->config_dir = 'Smarty/configs';
$smarty->cache_dir = 'Smarty/cache';
$smarty->caching = false;
$smarty->force_compile = true;
$smarty->compile_check = false;

$fn = "../db/" . '1495894197175';
$fh = fopen($fn, "r");
$ff = json_decode(fread($fh, filesize($fn)), true);
fclose($fh);
if ($ff) {
    $dbl = new SQLite3("../admin/db/DataBaseAdmin.db3");
    $date = date('d.m.Y');
    $today = date("m.d.y");
    function eGet($q)
    {
        global $ff;
        return isset($ff[$q]) && !empty($ff[$q]) && $ff[$q] != "NaN" && $ff[$q] != "nan" && $ff[$q] != "null" ? true : false;
    }

    function sGet($q, $d = 0)
    {
        global $ff;
        return eGet($q) ? $ff[$q] : $d;
    }

    $typeFurnitura = sGet("furnitura-select"); // Тип фурнитуры
    switch ($typeFurnitura) {
        case 1:
            $typeFurnituraName0 = "Раздвижная перегородка";
            $typeFurnituraName = "раздвижной перегородки";
            break;
        case 2:
            $typeFurnituraName0 = "Складная перегородка";
            $typeFurnituraName = "складной перегородки";
            break;
        case 3:
            $typeFurnituraName0 = "Распашная дверь";
            $typeFurnituraName = "распашной двери";
            break;
        case 4:
            $typeFurnituraName0 = "Мобильная перегородка";
            $typeFurnituraName = "мобильной перегородки";
            break;
        case 0:
            $typeFurnituraName0 = "Стационарная перегородка";
            $typeFurnituraName = "стационарной перегородки";
            break;
    }

    $setsNumber = sGet("setsNumber", 1);
    $AksessuaryRuchkaKollichestvo1 = sGet("AksessuaryRuchkaKollichestvo1");
    $AksessuaryRuchkaKollichestvo2 = sGet("AksessuaryRuchkaKollichestvo2");
    $AksessuaryRuchkaKollichestvo3 = sGet("AksessuaryRuchkaKollichestvo3");
    $orderNumber = sGet("orderNumber", "");
    $calcmanager = sGet("calcmanager", "");
    $Allheight = sGet("Allheight");
    $Allwidth = sGet("Allwidth");
    $count0 = sGet("count", 1);
    $count1 = sGet("count1");
    $countW = sGet("countW");
    $countH = sGet("countH");
    $furnituraSelect = sGet("furnitura-select");
    $FurnituraTotal = sGet("TotalFurnitura");
    $state2Param = sGet("state2Param");
    $state3Param = sGet("state3Param");
    $fotoNames = sGet("fotoNames");
    $per = json_decode(sGET("per"));
    $rub = json_decode(sGET("rub"));
    $sum = json_decode(sGET("sum"));
    $pmh = json_decode(sGET("pmh"));
    $pmv = json_decode(sGET("pmv"));
    $priceFull1 = sGet("priceFull1");
    $priceFull2 = sGet("priceFull2");
    $priceFull3 = sGet("priceFull3");
    $arrF0 = json_decode(sGet("arrF0"));
    $arrF1 = json_decode(sGet("arrF1"));
    $arrF2 = json_decode(sGet("arrF2"));
    $arrayNamber = json_decode(sGet("arrayNamber"));
    $contacts = json_decode(sGet("contacts"));
    $schema = sGet('schema');
    $Omanufacturer = sGet('Omanufacturer');
    $Emanufacturer = sGet('Emanufacturer');
    $Fmanufacturer = sGet('Fmanufacturer');
    $p1t = $count0 * (1 + $per[0]->i / 100) * (1 + $per[0]->p / 100) * 1.1;
    $p2t = $count0 * (1 + $per[1]->i / 100) * (1 + $per[1]->p / 100) * 1.1;
    $p3t = $count0 * (1 + $per[2]->i / 100) * (1 + $per[2]->p / 100) * 1.1;
    $procent0 = ($rub[0]->p + $rub[0]->i) / 2;
    $procent1 = ($rub[1]->p + $rub[1]->i) / 2;
    $procent2 = ($rub[2]->p + $rub[2]->i) / 2;
//Таблица Заполнение
    $m1 = $sum[0]->m * (1 + $per[0]->i / 100) * (1 + $per[0]->p / 100) * 1.1;
    $m2 = $sum[1]->m * (1 + $per[1]->i / 100) * (1 + $per[1]->p / 100) * 1.1;
    $m3 = $sum[2]->m * (1 + $per[2]->i / 100) * (1 + $per[2]->p / 100) * 1.1;
    $p1 = ($sum[0]->p * $count0) + $procent0 + $sum[0]->a + $sum[0]->d;
    $p2 = ($sum[1]->p * $count0) + $procent1 + $sum[1]->a + $sum[1]->d;
    $p3 = ($sum[2]->p * $count0) + $procent2 + $sum[2]->a + $sum[2]->d;
    $f1 = $sum[0]->f * (1 + $per[0]->i / 100) * (1 + $per[0]->p / 100) * 1.1;
    $f2 = $sum[1]->f * (1 + $per[1]->i / 100) * (1 + $per[1]->p / 100) * 1.1;
    $f3 = $sum[2]->f * (1 + $per[2]->i / 100) * (1 + $per[2]->p / 100) * 1.1;
    $mo1 = $per[0]->m !== '0' ? ($sum[0]->o * $per[0]->m / 100 * $per[0]->p / 100 < 3000) ? 3000 : $sum[0]->o * $per[0]->m / 100 * $per[0]->p / 100 : 0;
    $mo2 = $per[1]->m !== '0' ? ($sum[1]->o * $per[1]->m / 100 * $per[1]->p / 100 < 3000) ? 3000 : $sum[1]->o * $per[1]->m / 100 * $per[1]->p / 100 : 0;
    $mo3 = $per[2]->m !== '0' ? ($sum[2]->o * $per[2]->m / 100 * $per[2]->p / 100 < 3000) ? 3000 : $sum[2]->o * $per[2]->m / 100 * $per[2]->p / 100 : 0;
    $do1 = $rub[0]->d;
    $do2 = $rub[1]->d;
    $do3 = $rub[2]->d;
    $za1 = $rub[0]->z;
    $za2 = $rub[1]->z;
    $za3 = $rub[2]->z;
    $sr1 = $rub[0]->s;
    $sr2 = $rub[1]->s;
    $sr3 = $rub[2]->s;
// Погоные метры расчет
    $pm = (($Allheight + ($Allwidth / $count0)) * 2 / 1000) * $count0;
    $pmW = ($countW * $Allheight) / 1000 * $count0;
    $pmH = ($countH * ($Allwidth / $count0)) / 1000 * $count0;
    $pmA = $pm + $pmW + $pmH;
// >>> служебные переменные
    $count = $count0 - $count1;
    $height = $Allheight;
    $width = $Allwidth;
    $area = $Allheight * $Allwidth / 1000000;
// >>> выборка данных по загруженным картинкам
    if (eGet("fotoNames")) {
        $fotoNames = json_decode(sGET("fotoNames"));
        //d($fotoNames);
        $fotoInfo = array();
        array_push($fotoInfo, $fotoNames[0]);
        array_push($fotoInfo, $fotoNames[1]);
    }
// >>> выборка данных по каркасам
    if (eGet("selectedKarkas")) {
        $selectedKarkas = json_decode(sGET("selectedKarkas"));
        $profilInfo = array();
        $profilInfo[0] = $dbl->query("SELECT * FROM `profile` WHERE `name` LIKE '" . $selectedKarkas[0] . "'")->fetchArray(SQLITE3_ASSOC);
        $profilInfo[1][0] = $selectedKarkas[1];
        $profilInfo[1][1] = $selectedKarkas[2];
        $profilInfo[1][2] = $selectedKarkas[4];
        for ($i = 0; $i < count($selectedKarkas[3]); $i++) {
            $profilInfo[2][$i]['id'] = $selectedKarkas[3][$i][0];
            $profilInfo[2][$i]['type'] = $selectedKarkas[3][$i][1];
            $profilInfo[2][$i]['text'] = $selectedKarkas[3][$i][2];
            $profilInfo[2][$i]['img'] = $selectedKarkas[3][$i][3];
            $profilInfo[2][$i]['price'] = $selectedKarkas[3][$i][4];
            $profilInfo[2][$i]['count'] = $selectedKarkas[3][$i][5];
            $profilInfo[2][$i]['oneprice'] = $dbl->query("SELECT price FROM Supplements WHERE name = '{$selectedKarkas[3][$i][2]}'")->fetchArray(SQLITE3_ASSOC)['price'];
        }
    }
    if (eGet("selectedKarkas2")) {
        $selectedKarkas2 = json_decode(sGET("selectedKarkas2"));
        $profilInfo2 = array();
        $profilInfo2[0] = $dbl->query("SELECT * FROM `profile` WHERE `name` LIKE '" . $selectedKarkas2[0] . "'")->fetchArray(SQLITE3_ASSOC);
        $profilInfo2[1][0] = $selectedKarkas2[1];
        $profilInfo2[1][1] = $selectedKarkas2[2];
        $profilInfo2[1][2] = $selectedKarkas2[4];
        for ($i = 0; $i < count($selectedKarkas2[3]); $i++) {
            $profilInfo2[2][$i]['id'] = $selectedKarkas2[3][$i][0];
            $profilInfo2[2][$i]['type'] = $selectedKarkas2[3][$i][1];
            $profilInfo2[2][$i]['text'] = $selectedKarkas2[3][$i][2];
            $profilInfo2[2][$i]['img'] = $selectedKarkas2[3][$i][3];
            $profilInfo2[2][$i]['price'] = $selectedKarkas2[3][$i][4];
            $profilInfo2[2][$i]['count'] = $selectedKarkas2[3][$i][5];
            $profilInfo2[2][$i]['oneprice'] = $dbl->querySingle("SELECT price FROM Supplements WHERE id = " . $selectedKarkas2[3][$i][0] . "");
        }
    }
    if (eGet("selectedKarkas3")) {
        $selectedKarkas3 = json_decode(sGET("selectedKarkas3"));
        $profilInfo3 = array();
        $profilInfo3[0] = $dbl->query("SELECT * FROM `profile` WHERE `name` LIKE '" . $selectedKarkas3[0] . "'")->fetchArray(SQLITE3_ASSOC);
        $profilInfo3[1][0] = $selectedKarkas3[1];
        $profilInfo3[1][1] = $selectedKarkas3[2];
        $profilInfo3[1][2] = $selectedKarkas3[4];
        for ($i = 0; $i < count($selectedKarkas3[3]); $i++) {
            $profilInfo3[2][$i]['id'] = $selectedKarkas3[3][$i][0];
            $profilInfo3[2][$i]['type'] = $selectedKarkas3[3][$i][1];
            $profilInfo3[2][$i]['text'] = $selectedKarkas3[3][$i][2];
            $profilInfo3[2][$i]['img'] = $selectedKarkas3[3][$i][3];
            $profilInfo3[2][$i]['price'] = $selectedKarkas3[3][$i][4];
            $profilInfo3[2][$i]['count'] = $selectedKarkas3[3][$i][5];
            $profilInfo3[2][$i]['oneprice'] = $dbl->querySingle("SELECT price FROM Supplements WHERE id = " . $selectedKarkas3[3][$i][0] . "");
        }
    }

// >>> выборка данных по фурнитуре
    if (eGet("selectedFurnitura")) {
        $furnituraEl = json_decode(sGET("selectedFurnitura"));
        $furnituraInfo = array();
        $furnituraInfo[0] = array();
        $furnituraInfo[1] = array();
        $furnituraInfo[2] = array();
        $furnituraInfo[3] = array();
        for ($i = 0; $i < count($furnituraEl[0]); $i++) {
            array_push($furnituraInfo[0], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl[0][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo[1], $furnituraEl[1][$i] * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
        }
        for ($i = 0; $i < count($furnituraEl[2]); $i++) {
            array_push($furnituraInfo[2], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl[2][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo[3], $furnituraEl[3][$i] * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
        }
        for ($i = 0; $i < count($arrF0); $i++) {
            if ($arrF0[$i]->price == 0) {
            } else {
                $type = $dbl->query("SELECT castomfurn.id ,castomfurn.accessory FROM castomfurn WHERE name LIKE '{$arrF0[$i]->type}'")->fetchArray(SQLITE3_ASSOC);
                if ($type['accessory'] == 1) {
                    $item = $dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
                    $arr = unserialize($item['other']);
                    array_push($furnituraInfo[2], array('name' => $arr['Название'], 'price' => $arr['Цена'], 'img' => $arr['Картинка'], 'imgBig' => $arr['Картинка'], 'cname' => $arrF0[$i]->type));
                    array_push($furnituraInfo[3], $arrF0[$i]->price * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
                } else {
                    $item = $dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
                    $arr = unserialize($item['other']);
                    array_push($furnituraInfo[0], array('name' => $arr['Название'], 'price' => $arr['Цена'], 'img' => $arr['Картинка'], 'imgBig' => $arr['Картинка'], 'cname' => $arrF0[$i]->type));
                    array_push($furnituraInfo[1], $arrF0[$i]->price * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
                }
            }
        }
    }
    if (eGet("selectedFurnitura2")) {
        $furnituraEl2 = json_decode(sGET("selectedFurnitura2"));
        $furnituraInfo2 = array();
        $furnituraInfo2[0] = array();
        $furnituraInfo2[1] = array();
        $furnituraInfo2[2] = array();
        $furnituraInfo2[3] = array();
        for ($i = 0; $i < count($furnituraEl2[0]); $i++) {
            array_push($furnituraInfo2[0], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl2[0][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo2[1], $furnituraEl2[1][$i] * ($per[1]->i / 100 + 1) * ($per[1]->p / 100 + 1) * 1.1);
        }
        for ($i = 0; $i < count($furnituraEl2[2]); $i++) {
            array_push($furnituraInfo2[2], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl2[2][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo2[3], $furnituraEl2[3][$i] * ($per[1]->i / 100 + 1) * ($per[1]->p / 100 + 1) * 1.1);
        }
    }
// Новая фурнитура
    for ($i = 0; $i < count($arrF1); $i++) {
        if ($arrF1[$i]->price == 0) {
        } else {
            $type = $dbl->query("SELECT castomfurn.id ,castomfurn.accessory FROM castomfurn WHERE name LIKE '{$arrF1[$i]->type}'")->fetchArray(SQLITE3_ASSOC);
            if ($type['accessory'] == 1) {
                $item = $dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
                $arr = unserialize($item['other']);
                array_push($furnituraInfo2[2], array('name' => $arr['Название'], 'price' => $arr['Цена'], 'img' => $arr['Картинка'], 'imgBig' => $arr['Картинка'], 'cname' => $arrF1[$i]->type));
                array_push($furnituraInfo2[3], $arrF1[$i]->price * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
            } else {
                $item = $dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
                $arr = unserialize($item['other']);
                array_push($furnituraInfo2[0], array('name' => $arr['Название'], 'price' => $arr['Цена'], 'img' => $arr['Картинка'], 'imgBig' => $arr['Картинка'], 'cname' => $arrF1[$i]->type));
                array_push($furnituraInfo2[1], $arrF1[$i]->price * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
            }
        }
    }
    if (eGet("selectedFurnitura3")) {
        $furnituraEl3 = json_decode(sGET("selectedFurnitura3"));
        $furnituraInfo3 = array();
        $furnituraInfo3[0] = array();
        $furnituraInfo3[1] = array();
        $furnituraInfo3[2] = array();
        $furnituraInfo3[3] = array();
        for ($i = 0; $i < count($furnituraEl3[0]); $i++) {
            array_push($furnituraInfo3[0], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl3[0][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo3[1], $furnituraEl3[1][$i] * ($per[2]->i / 100 + 1) * ($per[2]->p / 100 + 1) * 1.1);
        }
        for ($i = 0; $i < count($furnituraEl3[2]); $i++) {
            array_push($furnituraInfo3[2], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl3[2][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo3[3], $furnituraEl3[3][$i] * ($per[2]->i / 100 + 1) * ($per[2]->p / 100 + 1) * 1.1);
        }
    }
// Новая фурнитура
    for ($i = 0; $i < count($arrF2); $i++) {
        if ($arrF2[$i]->price == 0) {
        } else {
            $type = $dbl->query("SELECT castomfurn.id ,castomfurn.accessory FROM castomfurn WHERE name LIKE '{$arrF2[$i]->type}'")->fetchArray(SQLITE3_ASSOC);
            if ($type['accessory'] == 1) {
                $item = $dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
                $arr = unserialize($item['other']);
                array_push($furnituraInfo3[2], array('name' => $arr['Название'], 'price' => $arr['Цена'], 'img' => $arr['Картинка'], 'imgBig' => $arr['Картинка'], 'cname' => $arrF2[$i]->type));
                array_push($furnituraInfo3[3], $arrF2[$i]->price * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
            } else {
                $item = $dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
                $arr = unserialize($item['other']);
                array_push($furnituraInfo3[0], array('name' => $arr['Название'], 'price' => $arr['Цена'], 'img' => $arr['Картинка'], 'imgBig' => $arr['Картинка'], 'cname' => $arrF2[$i]->type));
                array_push($furnituraInfo3[1], $arrF2[$i]->price * ($per[0]->i / 100 + 1) * ($per[0]->p / 100 + 1) * 1.1);
            }
        }
    }
    if (eGet("altPi")) {
        $altPij = json_decode(sGET("altPi"));
        $altPi = array();
        for ($i = 0; $i < count($altPij); $i++) {
            array_push($altPi, $dbl->query("SELECT * FROM profile WHERE id = '" . $altPij[$i] . "'")->fetchArray(SQLITE3_ASSOC));
        }
    }
    if (eGet("altPa")) {
        $altPaj = json_decode(sGET("altPa"));
        $altPa = array();
        for ($i = 0; $i < count($altPaj); $i++) {
            array_push($altPa, $dbl->query("SELECT * FROM profile WHERE id = '" . $altPaj[$i] . "'")->fetchArray(SQLITE3_ASSOC));
        }
    }
    if (eGet("altMi")) {
        $altMij = json_decode(sGET("altMi"));
        $altMi = array();
        for ($i = 0; $i < count($altMij); $i++) {
            array_push($altMi, $dbl->query("SELECT * FROM materials WHERE id = '" . $altMij[$i] . "'")->fetchArray(SQLITE3_ASSOC));
        }
    }
    if (eGet("altMa")) {
        $altMaj = json_decode(sGET("altMa"));
        $altMa = array();
        for ($i = 0; $i < count($altMaj); $i++) {
            array_push($altMa, $dbl->query("SELECT * FROM materials WHERE id = '" . $altMaj[$i] . "'")->fetchArray(SQLITE3_ASSOC));
        }
    }
    if (eGet("altFi")) {
        $altFij = json_decode(sGET("altFi"));
        $altFi = array();
        for ($i = 0; $i < count($altFij); $i++) {
            array_push($altFi, $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.id = '" . $altFij[$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
        }
    }
    if (eGet("altFa")) {
        $altFaj = json_decode(sGET("altFa"));
        $altFa = array();
        for ($i = 0; $i < count($altFaj); $i++) {
            array_push($altFa, $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.id = '" . $altFaj[$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
        }
    }
// >>> выборка данных по материалам
    if (eGet("selectedMaterials1")) {
        $selectedMaterials1 = json_decode(sGET("selectedMaterials1"));
        $materialInfo1 = array();
        for ($i = 0; $i < count($selectedMaterials1); $i++) {
            $materialInfo1[$i]['in'] = $dbl->query("SELECT * FROM `materials` WHERE `name`='" . $selectedMaterials1[$i][0] . "'")->fetchArray(SQLITE3_ASSOC);
            $materialInfo1[$i]['pr'] = $selectedMaterials1[$i][1];
            $materialInfo1[$i]['pl'] = $selectedMaterials1[$i][2];
            $materialInfo1[$i]['vy'] = $selectedMaterials1[$i][3];
            $materialInfo1[$i]['sh'] = $selectedMaterials1[$i][4];
            $materialInfo1[$i]['to'] = $selectedMaterials1[$i][5];
            $materialInfo1[$i]['ko'] = $selectedMaterials1[$i][6];
            $materialInfo1[$i]['zk'] = $selectedMaterials1[$i][7];
        }
    }
    if (eGet("selectedMaterials2")) {
        $selectedMaterials2 = json_decode(sGET("selectedMaterials2"));
        $materialInfo2 = array();
        for ($i = 0; $i < count($selectedMaterials2); $i++) {
            $materialInfo2[$i]['in'] = $dbl->query("SELECT * FROM `materials` WHERE `name`='" . $selectedMaterials2[$i][0] . "'")->fetchArray(SQLITE3_ASSOC);
            $materialInfo2[$i]['pr'] = $selectedMaterials2[$i][1];
            $materialInfo2[$i]['pl'] = $selectedMaterials2[$i][2];
            $materialInfo2[$i]['vy'] = $selectedMaterials2[$i][3];
            $materialInfo2[$i]['sh'] = $selectedMaterials2[$i][4];
            $materialInfo2[$i]['to'] = $selectedMaterials2[$i][5];
            $materialInfo2[$i]['ko'] = $selectedMaterials2[$i][6];
        }
    }
    if (eGet("selectedMaterials3")) {
        $selectedMaterials3 = json_decode(sGET("selectedMaterials3"));
        $materialInfo3 = array();
        for ($i = 0; $i < count($selectedMaterials3); $i++) {
            $materialInfo3[$i]['in'] = $dbl->query("SELECT * FROM `materials` WHERE `name`='" . $selectedMaterials3[$i][0] . "'")->fetchArray(SQLITE3_ASSOC);
            $materialInfo3[$i]['pr'] = $selectedMaterials3[$i][1];
            $materialInfo3[$i]['pl'] = $selectedMaterials3[$i][2];
            $materialInfo3[$i]['vy'] = $selectedMaterials3[$i][3];
            $materialInfo3[$i]['sh'] = $selectedMaterials3[$i][4];
            $materialInfo3[$i]['to'] = $selectedMaterials3[$i][5];
            $materialInfo3[$i]['ko'] = $selectedMaterials3[$i][6];
        }
    }
// >>> выборка данных по декору
    if (eGet("selectedDecor")) {
        $selectedDecor = json_decode(sGET("selectedDecor"));
        if (!empty($selectedDecor)) {
            $decorInfo = array();
            $decorInfo[0] = $dbl->query("SELECT *FROM decor WHERE id == '" . $selectedDecor[0] . "'")->fetchArray();
            $decorInfo[1] = $selectedDecor[1];
        }
    }
    if (eGet("selectedDecor2")) {
        $selectedDecor2 = json_decode(sGET("selectedDecor2"));
        if (!empty($selectedDecor2)) {
            $decorInfo2 = array();
            $decorInfo2[0] = $dbl->query("SELECT *FROM decor WHERE id == '" . $selectedDecor[0] . "'")->fetchArray();
            $decorInfo2[1] = $selectedDecor2[1];
        }
    }
    if (eGet("selectedDecor3")) {
        $selectedDecor3 = json_decode(sGET("selectedDecor3"));
        if (!empty($selectedDecor3)) {
            $decorInfo3 = array();
            $decorInfo3[0] = $dbl->query("SELECT *FROM decor WHERE id == '" . $selectedDecor[0] . "'")->fetchArray();
            $decorInfo3[1] = $selectedDecor3[1];
        }
    }
    if (eGet("calcmanager")) {
        $calcmanager = $dbl->query("SELECT * FROM calcmanagers WHERE id = " . sGET("calcmanager"))->fetchArray(SQLITE3_ASSOC);
        $mName = !empty($calcmanager['name']) ? $calcmanager['name'] : "";
        $mMail = !empty($calcmanager['mail']) ? $calcmanager['mail'] : "";
        $mPhone = !empty($calcmanager['phone']) ? $calcmanager['phone'] : "";
    } else {
        $mName = "";
        $mMail = "";
        $mPhone = "";
    }
//Таблица Алюминиевый профиль
    $prisefull0 = ((($count0 * $sum[0]->p) + $sum[0]->a + $sum[0]->d)) * (1 + $per[0]->i / 100) * (1 + $per[0]->p / 100) * 1.1;
    $prisefull1 = ((($count0 * $sum[1]->p) + $sum[1]->a + $sum[1]->d) * (1 + $per[1]->i / 100)) * (1 + $per[1]->p / 100) * 1.1;
    $prisefull2 = ((($count0 * $sum[2]->p) + $sum[2]->a + $sum[2]->d) * (1 + $per[2]->i / 100)) * (1 + $per[2]->p / 100) * 1.1;
    $su1 = $prisefull0 + $m1 + $f1 + $mo1 + $do1 + $za1 + $sr1;
    $su2 = $prisefull1 + $m2 + $f2 + $mo2 + $do2 + $za2 + $sr2;
    $su3 = $prisefull2 + $m3 + $f3 + $mo3 + $do3 + $za3 + $sr3;
//Функция накрутки процентов
    function nPrice($p, $per, $f)
    {
        switch ($f) {
            case 1: {
                return round($p * (1 + $per[0]->i / 100) * (1 + $per[0]->p / 100) * 1.1);
                break;
            }
            case 2: {
                return round($p * (1 + $per[1]->i / 100) * (1 + $per[1]->p / 100) * 1.1);
                break;
            }
            case 3: {
                return round($p * (1 + $per[2]->i / 100) * (1 + $per[2]->p / 100) * 1.1);
                break;
            }
        }
    }

// >>> константы и округления
    $data = array(
        'tip_zagolovok' => $typeFurnituraName,
        'vv' => round($height, 1),
        'shir' => round($width, 1),
        'ploshad' => round($area, 1),
        'summa1' => round($sum[0]->withparam, 1),
        'summa2' => round($sum[1]->withparam, 1),
        'summa3' => round($sum[2]->withparam, 1),
        'srok_izgotovlenia' => "20",
        'poriadok_oplati' => "70%",
        'garantia' => "1",
        'manager' => $mName,
        'manager_phone' => $mPhone,
        'mail' => $mMail
    );
    $area = round($ff['Allwidth'] * $ff['Allheight'] / 1000000, 1);


    $smarty->assign('height', $ff['Allheight']);
    $smarty->assign('width', $ff['Allwidth']);
    $smarty->assign('area', $area);
    $smarty->assign('schema', $ff['schema']);
    $smarty->assign('count', $ff['count']);
    $smarty->assign('date', $date);
    $smarty->assign('prisefull0', number_format($prisefull0, 0, "", " "));
    $smarty->assign('prisefull1', number_format($prisefull1, 0, "", " "));
    $smarty->assign('prisefull2', number_format($prisefull2, 0, "", " "));
    $smarty->assign('date', $date);
    $smarty->assign('typeFurnituraName', $typeFurnituraName);

    try {
        $html = $smarty->fetch('index.tpl');
       echo $html;
        $html2pdf = new HTML2PDF('P', 'A4', 'en', true, 'UTF-8', array(0, 0, 0, 0));
        $html2pdf->addFont("times", "", "times");
        $html2pdf->addFont("freesans", "", "freesans");
        $html2pdf->addFont("freesansb", "", "freesansb");
        $html2pdf->addFont("freesansi", "", "freesansi");
        $html2pdf->addFont("freesansbi", "", "freesansbi");
        $html2pdf->setDefaultFont("freesans");
        $html2pdf->writeHTML($html);
        $html2pdf->Output('commercial_offer.pdf');
    } catch (HTML2PDF_exception $e) {
        echo $e;
        exit;
    }
}