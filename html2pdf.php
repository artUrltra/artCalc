<?php

function d ($input){
    $collapse= false;
    $recursive = function($data, $level=0) use (&$recursive, $collapse) {
        global $argv;

        $isTerminal = isset($argv);

        if (!$isTerminal && $level == 0 && !defined("DUMP_DEBUG_SCRIPT")) {
            define("DUMP_DEBUG_SCRIPT", true);

            echo '<script language="Javascript">function toggleDisplay(id) {';
            echo 'var state = document.getElementById("container"+id).style.display;';
            echo 'document.getElementById("container"+id).style.display = state == "inline" ? "none" : "inline";';
            echo 'document.getElementById("plus"+id).style.display = state == "inline" ? "inline" : "none";';
            echo '}</script>'."\n";
        }

        $type = !is_string($data) && is_callable($data) ? "Callable" : ucfirst(gettype($data));
        $type_data = null;
        $type_color = null;
        $type_length = null;

        switch ($type) {
            case "String":
                $type_color = "green";
                $type_length = strlen($data);
                $type_data = "\"" . htmlentities($data) . "\""; break;

            case "Double":
            case "Float":
                $type = "Float";
                $type_color = "#0099c5";
                $type_length = strlen($data);
                $type_data = htmlentities($data); break;

            case "Integer":
                $type_color = "red";
                $type_length = strlen($data);
                $type_data = htmlentities($data); break;

            case "Boolean":
                $type_color = "#92008d";
                $type_length = strlen($data);
                $type_data = $data ? "TRUE" : "FALSE"; break;

            case "NULL":
                $type_length = 0; break;

            case "Array":
                $type_length = count($data);
        }

        if (in_array($type, array("Object", "Array"))) {
            $notEmpty = false;

            foreach($data as $key => $value) {
                if (!$notEmpty) {
                    $notEmpty = true;

                    if ($isTerminal) {
                        echo $type . ($type_length !== null ? "(" . $type_length . ")" : "")."\n";

                    } else {
                        $id = substr(md5(rand().":".$key.":".$level), 0, 8);

                        echo "<a href=\"javascript:toggleDisplay('". $id ."');\" style=\"text-decoration:none\">";
                        echo "<span style='color:#666666'>" . $type . ($type_length !== null ? "(" . $type_length . ")" : "") . "</span>";
                        echo "</a>";
                        echo "<span id=\"plus". $id ."\" style=\"display: " . ($collapse ? "inline" : "none") . ";\">&nbsp;&#10549;</span>";
                        echo "<div id=\"container". $id ."\" style=\"display: " . ($collapse ? "" : "inline") . ";\">";
                        echo "<br />";
                    }

                    for ($i=0; $i <= $level; $i++) {
                        echo $isTerminal ? "|    " : "<span style='color:black'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                    }

                    echo $isTerminal ? "\n" : "<br />";
                }

                for ($i=0; $i <= $level; $i++) {
                    echo $isTerminal ? "|    " : "<span style='color:black'>|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                }

                echo $isTerminal ? "[" . $key . "] => " : "<span style='color:black'>[" . $key . "]&nbsp;=>&nbsp;</span>";

                call_user_func($recursive, $value, $level+1);
            }

            if ($notEmpty) {
                for ($i=0; $i <= $level; $i++) {
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
$fn = "./db/" . $_GET['n'];
$fh = fopen($fn, "r");
$ff = json_decode(fread($fh, filesize($fn)), true);
fclose($fh);
if ($ff) {
// >>> соединение с БД и служебные функции
    $dbl = new SQLite3("admin/db/DataBaseAdmin.db3");

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

    function fList($s)
    {
        return str_replace(array("-", "•"), array("<br />-", "<br />•"), $s);
    }

// >>> тип фурнитуры
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
    $altPage = 10;

// >>> прочие GET параметры
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
    $arrF0 =json_decode(sGet("arrF0"));
    $arrF1 =json_decode(sGet("arrF1"));
    $arrF2 =json_decode(sGet("arrF2"));
    $arrayNamber =json_decode(sGet("arrayNamber"));
    $contacts =json_decode(sGet("contacts"));
    //d($arrayNamber);

    $p1t = $count0 * (1 + $per[0]->i / 100) * (1 + $per[0]->p / 100) * 1.1;
    $p2t = $count0 * (1 + $per[1]->i / 100) * (1 + $per[1]->p / 100) * 1.1;
    $p3t = $count0 * (1 + $per[2]->i / 100) * (1 + $per[2]->p / 100) * 1.1;

    $procent0 = ($rub[0]->p+$rub[0]->i)/2;
    $procent1 = ($rub[1]->p+$rub[1]->i)/2;
    $procent2 = ($rub[2]->p+$rub[2]->i)/2;

    //Таблица Заполнение
    $m1 =  $sum[0]->m*(1+$per[0]->i/100)*(1+$per[0]->p/100)*1.1;
    $m2 = $sum[1]->m*(1+$per[1]->i/100)*(1+$per[1]->p/100)*1.1;
    $m3 =  $sum[2]->m*(1+$per[2]->i/100)*(1+$per[2]->p/100)*1.1;

    $p1 = ($sum[0]->p *$count0)+$procent0 +$sum[0]->a + $sum[0]->d ;
    $p2 = ($sum[1]->p *$count0)+$procent1 + $sum[1]->a + $sum[1]->d ;
    $p3 = ($sum[2]->p *$count0)+$procent2+$sum[2]->a + $sum[2]->d ;

    $f1 = $sum[0]->f*(1+$per[0]->i/100)*(1+$per[0]->p/100)*1.1;;
    $f2 = $sum[1]->f*(1+$per[1]->i/100)*(1+$per[1]->p/100)*1.1;;
    $f3 = $sum[2]->f*(1+$per[2]->i/100)*(1+$per[2]->p/100)*1.1;;

    $mo1 = ($sum[0]->o * $per[0]->m / 100 * $per[0]->p / 100 < 3000) ? 3000 : $sum[0]->o * $per[0]->m / 100 * $per[0]->p / 100;
    $mo2 = ($sum[1]->o * $per[1]->m / 100 * $per[1]->p / 100 < 3000) ? 3000 : $sum[1]->o * $per[1]->m / 100 * $per[1]->p / 100;
    $mo3 = ($sum[2]->o * $per[2]->m / 100 * $per[2]->p / 100 < 3000) ? 3000 : $sum[2]->o * $per[2]->m / 100 * $per[2]->p / 100;

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

    $pm =(($Allheight+($Allwidth/$count0))*2/1000)*$count0;
    $pmW =($countW*$Allheight)/1000*$count0;
    $pmH =($countH*($Allwidth/$count0))/1000*$count0;

    $pmA =$pm+$pmW+$pmH;

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

            //$profilInfo[2][$i] = $dbl->query("SELECT Supplements.name as name,Supplements.img as img,Supplements.price as price,SupplementsM.name as mname,SupplementsM.type as mtype,SupplementsM.typeprice as mtypeprice FROM Supplements INNER JOIN SupplementsM WHERE Supplements.patern_id = SupplementsM.id AND Supplements.id = ".$selectedKarkas[3][$i][0]."")->fetchArray(SQLITE3_ASSOC);
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
            //$profilInfo2[2][$i] = $dbl->query("SELECT Supplements.name as name,Supplements.img as img,Supplements.price as price,SupplementsM.name as mname,SupplementsM.type as mtype,SupplementsM.typeprice as mtypeprice FROM Supplements INNER JOIN SupplementsM WHERE Supplements.patern_id = SupplementsM.id AND Supplements.id = ".$selectedKarkas2[3][$i][0]."")->fetchArray(SQLITE3_ASSOC);
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
            //$profilInfo3[2][$i] = $dbl->query("SELECT Supplements.name as name,Supplements.img as img,Supplements.price as price,SupplementsM.name as mname,SupplementsM.type as mtype,SupplementsM.typeprice as mtypeprice FROM Supplements INNER JOIN SupplementsM WHERE Supplements.patern_id = SupplementsM.id AND Supplements.id = ".$selectedKarkas3[3][$i][0]."")->fetchArray(SQLITE3_ASSOC);
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
            array_push($furnituraInfo[1], $furnituraEl[1][$i]*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
        }



        for ($i = 0; $i < count($furnituraEl[2]); $i++) {
            array_push($furnituraInfo[2], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl[2][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo[3], $furnituraEl[3][$i]*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
        }
        for ($i=0; $i <count($arrF0) ; $i++) {
          if($arrF0[$i]->price ==0){}else {
          $type = $dbl->query("SELECT castomfurn.id ,castomfurn.accessory FROM castomfurn WHERE name LIKE '{$arrF0[$i]->type}'")->fetchArray(SQLITE3_ASSOC);
          if($type['accessory'] ==1){
            $item =$dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
            $arr =unserialize($item['other']);

            array_push($furnituraInfo[2],array('name'=>$arr['Название'],'price'=>$arr['Цена'],'img'=>$arr['Картинка'],'imgBig'=>$arr['Картинка'],'cname'=>$arrF0[$i]->type));
            array_push($furnituraInfo[3], $arrF0[$i]->price*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
          }else {
        $item =$dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
        $arr =unserialize($item['other']);

        array_push($furnituraInfo[0],array('name'=>$arr['Название'],'price'=>$arr['Цена'],'img'=>$arr['Картинка'],'imgBig'=>$arr['Картинка'],'cname'=>$arrF0[$i]->type));
        array_push($furnituraInfo[1], $arrF0[$i]->price*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
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
            array_push($furnituraInfo2[1], $furnituraEl2[1][$i]*($per[1]->i/100+1) * ($per[1]->p/100+1) *1.1);
        }
        for ($i = 0; $i < count($furnituraEl2[2]); $i++) {
            array_push($furnituraInfo2[2], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl2[2][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo2[3], $furnituraEl2[3][$i]*($per[1]->i/100+1) * ($per[1]->p/100+1) *1.1);
        }
    }

// Новая фурнитура
for ($i=0; $i <count($arrF1) ; $i++) {
  if($arrF1[$i]->price ==0){}else {
  $type = $dbl->query("SELECT castomfurn.id ,castomfurn.accessory FROM castomfurn WHERE name LIKE '{$arrF1[$i]->type}'")->fetchArray(SQLITE3_ASSOC);
  if($type['accessory'] ==1){
    $item =$dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
    $arr =unserialize($item['other']);

    array_push($furnituraInfo2[2],array('name'=>$arr['Название'],'price'=>$arr['Цена'],'img'=>$arr['Картинка'],'imgBig'=>$arr['Картинка'],'cname'=>$arrF1[$i]->type));
    array_push($furnituraInfo2[3], $arrF1[$i]->price*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
  }else {
$item =$dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
$arr =unserialize($item['other']);

array_push($furnituraInfo2[0],array('name'=>$arr['Название'],'price'=>$arr['Цена'],'img'=>$arr['Картинка'],'imgBig'=>$arr['Картинка'],'cname'=>$arrF1[$i]->type));
array_push($furnituraInfo2[1], $arrF1[$i]->price*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
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
            array_push($furnituraInfo3[1], $furnituraEl3[1][$i]*($per[2]->i/100+1) * ($per[2]->p/100+1) *1.1);
        }
        for ($i = 0; $i < count($furnituraEl3[2]); $i++) {
            array_push($furnituraInfo3[2], $dbl->query("SELECT * FROM furnitura INNER JOIN furnituracat WHERE furnitura.name LIKE '" . $furnituraEl3[2][$i] . "' AND furnitura.cat = furnituracat.cid")->fetchArray(SQLITE3_ASSOC));
            array_push($furnituraInfo3[3], $furnituraEl3[3][$i]*($per[2]->i/100+1) * ($per[2]->p/100+1) *1.1);
        }
    }
    // Новая фурнитура
    for ($i=0; $i <count($arrF2) ; $i++) {
      if($arrF2[$i]->price ==0){}else {
      $type = $dbl->query("SELECT castomfurn.id ,castomfurn.accessory FROM castomfurn WHERE name LIKE '{$arrF2[$i]->type}'")->fetchArray(SQLITE3_ASSOC);
      if($type['accessory'] ==1){
        $item =$dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
        $arr =unserialize($item['other']);

        array_push($furnituraInfo3[2],array('name'=>$arr['Название'],'price'=>$arr['Цена'],'img'=>$arr['Картинка'],'imgBig'=>$arr['Картинка'],'cname'=>$arrF2[$i]->type));
        array_push($furnituraInfo3[3], $arrF2[$i]->price*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
      }else {
    $item =$dbl->query("SELECT * FROM itemsnewfurn WHERE parent_id ={$type['id']}")->fetchArray(SQLITE3_ASSOC);
    $arr =unserialize($item['other']);

    array_push($furnituraInfo3[0],array('name'=>$arr['Название'],'price'=>$arr['Цена'],'img'=>$arr['Картинка'],'imgBig'=>$arr['Картинка'],'cname'=>$arrF2[$i]->type));
    array_push($furnituraInfo3[1], $arrF2[$i]->price*($per[0]->i/100+1) * ($per[0]->p/100+1) *1.1);
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
            $decorInfo[0] = $dbl->query("SELECT *FROM decor WHERE id == '".$selectedDecor[0]."'")->fetchArray();
            $decorInfo[1] = $selectedDecor[1];
        }
    }
    if (eGet("selectedDecor2")) {
        $selectedDecor2 = json_decode(sGET("selectedDecor2"));
        if (!empty($selectedDecor2)) {
            $decorInfo2 = array();
            $decorInfo2[0] = $dbl->query("SELECT *FROM decor WHERE id == '".$selectedDecor[0]."'")->fetchArray();
            $decorInfo2[1] = $selectedDecor2[1];
        }
    }
    if (eGet("selectedDecor3")) {
        $selectedDecor3 = json_decode(sGET("selectedDecor3"));
        if (!empty($selectedDecor3)) {
            $decorInfo3 = array();
            $decorInfo3[0] = $dbl->query("SELECT *FROM decor WHERE id == '".$selectedDecor[0]."'")->fetchArray();
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
    $prisefull0 = ((($count0*$sum[0]->p)+$sum[0]->a+$sum[0]->d))*(1+$per[0]->i/100)*(1+$per[0]->p/100)*1.1;
    $prisefull1 =( (($count0*$sum[1]->p)+$sum[1]->a+$sum[1]->d)*(1+$per[1]->i/100))*(1+$per[1]->p/100)*1.1;
    $prisefull2=( (($count0*$sum[2]->p)+$sum[2]->a+$sum[2]->d)*(1+$per[2]->i/100))*(1+$per[2]->p/100)*1.1;

    $su1 = $prisefull0 + $m1 + $f1 + $mo1 + $do1 + $za1 + $sr1;
    $su2 = $prisefull1 + $m2 + $f2 + $mo2 + $do2 + $za2 + $sr2;
    $su3 = $prisefull2 + $m3 + $f3 + $mo3 + $do3 + $za3 + $sr3;
    //Функция накрутки процентов
    function nPrice($p,$per,$f){
        switch ($f){
            case 1:{
                return  round($p *(1+$per[0]->i/100)*(1+$per[0]->p/100)*1.1);
                break;
            }
            case 2:{
                return  round($p *(1+$per[1]->i/100)*(1+$per[1]->p/100)*1.1);
                break;
            }
            case 3:{
                return  round($p *(1+$per[2]->i/100)*(1+$per[2]->p/100)*1.1);
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
    ob_start();
    ?>

    <!-- >>> STYLE -->
    <style>
        * {
            font-size: 13px;
        }

        p {
            color: #7e7c7e;
            margin-top: 0px;
            margin-bottom: 0px;
        }

        .black {
            color: black;
        }

        .noMargin {
            margin-bottom: 0px;
            margin-top: 0px;
        }

        .margin-5 {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        h3 {
            color: #7e7c7e;
            font-size: 22px;
            font-weight: normal;
        }

        td {
            color: #7e7c7e;
        }

        .pdfnormal {
            font-family: freesans;
        }

        .pdfitalic {
            font-family: freesansi;
        }

        .pdfbold {
            font-family: freesansb;
            color: #000000;
        }

        .pdfbolditalic {
            font-family: freesansbi;
            color: #000000;
        }

        .pdfboldnumber {
            vertical-align: bottom;
        }

        .pdfboldunderline {
            text-decoration: underline;
        }

        .pdflink {
            color: #0002bf;
            font-size: 16px;
            text-decoration: none;
        }

        .pdflinkitalic {
            color: #8081ff;
            text-align: center;
            text-decoration: underline;
            font-size: 16px;
        }

        .pdfsmall {
            font-size: 11px;
        }

        .pdfooter {
            position: absolute;
            bottom: 0;
        }

        .pdfpagenumber {
            font-size: 55px;
            color: #ffffff;
            position: absolute;
            top: 5px;
            left: 22px;
        }

        .pdfpagenumber2 {
            font-size: 55px;
            color: #ffffff;
            position: absolute;
            top: 5px;
            left: 15px;
        }

        .pdfpagenumberarea {
            position: relative;
            background-color: #b2b2b2;
            border-bottom-left-radius: 95px;
            width: 90px;
            height: 90px;
        }

        .pdfboldred {
            color: darkred;
            font-size: 18px;
        }

        .pdfboldgray {
            color: gray;
            font-size: 18px;
        }

        .tabletext11 {
            width: 46%;
            font-size:  100%;
            border: 1px solid #999999;
            text-align: left;
            background-color: white;
            padding-left: 15px;
        }

        .tabletext12 {
            width: 18%;
            font-size: 100%;
            border: 1px solid #999999;
            text-align: center;
            background-color: white;
        }

        .tabletext13 {
            width: 18%;
            font-size:  100%;
            border: 1px solid #999999;
            text-align: center;
            background-color: #e3e3e3;
        }

        .pdfpageh1 {
            text-align: center;
            font-size: 22px;
            color: #666666;
            padding-top: 15px;
        }
        .contacts{
          width:16%;
          font-size: 100%;
          vertical-align: text-bottom;
          color: black;
          text-align:justify;
          margin-top: 4px;
        }
    </style>

    <!-- СВОД -->
    <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
        <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                   class="pdflink"><?= $data['mail'] ?></a></td>
                    <td style='width:56%;'></td>
                    <td class="pdfbold" style='width:14%;text-align:center;font-size:15px;color:#666666;'><br/>от <span
                            class="pdfboldunderline" style="color:#666666;font-size:15px;"><?= $date ?></span>&nbsp;&nbsp;
                    </td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p class="pdfpageh1 pdfbold" style="padding-top:-77px;font-size:20px;">Коммерческое предложение <br/>
                №<?= $orderNumber ?> <br/> на изготовление <?= $data['tip_zagolovok'] ?></p>
            <table align="center" style="width:100%;color:#666666;text-align:center;">
                <tr>
                    <td class="pdfnormal pdfsmall">Ширина</td>
                    <td class="pdfbold pdfboldnumber"><?= $data["shir"] ?></td>
                    <td class="pdfnormal pdfsmall">мм.</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pdfnormal pdfsmall">Высота</td>
                    <td class="pdfbold pdfboldnumber"><?= $data["vv"] ?></td>
                    <td class="pdfnormal pdfsmall">мм.</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pdfnormal pdfsmall">Площадь</td>
                    <td class="pdfbold pdfboldnumber"><?= $data['ploshad'] ?></td>
                    <td class="pdfnormal pdfsmall">м<sup>2</sup>.</td>
                </tr>
            </table>
            <br/>
            <!--Картинка №1-->
            <?php if ($fotoInfo[0] != "" && @fopen($fotoInfo[0], "r")) {
                $img_size = getimagesize($fotoInfo[0]);
                if($img_size[0]>$img_size[1]){
                    ?>
                    <div style="width: 400px; height: 260px; margin-left: 180px; position: relative;">
                        <img src="<?= $fotoInfo[0] ?>"
                             style="position: absolute;top: 0;left:0; height: 100%; width: 100%;">
                    </div>
                <?php }elseif($img_size[0]<$img_size[1]){
                    ?>
                    <div style="width: 400px; height: 260px; margin-left: 180px; position: relative;">
                        <img src="<?= $fotoInfo[0] ?>"
                             style="position: absolute;top: 0;left:25%; height: 100%; width: 50%;">
                    </div>
                <?php }
            } ?>
            <!--Картинка №2-->
            <?php if ($fotoInfo[1] != "" && @fopen($fotoInfo[1], "r")) {
                $img_size = getimagesize($fotoInfo[1]);
                if($img_size[0]>$img_size[1]){
                    ?>
                    <div style="width: 400px; height: 250px; margin-left: 180px; position: relative;">
                        <img src="<?= $fotoInfo[1] ?>"
                             style="position: absolute;top: 0;left:0; height: 100%; width: 100%;">
                    </div>
                <?php }elseif($img_size[0]<$img_size[1]){
                    ?>
                    <div style="width: 400px; height: 250px; margin-left: 180px; position: relative;">
                        <img src="<?= $fotoInfo[1] ?>"
                             style="position: absolute;top: 0;left:25%; height: 100%; width: 50%;">
                    </div>
                <?php }
            } ?>
            <br/>
            <div>
                <p style="text-align:center;color:#000000;font-size:32px;margin-bottom:10px;">Варианты комплектации</p>
                <table
                    style="width:99%;vertical-align:middle;margin:auto;border:1px solid #999999;border-collapse:collapse;font-size:14px;">
                    <tr>
                        <td class="pdfbold"
                            style="width:46%;border:1px solid #999999;text-align:center;color:#4e4f86;font-size:18px;">
                            Варианты комплектации
                        </td>
                        <td class="tabletext12" style="color:#000140;">Оптимальный</td>
                        <td class="tabletext13" style="color:#6763b1;">Эконом</td>
                        <td class="tabletext13" style="color:#6763b1;">Премиум</td>
                    </tr>
                    <tr>
                        <td class="tabletext11">Профиль</td>
                        <td class="tabletext12">
                            <?= number_format($prisefull0, 0, "", " ") ?>
                            р./<?=$profilInfo[0]["name"] ?>
                        </td>
                        <td class="tabletext13">
                            <?= number_format($prisefull1, 0, "", " ") ?>
                            р./<?=$profilInfo2[0]["name"] ?>
                        </td>
                        <td class="tabletext13">
                            <?= number_format($prisefull2, 0, "", " ") ?>
                            р./<?=$profilInfo3[0]["name"] ?>
                        </td>
                    </tr>
                      <?php  if ($m1 != 0 && $m2 != 0 && $m3 != 0) {?>
                    <tr>
                        <td class="tabletext11">Заполнение</td>
                        <td class="tabletext12"><?= number_format($m1, 0, "", " ") ?> р./<?=$materialInfo1[0]['in']["name"]?></td>
                        <td class="tabletext13"><?= number_format($m2, 0, "", " ") ?> р./<?=$materialInfo2[0]['in']["name"]?></td>
                        <td class="tabletext13"><?= number_format($m3, 0, "", " ") ?> р./<?=$materialInfo3[0]['in']["name"]?></td>
                    </tr>
                    <?php } ?>
                    <?php
                    if ($f1 == 0 && $f2 == 0 && $f3 == 0) {
                    } else {
                        echo '<tr><td class="tabletext11">Фурнитура</td>' .
                            '<td class="tabletext12">' . number_format($f1, 0, "", " ") . ' р./'.$furnituraInfo[0][0]['name'].'</td>' .
                            '<td class="tabletext13">' . number_format($f2, 0, "", " ") . ' р./'.$furnituraInfo2[0][0]['name'].'</td>' .
                            '<td class="tabletext13">' . number_format($f3, 0, "", " ") . ' р./'.$furnituraInfo3[0][0]['name'].'</td>' .
                            '</tr>';
                    }
                    ?>
                    <?php
                    if ($mo1 == 0 && $mo2 == 0 && $mo3 == 0) {
                    } else {?>
                    <tr>
                        <td class="tabletext11">Монтаж</td>
                        <td class="tabletext12"><?= number_format($mo1, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($mo2, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($mo3, 0, "", " ") ?> р.</td>
                    </tr>
                  <?php } ?>
                  <?php  if ($do1 != 0 && $do2 != 0 && $do3 != 0) {?>
                    <tr>
                        <td class="tabletext11">Доставка</td>
                        <td class="tabletext12"><?= number_format($do1, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($do2, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($do3, 0, "", " ") ?> р.</td>
                    </tr>
                      <?php } ?>
                        <?php  if ($za1 != 0 && $za2 != 0 && $za3 != 0) {?>
                    <tr>
                        <td class="tabletext11">Замер</td>
                        <td class="tabletext12"><?= number_format($za1, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($za2, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($za3, 0, "", " ") ?> р.</td>
                    </tr>
                      <?php } ?>
                        <?php  if ($sr1 != 0 && $sr2 != 0 && $sr3 != 0) {?>
                    <tr>
                        <td class="tabletext11">Срочность</td>
                        <td class="tabletext12"><?= number_format($sr1, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($sr2, 0, "", " ") ?> р.</td>
                        <td class="tabletext13"><?= number_format($sr3, 0, "", " ") ?> р.</td>
                    </tr>
                      <?php } ?>
                    <tr>
                        <td class="tabletext11">
                            <span class="pdfbold pdfboldred">Итого за 1 комплект:</span>
                            <p class="pdfitalic pdflinkitalic"
                               style="text-align:right;text-decoration:none;margin-top:5px;">Детально на&nbsp;&nbsp;&nbsp;</p>
                        </td>
                        <td class="tabletext12">
                            <span class="pdfbold pdfboldred">
                                <!-- <?= number_format(round($su1, 0), 0, "", " ") ?> -->
                                 <?= number_format(round($priceFull1, 0), 0, "", " ") ?>
                               <!--<? echo $priceFull1 ?>-->
                                <?/*= number_format(round($priceFull1 / $setsNumber, 0), 0, "", " ") */?>
                                р.
                            </span>
                            <p class="pdfitalic pdflinkitalic" style="margin-top:5px;">Стр. 2</p>
                        </td>
                        <td class="tabletext13">
                            <span class="pdfbold pdfboldgray">
                                <!--<?= number_format(round($su2 , 0), 0, "", " ") ?>-->
                                <?= number_format(round($priceFull2, 0), 0, "", " ") ?>
                              <?/*= number_format(round($priceFull2 / $setsNumber, 0), 0, "", " ") */?>
                                р.</span>
                            <p class="pdfitalic pdflinkitalic" style="margin-top:5px;">Стр. 3</p>
                        </td>
                        <td class="tabletext13">
                            <span class="pdfbold pdfboldgray">
                                <!--<?= number_format(round($su3, 0), 0, "", " ") ?>-->
                                <?= number_format(round($priceFull3, 0), 0, "", " ") ?>
                             <?/*= number_format(round($priceFull3 / $setsNumber, 0), 0, "", " ") */?>
                                р.</span>
                            <p class="pdfitalic pdflinkitalic" style="margin-top:5px;">Стр. 4</p>
                        </td>
                    </tr>
                    <?php if ($setsNumber > 1) : ?>
                        <tr>
                            <td class="tabletext11"><span
                                    class="pdfbold pdfboldred">Итого за <?= $setsNumber ?> <?= $setsNumber < 5 ? "комплектa" : "комплектов" ?>
                                    :</span></td>
                            <td class="tabletext12"><span
                                    class="pdfbold pdfboldred"><?= number_format($data["summa1"], 0, "", " ") ?>
                                    р.</span></td>
                            <td class="tabletext13"><span class="pdfbold pdfboldgray"
                                                          style="color:gray;font-size:16px;"><?= number_format(round($data["summa2"], 0), 0, "", " ") ?>
                                    р.</span></td>
                            <td class="tabletext13"><span class="pdfbold pdfboldgray"
                                                          style="color:gray;font-size:16px;"><?= number_format(round($data["summa3"], 0), 0, "", " ") ?>
                                    р.</span></td>
                        </tr>
                    <?php endif; ?>
                </table>
                <p class="pdfitalic pdflinkitalic" style="font-size:20px;margin-bottom:5px;">Альтернативные предложения
                    на стр. <?= $altPage ?></p>
            </div>
            <div class="pdfooter">
                <p style="text-align:center;font-size:15px;">Условия работы: <span class="pdfbolditalic"
                                                                                   style="color:#666666;font-size:15px;">Сборка на месте установки. Работы производятся в нерабочее время.</span>
                </p>
                <table style="width:100%;text-align:center;">
                    <tr>
                        <td style="width:38%;font-size:15px;">Срок изготовления <span class="pdfbold"
                                                                                      style="font-size:15px;color:#666666;"><?= $data["srok_izgotovlenia"] ?></span>
                            рабочих дней.
                        </td>
                        <td style="width:38%;font-size:15px;">Порядок оплаты <span class="pdfbold"
                                                                                   style="font-size:15px;color:#666666;"><?= $data["poriadok_oplati"] ?></span>
                            предоплата.
                        </td>
                        <td style="width:24%;font-size:15px;">Гарантия <span class="pdfbold"
                                                                             style="font-size:15px;color:#666666;"><?= $data["garantia"] ?></span>
                            год.
                        </td>
                    </tr>
                </table>
                <p style="text-align:center;font-size:15px;" class="pdfitalic">
                    Данное коммерческое предложение действительно в течение 10 календарных дней.<br/>
                    Коммерческое предложение
                    подготовил менеджер : <?= $data["manager"] ?> <?= $data["manager_phone"] ?> <?= $data["mail"] ?><br/>
                </p>
            </div>
        </div>
    </page>

    <!-- ПРОФИЛЬ -->
    <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
        <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                   class="pdflink"><?= $data['mail'] ?></a></td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p class="pdfpageh1" style="padding-top:-77px;">Комплектация для<br/>коммерческого
                предложения<br/>№<?= $orderNumber ?><br/><span class="pdfbold" style="font-size:20px;color:#666666;">(оптимальная)</span>
            </p>
            <div style='width:100%;max-width:100%;height:80%;background-color:#e5e5e5;position:absolute;bottom:15px;'>
                <div style="background-color:#e5e5e5;">
                    <p style="color:#666666;text-align:center;font-size:21px;margin-top:10px;margin-bottom:10px;">
                        Профиль</p>
                    <table style="width:100%;">
                        <tr>
                            <td style="width:50%;">
                                <p style="text-align:center;">
                                    <?php if ($profilInfo[0]['img'] != "" && @fopen("admin/" . $profilInfo[0]['img'], "r")) { ?>
                                        <img src='admin/<?= $profilInfo[0]['img'] ?>' style="height:350px;width:350px;">
                                    <?php } else { ?>
                                        <img src='img/notselected.png' style="height:100px;width:100px;">
                                    <?php } ?>
                                </p>
                            </td>
                            <td style="width:49%;">
                                <table style="width:100%;border:1px solid #999999;border-collapse:collapse;"
                                       cellspacing="0">
                                    <tr>
                                        <td style="width:55%;text-align:left;border:1px solid #999999;">
                                            <?= $profilInfo[0]["name"] ?> (каркас)
                                        </td>
                                        <td style="width:20%;text-align:center;border:1px solid #999999;">
                                            <?=  $pm  ?> м.п.
                                        </td>
                                        <td style="width:25%;text-align:center;border:1px solid #999999;">
                                            <?=  nPrice($count0*$profilInfo[1][0],$per,1)  ?> руб.
                                        </td>
                                    </tr>
                                    <?php if ($pmh[0]->p != 0) { ?>
                                        <tr>
                                            <td style="width:55%;text-align:left;border:1px solid #999999;">
                                                <?= $pmh[0]->n ?> (горызонтальные перемычки)
                                            </td>
                                            <td style="width:20%;text-align:center;border:1px solid #999999;">
                                                <?= $pmH ?> м.п.
                                            </td>
                                            <!--XXXXX-->
                                            <td style="width:25%;text-align:center;border:1px solid #999999;">
                                                <?=   nPrice($count0*$pmh[0]->p,$per,1)?> руб.
                                            </td>
                                        </tr>
                                    <?php } ?>
                                    <?php if ($pmv[0]->p != 0) { ?>
                                        <tr>
                                            <td style="width:55%;text-align:left;border:1px solid #999999;">
                                                <?= $pmv[0]->n ?> (вертикальные перемычки)
                                            </td>
                                            <td style="width:20%;text-align:center;border:1px solid #999999;">
                                                <?= $pmW ?> м.п.
                                            </td>
                                            <td style="width:25%;text-align:center;border:1px solid #999999;">
                                                <?=  nPrice($count0*$pmv[0]->p,$per,1) ?> руб.
                                            </td>
                                        </tr>
                                    <?php } ?>
                                </table>
                                <p style="text-align:right;padding-top:55px;">
                                    <span
                                        style="color:black;font-size:18px;"><?= number_format(nPrice($count0*$profilInfo[1][0]+$count0*$pmv[0]->p+$count0*$pmh[0]->p,$per,1), 0, "", " ") ?>
                                        руб</span><br/>
                                    <span class="pdfitalic"
                                          style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage ?></span>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <br/>
                <div style="background-color:#e5e5e5;">
                    <table style="width:100%;">
                        <tr>
                            <td style='width:50%;'>
                                <span style="color:black;text-align:left;font-size:18px;">Характеристики</span><br/>
                                <span style="color:black;"
                                      class="pdfitalic"><?= !empty($profilInfo[0]['characteristics']) ? fList($profilInfo[0]['characteristics']) : "noDB" ?></span>
                            </td>
                            <td style='width:50%;'>
                                <span style="color:black;text-align:left;font-size:18px;">Описание</span><br/>
                                <span
                                    style="color:black;"><?= !empty($profilInfo[0]['description']) ? $profilInfo[0]['description'] : "noDB" ?></span><br/><br/>
                                <span style="color:black;text-align:left;font-size:18px;">Преимущества</span><br/>
                                <span
                                    style="color:black;"><?= !empty($profilInfo[0]['benefits']) ? fList($profilInfo[0]['benefits']) : "noDB" ?></span>
                            </td>
                        </tr>
                    </table>
                </div>
              </div>
          </div>
      </page>


                <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
                    <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
                        <img style='width: 100%;height: 70px;' src='img/shapka.png'>
                        <table style="width: 100%;margin-top: -3px;">
                            <tr>
                                <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                               class="pdflink"><?= $data['mail'] ?></a></td>
                                <td style='width:56%;'></td>
                                <td class="pdfbold" style='width:14%;text-align:center;font-size:15px;'></td>
                                <td style='width:12%;'>
                                    <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                                </td>
                            </tr>
                        </table>
                    <p style="color:#666666;text-align:center;font-size:20px;margin-top:0px;margin-bottom:0px;">
                        Дополнения</p>
                    <table style="width:100%;text-align:center;">
                        <tr>
                            <?php

                            for ($j = 0; $j < count($profilInfo[2]); $j++) {

                                if ($j % 2 == 0) echo "</tr><tr>"; ?>

                                <td style="width:50%;border:2px solid #999999;background-color:white;">
                                    <table style="width:100%;">
                                        <tr>
                                            <td style="width:39%;">
                                                <p style="text-align:center;"><img
                                                        src="<?= $profilInfo[2][$j]['img'] != "" && @fopen($profilInfo[2][$j]['img'], "r") ? $profilInfo[2][$j]['img'] : "img/notselected.png" ?>"
                                                        style="height:120px;width:120px;"></p>
                                            </td>
                                            <td style="width:59%;">
                                                <p style="margin-bottom:5px;margin-top:5px;color:black;font-size:14px;"><?= $profilInfo[2][$j]['type'] ?></p>
                                                <p class="pdfbold"
                                                   style="margin-top:0px;color:black;font-size:100%;text-transform:uppercase;"><?= $profilInfo[2][$j]['text'] ?></p>
                                                <p style="margin-bottom:0px;margin-top:0px;color:black;text-align:right;">

                                                     <?php

                                                      if ($profilInfo[2][$j]['count'] > 0) {
                                                     echo "Цена за ед. ".nPrice($profilInfo[2][$j]['oneprice'],$per,1);
                                                    }else {
                                                    echo "Цена за п/м. ".nPrice($profilInfo[2][$j]['oneprice'],$per,1);
                                                    }  ?>
                                                    руб</p>
                                                <p style="margin-bottom:0px;margin-top:0px;text-align:right;font-size:18px;">
                                                    <?php if ($profilInfo[2][$j]['count'] > 0) echo $count0*$profilInfo[2][$j]['count'] . " шт."; else echo round((nPrice($profilInfo[2][$j]['price'],$per,2)/nPrice($profilInfo[2][$j]['oneprice'],$per,1)),PHP_ROUND_HALF_UP) . " п/м."; ?>
                                                    &nbsp;&nbsp;<span class="pdfbold"
                                                                      style="color:#666666;font-size:18px;"><?= number_format(nPrice($profilInfo[2][$j]['price'],$per,2), 0, "", " ") ?></span>
                                                    руб
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                            <?php } ?>
                        </tr>
                    </table>
        </div>
    </page>

    <?php
    //Флаг
    $a = !in_array($typeFurnitura, array(0, 3, 4)) && $furnituraInfo[0][0]["name"];
    $b = false;
    for ($i = 0; $i < count($furnituraInfo[0]); $i++) {
        if ($furnituraInfo[0][$i]['name']) $b = true;
    }
    $c = in_array($typeFurnitura, array(0, 3, 4)) && $b;
    if ($a || $c) {
        ?>
        <!-- ФУРНИТУРА МЕХАНИЗМЫ 1 -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
                <img style='width: 100%;height: 70px;' src='img/shapka.png'>
                <table style="width: 100%;margin-top: -3px;">
                    <tr>
                        <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                       class="pdflink"><?= $data['mail'] ?></a></td>
                        <td style='width:56%;'></td>
                        <td class="pdfbold" style='width:14%;text-align:center;font-size:15px;'></td>
                        <td style='width:12%;'>
                            <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                        </td>
                    </tr>
                </table>
                <p class="pdfpageh1" style="padding-top:-65px;font-size:26px;margin-top:0px;margin-bottom:0px;">
                    Фурнитура</p>
                <?php if (!in_array($typeFurnitura, array(0, 3, 4))) { ?>
                    <?php if ($furnituraInfo[0][0]["name"]) { ?>
                        <p style="color:#666666;text-align:center;font-size:16px;"
                           class="noMargin"><?= $furnituraInfo[0][0]["name"] ?></p>
                    <?php } ?>
                <?php } ?>
                <br/>
                <?php if (!in_array($typeFurnitura, array(0, 3, 4))) { ?>
                    <?php if ($furnituraInfo[0][0]["name"]) { ?>
                        <table style="width: 100%;">
                            <tr>
                                <td style='width: 49%;text-align:center;'><img
                                        src='<?= $furnituraInfo[0][0]["img"] != "" && @fopen("admin/" . $furnituraInfo[0][0]["img"], "r") ? "admin/" . $furnituraInfo[0][0]["img"] : "img/notselected.png" ?>'
                                        style="height:200px;"></td>
                                <td style='width: 49%;'>
                                    <?php if (count($furnituraInfo[0]) > 0) { ?>
                                        <table style="width:100%;border-collapse:collapse;border:1px solid black;"
                                               cellspacing='0' align="center">
                                            <?php $fta = 0;
                                            for ($i = 0; $i < count($furnituraInfo[0]); $i++) {
                                                if ($furnituraInfo[0][$i]["name"]) {
                                                    $fta += $furnituraInfo[1][$i];
                                                    ?>
                                                    <tr>
                                                        <td style='font-size:14px;width:60%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo[0][$i]["name"]; ?></td>
                                                        <td style='font-size:14px;width:20%;text-align:center;border:0.1px solid black;'><?= $setsNumber ?>
                                                            шт
                                                        </td>
                                                        <td style='font-size:100%;width:20%;text-align:left;border:0.1px solid black;'><?= number_format($furnituraInfo[1][$i] , 0, "", " ") ?>
                                                            руб.
                                                        </td>
                                                    </tr>
                                                <?php } ?>
                                            <?php } ?>
                                        </table>
                                    <?php } ?>
                                    <p style="text-align:right;padding-right:20px;">
                                        <span style="color:black;font-size:18px;"><?= number_format($fta, 0, "", " ") ?>
                                            руб</span><br/>
                                        <span class="pdfitalic pdflinkitalic" style="font-size:14px;">Варианты замены смотрите на стр. <?= $altPage ?></span>
                                    </p>
                                </td>
                            </tr>
                        </table>
                        <?php if ($typeFurnitura == 1 || $typeFurnitura == 2) { ?>
                            <p style="color:#666666;text-align:center;font-size:18px;margin-bottom:0px;"><?= $furnituraInfo[0][0]["cname"] ?></p>
                            <p style="color:#666666;text-align:center;font-size:16px;"
                               class="noMargin"><?= $furnituraInfo[0][0]["name"] ?></p>
                            <p style="text-align: center;"><img style='height:300px;'
                                                                src='<?= $furnituraInfo[0][0]["imgBig"] != "" && @fopen("admin/" . $furnituraInfo[0][0]["imgBig"], "r") ? "admin/" . $furnituraInfo[0][0]["imgBig"] : "img/notselected.png" ?>'>
                            </p>
                            <div class="pdfooter">
                                <table style="width:98%;" align="center">
                                    <tr>
                                        <td style='width: 50%;'>
                                            <p style="color: black;font-size:18px;">Характеристики</p>
                                            <span class="pdfitalic"
                                                  style="color:black;"><?= !empty($furnituraInfo[0][0]["characteristics"]) ? fList($furnituraInfo[0][0]["characteristics"]) : "noDB" ?></span>
                                        </td>
                                        <td style='width: 50%;'>
                                            <p style="color: black;font-size:18px;">Описание</p>
                                            <p style="margin-bottom:0px;margin-top:0px;color:black;"><?= !empty($furnituraInfo[0][0]["description"]) ? $furnituraInfo[0][0]["description"] : "noDB" ?></p>
                                            <p style="color: black;font-size:18px;">Преимущества</p>
                                            <span
                                                style="color:black;"><?= !empty($furnituraInfo[0][0]["benefits"]) ? fList($furnituraInfo[0][0]["benefits"]) : "noDB" ?></span>
                                        </td>
                                    </tr>
                                </table>
                                <br/>
                                <div
                                    style="width:99%;height:50px;background-color:#e5e5e5;text-align:right;vertical-align:middle;margin:auto;margin-top:10px;margin-bottom:10px;">
                                    <span style="font-size:20px;color:#666666;">Стоимость комплекта </span><span
                                        class="pdfbold"
                                        style="font-size:20px;color:#666666;"><?= number_format($furnituraInfo[1][0], 0, "", " ") ?></span><span
                                        style="font-size:16px;color:#666666;"> руб</span>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                </div>
                                <p class="pdfitalic pdflinkitalic"
                                   style="padding-right:10px;margin-top:0px;margin-bottom:0px;text-align:right;font-size:14px;">
                                    Варианты замены смотрите на стр. <?= $altPage ?></p>
                            </div>
                        <?php } ?>
                    <?php } ?>
                <?php } else { ?>
                    <?php if (count($furnituraInfo[0]) > 0) { ?>
                        <table style="padding-top:15px;width:100%;border: 2px solid #999999;border-collapse:collapse;">
                            <tr>
                                <?php

                                for ($i = 0; $i < count($furnituraInfo[0]); $i++) {
                                    if ($i > 0 && $i % 2 == 0 && $furnituraInfo[0][$i]["name"] !=null ) echo "</tr><tr>"; ?>

                                    <?php if ($furnituraInfo[0][$i]["name"]) { ?>

                                        <td style="width: 50%;border: 1px solid #999999;background-color: white;">
                                            <table style="width: 100%;">
                                                <tr>
                                                    <td style="width:49%;">
                                                        <p style="text-align:center; color:white;background-color: white;><img
                                                                src="<?= $furnituraInfo[0][$i]["img"] != "" && @fopen("admin/" . $furnituraInfo[0][$i]["img"], "r") ? "admin/" . $furnituraInfo[0][$i]["img"] : "img/notselected.png" ?>"
                                                                style="height:100px;width:100px;"></p>
                                                    </td>
                                                    <td style="width:49%;vertical-align:bottom;">
                                                        <p style="text-align:center; color:white;background-color: white;" ><img
                                                                src="<?= $furnituraInfo[0][$i]["img"] != "" && @fopen("admin/" . $furnituraInfo[0][$i]["img"], "r") ? "admin/" . $furnituraInfo[0][$i]["img"] : "img/notselected.png" ?>"
                                                                style="height:50px;width:50px;"></p>
                                                        <p style="font-size:12px;margin-top:0px;margin-bottom:0px;text-align:center;"><?= $furnituraInfo[0][$i]["nameThree"] ?></p>
                                                        <p style="font-size:12px;margin-top:0px;margin-bottom:0px;text-align:center;"><?= $furnituraInfo[0][$i]["name"] ?></p>
                                                        <p class="pdfbold"
                                                           style="font-size:12px;margin-top:0px;margin-bottom:0px;text-align:center;">
                                                            Цена за
                                                            ед. <?= number_format($furnituraInfo[1][$i], 0, "", " ") ?>
                                                            руб</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div
                                                style="width:99%;height:35px;background-color:#e5e5e5;text-align:right;vertical-align:middle;margin:auto;">
                                                <span style="font-size:18px;"><?= $setsNumber ?> шт. </span><span
                                                    class="pdfbold"
                                                    style="font-size:18px;color:#666666;"><?= number_format($furnituraInfo[1][$i], 0, "", " ") ?></span><span
                                                    style="font-size:16px;color:#666666;"> руб</span>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                            </div>
                                        </td>
                                    <?php } ?>
                                <?php } ?>
                            </tr>
                        </table>
                    <?php } ?>
                <?php } ?>
            </div>
        </page>
    <?php } ?>

    <?php
    $a = false;
    for ($i = 1; $i < count($furnituraInfo[0]); $i++) {
        if ($furnituraInfo[0][$i]['name']) $a = true;
    }
    if (!in_array($typeFurnitura, array(0, 3, 4)) && $a) {
        ?>
        <!-- ФУРНИТУРА МЕХАНИЗМЫ 2 ЭЛЕМЕНТЫ -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <div style='width: 100%;max-width: 100%;'>
                <img style='width: 100%;height: 70px;' src='img/shapka.png'>
                <table style="width: 100%;margin-top: -3px;">
                    <tr>
                        <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                       class="pdflink"><?= $data['mail'] ?></a></td>
                        <td style='width:56%;'></td>
                        <td class="pdfbold" style='width:14%;text-align:center;font-size:15px;'></td>
                        <td style='width:12%;'>
                            <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                        </td>
                    </tr>
                </table>
                <?php if ($furnituraInfo[0][1]["name"]) { ?>
                    <p class="pdfpageh1"
                       style="padding-top:-50px;font-size:26px;margin-top:0px;margin-bottom:15px;"><?= $furnituraInfo[0][1]["cname"] ?></p>
                    <table style="width: 100%;">
                        <tr>
                            <td style='width: 49%;'><img
                                    src='<?= $furnituraInfo[0][1]["imgBig"] != "" && @fopen("admin/" . $furnituraInfo[0][1]["imgBig"], "r") ? "admin/" . $furnituraInfo[0][1]["imgBig"] : "img/notselected.png" ?>'
                                    style="width: 100%;"></td>
                            <td style='width: 49%;vertical-align:bottom;'>
                                <p style="padding-bottom:200px;margin-bottom:0px;margin-top:0px;color:black;font-size:14px;"><?= !empty($furnituraInfo[0][1]["description"]) ? $furnituraInfo[0][1]["description"] : "noDB" ?></p>
                                <p style="text-align:right;padding-right:20px;">
                                    <span
                                        style="color:black;font-size:18px;"><?= number_format($furnituraInfo[1][1], 0, "", " ") ?>
                                        руб</span><br/>
                                    <span class="pdfitalic pdflinkitalic" style="font-size:14px;">Варианты замены смотрите на стр. <?= $altPage ?></span>
                                </p>
                            </td>
                        </tr>
                    </table>
                <?php } ?>
                <?php if ($furnituraInfo[0][6]["name"]) { ?>
                    <p class="pdfpageh1"
                       style="padding-top:-50px;font-size:26px;margin-top:0px;margin-bottom:15px;"><?= $furnituraInfo[0][6]["cname"] ?></p>
                    <table style="width: 100%;">
                        <tr>
                            <td style='width: 49%;'><img
                                    src='<?= $furnituraInfo[0][6]["imgBig"] != "" && @fopen("admin/" . $furnituraInfo[0][6]["imgBig"], "r") ? "admin/" . $furnituraInfo[0][6]["imgBig"] : "img/notselected.png" ?>'
                                    style="width: 100%;"></td>
                            <td style='width: 49%;vertical-align:bottom;'>
                                <p style="padding-bottom:200px;margin-bottom:0px;margin-top:0px;color:black;font-size:14px;"><?= !empty($furnituraInfo[0][6]["description"]) ? $furnituraInfo[0][6]["description"] : "noDB" ?></p>
                                <p style="text-align:right;padding-right:20px;">
                                    <span
                                        style="color:black;font-size:18px;"><?= number_format($furnituraInfo[1][6], 0, "", " ") ?>
                                        руб</span><br/>
                                </p>
                            </td>
                        </tr>
                    </table>
                <?php } ?>
                <br/>

                <?php if (count($furnituraInfo[0]) > 1) { ?>
                    <table style="width:100%;text-align:center;">
                        <tr>
                            <?php
                            $count_array =0;
                            for ($i = 2; $i < count($furnituraInfo[0]); $i++) {
                              if($i==6){}else {

                               if ($furnituraInfo[0][$i]["name"]) {
                                 $count_array++;
                                    ?>
                                    <td style="width:50%;border:2px solid #999999;background-color:white;">
                                         <table style="width: 100%;">
                                            <tr>
                                                <td style="width:39%;">
                                                    <p style="text-align:center;"><img
                                                            src="<?= $furnituraInfo[0][$i]["img"] != "" && @fopen("admin/" . $furnituraInfo[0][$i]["img"], "r") ? "admin/" . $furnituraInfo[0][$i]["img"] : "img/notselected.png" ?>"
                                                            style="height:120px;width:120px;"></p>
                                                </td>
                                                <td style=" width:59%;">
                                                    <p style="text-align:center;"><img
                                                            src="<?= $furnituraInfo[0][$i]["img"] != "" && @fopen("admin/" . $furnituraInfo[0][$i]["img"], "r") ? "admin/" . $furnituraInfo[0][$i]["img"] : "img/notselected.png" ?>"
                                                            style="height:50px;width:50px;"></p>
                                                    <p style="font-size:12px;margin-top:0px;margin-bottom:0px;text-align:center;"><?= $furnituraInfo[0][$i]["nameThree"] ?></p>
                                                    <p style="font-size:12px;margin-top:0px;margin-bottom:0px;text-align:center;"><?= $furnituraInfo[0][$i]["name"] ?></p>
                                                    <p class="pdfbold"
                                                       style="font-size:12px;margin-top:0px;margin-bottom:0px;text-align:center;">
                                                        Цена за
                                                        ед. <?=$furnituraInfo[1][$i]/($furnituraInfo[1][$i] / nPrice($furnituraInfo[0][$i]['price'],$per,1)/2) ?>
                                                        руб</p>
                                                </td>

                                            </tr>
                                        </table>
                                        <div
                                            style="width:99%;height:35px;background-color:#e5e5e5;text-align:right;vertical-align:middle;margin:auto;">
                                            <span style="font-size:18px;"><?= round($furnituraInfo[1][$i] / nPrice($furnituraInfo[0][$i]['price'],$per,1))/2 ?> шт. </span><span
                                                class="pdfbold"
                                                style="font-size:18px;color:#666666;"><?= number_format($furnituraInfo[1][$i], 0, "", " ") ?></span><span
                                                style="font-size:16px;color:#666666;"> руб</span>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                        </div>
                                    </td>
                                <?php
                                if ( $count_array % 2 == 0) echo "</tr><tr>";
                               } ?>
                            <?php }}?>
                        </tr>
                    </table>
                    <!-- <table style="width:100%;text-align:center;background-color:red;">
                        <tr>
                          <td>
                            <h1 style="color:aqua; width:50%;">1</h1>
                          </td>
                          <td>
                            <h1 style="color:aqua">2</h1>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h1 style="color:aqua">3</h1>
                          </td>
                        </tr>
                    </table> -->
                <?php } ?>
            </div>
        </page>
    <?php } ?>

    <?php if (count($furnituraInfo[2]) > 0) { ?>
        <!-- АКСЕССУАРЫ -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
                <img style='width: 100%;height: 70px;' src='img/shapka.png'>
                <table style="width: 100%;margin-top: -3px;">
                    <tr>
                        <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                       class="pdflink"><?= $data['mail'] ?></a></td>
                        <td style='width:56%;'></td>
                        <td style='width:14%;text-align:center;font-size:15px;'></td>
                        <td style='width:12%;'>
                            <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                        </td>
                    </tr>
                </table>
                <div style='width:100%;max-width:100%;background-color:#e5e5e5;'>
                    <div
                        style="width:100%;height:35px;text-align:center;vertical-align:middle;margin:auto;font-size:20px;color:#666666;margin-top:5px;margin-bottom:5px;">
                        Аксессуары
                    </div>
                    <?php if (count($furnituraInfo[2]) > 0) { ?>
                        <table style="width:99%;border-collapse:collapse;padding-left:7px;">
                            <tr>
                                <?php
                                $count_array =0;

                                for ($i = 0; $i < count($furnituraInfo[2]); $i++) {

                                   ?>
                                    <?php if ($furnituraInfo[2][$i]["name"]) {
                                      $count_array++;

                                       ?>
                                        <td style="width:50%;background-color:white;border:2px solid #999999;">
                                            <table style="width:100%;">
                                                <tr>
                                                    <td style="width:30%;">
                                                        <p style="text-align: center;"><img
                                                                src="<?= $furnituraInfo[2][$i]["img"] != "" && @fopen("admin/" . $furnituraInfo[2][$i]["img"], "r") ? "admin/" . $furnituraInfo[2][$i]["img"] : "img/notselected.png" ?>"
                                                                style="height:70px;width:70px;"></p>
                                                    </td>
                                                    <td style="width:70%;">
                                                        <p style="text-align:left;margin-top:0px;margin-bottom:0px;vertical-align:middle;margin:auto;font-size:16px;"><?= $furnituraInfo[2][$i]["cname"] ?></p>
                                                        <p style="text-align:left;margin-top:0px;margin-bottom:0px;vertical-align:middle;margin:auto;font-size:16px;"><?= $furnituraInfo[2][$i]["name"] ?></p>
                                                        <p style="text-align:right;padding-right:15px;margin-bottom:0px;margin-top:0px;">
                                                            <span
                                                                class="pdfbold">Цена за ед. <?= nPrice($furnituraInfo[2][$i]["price"],$per,1) ?>
                                                                руб</span></p>
                                                        <p style="text-align:right;padding-right:15px;margin-bottom:0px;margin-top:0px;">
                                                            <span style="font-size:18px;"><?php
                                                              echo round($furnituraInfo[3][$i]/nPrice($furnituraInfo[2][$i]["price"],$per,1)) ;
                                                            ?> шт. </span><span
                                                                class="pdfbold"
                                                                style="font-size:18px;color:#666666;"><?= number_format($furnituraInfo[3][$i], 0, "", " ") ?></span><span
                                                                style="font-size:16px;color:#666666;"> руб</span></p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    <?php
                                    if ($count_array % 2 == 0){
                                      echo "</tr><tr>";
                                    }
                                  } ?>
                                <?php } ?>
                            </tr>
                        </table>
                    <?php } ?>
                    <br/>
                </div>
            </div>
        </page>
    <?php } ?>

    <!-- МАТЕРИАЛЫ -->
    <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
        <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                   class="pdflink"><?= $data['mail'] ?></a></td>
                    <td style='width:56%;'></td>
                    <td class="pdfbold" style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p class="pdfpageh1" style="padding-top:-50px;font-size:26px;margin-top:0px;margin-bottom:0px;">Заполнение
                №1</p>
            <table style="width:100%;">
                <?php  for ($i = 0; $i < count($materialInfo1); $i++) { ?>
                    <tr>
                        <td style='width: 50%;'>
                            <p style="text-align:center;">
                                <?php if ($materialInfo1[$i]['in']["img"] != "" && @fopen("admin/" . $materialInfo1[$i]['in']["img"], "r")) { ?>
                                    <img src='admin/<?= $materialInfo1[$i]['in']["img"] ?>'
                                         style="width:250px;height:150px;">
                                <?php } else { ?>
                                    <img src='img/notselected.png' style="width: 50%;height: 100px;">
                                <?php } ?>
                            </p>
                        </td>
                        <td style='width: 50%;'>
                            <p style="margin-top:5px;color:black;font-size:18px;">Характеристики</p>
                            <span class="pdfitalic"
                                  style="color:black;"><?php echo fList($materialInfo1[$i]['in']["characteristics"]) ?></span><br/>
                            <p class="pdfitalic" style="color:black;">
                                <?= $materialInfo1[$i]['in']["name"] ?><br/>
                                <br/>
                                Толщина, мм: <?= $materialInfo1[$i]['to'] ?><br/>
                                Ширина, мм: <?= $materialInfo1[$i]['sh'] ?><br/>
                                Высота, мм: <?= $materialInfo1[$i]['vy'] ?><br/>
                                Площадь, м: <?= $materialInfo1[$i]['pl'] ?><br/>
                                И т.д.<br/>
                                <br/>
                                Цена, м/кв.: <?php

                                $arr =explode(";",$materialInfo1[$i]['in']['thickness']);
                              if(count($arr)== 1){
                                 echo nPrice($materialInfo1[$i]['in']['price'],$per,1);
                              }else {

                                $arr1 =explode(";",$materialInfo1[$i]['in']['price']);
                               foreach ($arr as $value){
                                   if($materialInfo1[$i]['to'] ==$value){

                                       echo nPrice($arr1[key($arr)-1],$per,1);
                                   }
                               }
                             }
                                ?> руб.
                            </p>
                        </td>
                    </tr>
                    <?php
                    if($arrayNamber[0][$i] !="Номер "){

                     $itemN0 = $dbl->query("SELECT  expmatireals.name,expmatireals.img,expmatireals.price FROM expmatireals WHERE name Like '{$arrayNamber[0][$i]}'")->fetchArray(SQLITE3_ASSOC);

                     if ($itemN0 !=false){
                     ?>
                     <tr>
                         <td style='width: 50%;'>
                             <p style="text-align:center;">
                                 <?php if ($itemN0['img'] != "" && @fopen("admin/" . $itemN0['img'], "r")) { ?>
                                     <img src='admin/<?= $itemN0['img'] ?>'
                                          style="width:250px;height:150px;">
                                 <?php } else { ?>
                                     <img src='img/notselected.png' style="width: 50%;height: 100px;">
                                 <?php } ?>
                             </p>
                         </td>
                         <td style='width: 50%;'>
                             <p style="margin-top:5px;color:black;font-size:18px;">Характеристики</p>

                             <p class="pdfitalic" style="color:black;">
                                 <?= $itemN0["name"] ?><br/>
                                 <br/>
                                 Ширина, мм: <?= $materialInfo1[$i]['sh'] ?><br/>
                                 Высота, мм: <?= $materialInfo1[$i]['vy'] ?><br/>
                                 Площадь, м: <?= $materialInfo1[$i]['pl'] ?><br/>
                                 И т.д.<br/>
                                 <br/>
                                 Цена, м/кв.: <?php
                                  echo   nPrice($materialInfo1[$i]['pl']*$itemN0['price'],$per,1);
                                 ?> руб.
                             </p>
                         </td>
                     </tr>
                     <?php } ?>
                     <?php } ?>
                <?php  } ?>
            </table>
            <p style="margin-top:5px;width:98%;text-align:left;color:black;"><?php echo $materialInfo1['in']["description"]; ?></p>
            <div
                style="width:99%;height:50px;background-color:#e5e5e5;text-align:right;vertical-align:middle;margin:auto;padding-right:15px;font-size:20px;color:#666666;">
                Стоимость комплекта <span class="pdfbold"
                                          style="font-size:20px;color:#666666;"><?= number_format($m1, 0, "", " ") ?></span>
                руб
            </div>
        </div>
    </page>

    <!-- ДЕКОР -->
    <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
        <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                   class="pdflink"><?= $data['mail'] ?></a></td>
                    <td style='width:56%;'></td>
                    <td class="pdfbold" style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p class="pdfpageh1" style="padding-top:-50px;font-size:26px;margin-top:0px;margin-bottom:0px;">Покраска
                профиля</p>
            <br/><br/>
            <table style="width:99%;" cellspacing="0" align="center">
                <tr style="background-color:#e5e5e5;">
                    <td style='width:10%;border:1px solid #999999;text-align:center;color:black;vertical-align:middle;'>
                        №<br/>пп
                    </td>
                    <td style='width:30%;border:1px solid #999999;text-align:center;color:black;vertical-align:middle;'>
                        Наименование<br/>изделия
                    </td>
                    <td style='width:10%;border:1px solid #999999;text-align:center;color:black;vertical-align:middle;'>
                        Ед. изм.
                    </td>
                    <td style='width:10%;border:1px solid #999999;text-align:center;color:black;vertical-align:middle;'>
                        Кол-во
                    </td>
                    <td style='width:15%;border:1px solid #999999;text-align:center;color:black;vertical-align:middle;'>
                        Цвет /<br/>фактура
                    </td>
                    <td style='width:25%;border:1px solid #999999;text-align:center;color:black;vertical-align:middle;'>
                        Цена,<br/>в т.ч НДС<br/>руб
                    </td>
                </tr>
                <?php for ($i = 1; $i < 2; $i++) { ?>
                    <tr <?php if ($i > 1 && $i % 2 == 0) echo "style=\"background-color: #e5e5e5;\""; ?>>
                        <td style='width:10%;text-align:center;color:black;vertical-align:middle;'><?= $i ?>.</td>
                        <!--Заметка    -->
                        <td style='width:30%;text-align:center;color:black;vertical-align:middle;'></td>
                        <td style='width:10%;text-align:center;color:black;vertical-align:middle;'>м<sup>2</sup></td>
                        <td style='width:10%;text-align:center;color:black;vertical-align:middle;'>до 15 м<sup>2</sup>
                        </td>
                        <td style='width:15%;text-align:center;color:black;vertical-align:middle;'><img
                                src="<?= $decorInfo[0][3]["img"] != "" && @fopen("admin/" . $decorInfo[0]["img"], "r") ? "admin/" . $decorInfo[0]["img"] : "img/notselected.png" ?>"
                                style="width: 100%;"></td>
                        <td style='width:25%;text-align:center;color:black;vertical-align:middle;'><?= isset($decorInfo[1]) ? number_format(nPrice($decorInfo[1],$per,1), 0, "", " ") : "noDB" ?></td>
                    </tr>
                <?php } ?>
            </table>
            <br/><br/>
            <div
                style="width:99%;height:45px;background-color:#e5e5e5;text-align:right;vertical-align:middle;margin:auto;">
                <span style="font-size:21px;color:#666666;">Стоимость декора </span><span class="pdfbold"
                                                                                          style="font-size:21px;color:#666666;"><?= isset($decorInfo[1]) ? number_format(nPrice($decorInfo[1],$per,1), 0, "", " ") : 0 ?></span><span
                    style="font-size:21px;color:#666666;"> руб</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            </div>
            <p style="color:black;font-size:12px;">
                3 года гарантии на отслоение порошкового покрытия, в т.ч. на двухцветную покраску.<br/>
                Срок изготовления заказа 4-5 рабочих дней.<br/>
                В стоимость уже включена химическая подготовка, упаковка и погрузо-разгрузочные работы.<br/>
                Возможность двухцветной декоративной покраски<br/>
                Создание поверхности с двумя разными вариантами декора или сочетание порошкового окрашивания с <br/>
                декорированием.<br/>
                Использование только высокотехнологичных пленок и праймеров лучших зарубежных производителей —- <br/>
                Transfertex, Menphis, Decoral System, Akzo Nobel.<br/>
                Наличие трех единиц оборудования для декора позволяет выполнить заказ практически любого объема в <br/>
                течение рабочей недели!<br/>
            </p>
            <div class="pdfooter">
                <div
                    style="width:99%;height:65px;background-color:#e5e5e5;text-align:center;vertical-align:middle;margin:auto;">
                    <span style="font-size:21px;color:#666666;">Итого: </span><span class="pdfbold"
                                                                                    style="font-size:21px;color:#666666;"><?= number_format($su1, 0, "", " ") ?></span><span
                        style="font-size:21px;color:#666666;"> руб.</span><br/>
                    <span class="pdfitalic" style="color:#666666;font-size:16px;">Замер, монтаж и доставка в стоимость включены</span><br/>
                </div>
                <br/><br/>
                <p style="text-align:center;font-size:15px;">Условия работы: <span class="pdfbolditalic"
                                                                                   style="color:#666666;font-size:15px;">Сборка на месте установки. Работы производятся в нерабочее время.</span>
                </p>
                <table style="width:100%;text-align:center;">
                    <tr>
                        <td style="width:38%;font-size:15px;">Срок изготовления <span class="pdfbold"
                                                                                      style="font-size:15px;color:#666666;"><?= $data["srok_izgotovlenia"] ?></span>
                            рабочих дней.
                        </td>
                        <td style="width:38%;font-size:15px;">Порядок оплаты <span class="pdfbold"
                                                                                   style="font-size:15px;color:#666666;"><?= $data["poriadok_oplati"] ?></span>
                            предоплата.
                        </td>
                        <td style="width:24%;font-size:15px;">Гарантия <span class="pdfbold"
                                                                             style="font-size:15px;color:#666666;"><?= $data["garantia"] ?></span>
                            год.
                        </td>
                    </tr>
                </table>
                <p style="text-align:center;font-size:15px;" class="pdfitalic">
                    Данное коммерческое предложение действительно в течение 10 календарных дней.<br/>
                    Коммерческое предложение
                    подготовил менеджер :<?= $data["manager"] ?> <?= $data["manager_phone"] ?> <?= $data["mail"] ?><br/>
                </p>
            </div>
        </div>
    </page>

    <!-- ЭКОНОМ -->
    <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
        <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                   class="pdflink"><?= $data['mail'] ?></a></td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p class="pdfpageh1" style="padding-top:-77px;">Альтернативная комплектация для<br/>коммерческого
                предложения<br/>№<?= $orderNumber ?><br/><span class="pdfbold" style="font-size:20px;color:#666666;">(эконом)</span>
            </p>
            <table style="width:100%;">
                <tr style="background-color:#e5e5e5;"> <!-- профиль -->
                    <td style="width:100%;">
                        <table style="width:100%;">
                            <tr>
                                <td style="width:30%;">
                                    <p style="text-align:center;">
                                        <?php if ($profilInfo2[0]['img'] != "" && @fopen("admin/" . $profilInfo2[0]['img'], "r")) { ?>
                                            <img src='admin/<?= $profilInfo2[0]['img'] ?>'
                                                 style="height:100px;width:100px;">
                                        <?php } else { ?>
                                            <img src='img/notselected.png' style="height:100px;width:100px;">
                                        <?php } ?>
                                    </p>
                                </td>
                                <td style="width:69%;">
                                    <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                        Профиль</p>
                                    <table style="width:100%;border:1px solid #999999;border-collapse:collapse;"
                                           cellspacing="0">
                                        <tr>
                                            <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                <?= $profilInfo2[0]["name"] ?>
                                            </td>
                                            <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                <?= number_format(nPrice($count0*$profilInfo2[1][0],$per,2), 0, "", " ") ?> руб
                                            </td>
                                        </tr>
                                        <?php if ($pmh[1]->p != 0) { ?>
                                            <tr>
                                                <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                    <?= $pmh[1]->n ?>
                                                </td>
                                                <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                    <?= number_format(nPrice($count0*$pmh[1]->p,$per,2), 0, "", " ") ?> руб
                                                </td>
                                            </tr>
                                        <?php } ?>
                                        <?php if ($pmv[1]->p != 0) { ?>
                                            <tr>
                                                <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                    <?= $pmv[1]->n ?>
                                                </td>
                                                <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                    <?= number_format(nPrice($count0*$pmv[1]->p,$per,2), 0, "", " ") ?> руб
                                                </td>
                                            </tr>
                                        <?php } ?>
                                    </table>
                                    <p style="text-align:right;">
                                        <span
                                            style="color:black;font-size:18px;"><?= number_format(nPrice($count0*($profilInfo2[1][0]+$pmv[1]->p+$pmh[1]->p) ,$per,2), 0, "", " ") ?>
                                            руб</span><br/>
                                        <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <?php
                $a = false;
                for ($i = 0; $i < count($furnituraInfo2[0]); $i++)
                    if ($furnituraInfo2[0][$i]['name']) $a = true;
                if ($a) {
                    ?>
                    <tr> <!-- фурнитура -->
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:30%;">
                                        <p style="text-align:center;">
                                            <?php if ($furnituraInfo2[0][0]['img'] != "" && @fopen("admin/" . $furnituraInfo2[0][0]['img'], "r")) { ?>
                                                <img src='admin/<?= $furnituraInfo2[0][0]['img'] ?>'
                                                     style="height:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:69%;">
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                            Фурнитура</p>
                                        <?php if (count($furnituraInfo2[0]) > 0) { ?>
                                            <table style="width:100%;border-collapse:collapse;border:1px solid black;"
                                                   cellspacing='0' align="center">
                                                <?php $f2 = 0;
                                                $FurnituraTotalAcc2 = 0;
                                                for ($i = 0; $i < count($furnituraInfo2[0]); $i++) {
                                                     if ($furnituraInfo2[0][$i]["name"]) {
                                                         $FurnituraTotalAcc2 += $furnituraInfo2[1][$i] ;
                                                        $f2 = 1; ?>
                                                        <tr>
                                                            <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo2[0][$i]["cname"]; ?></td>
                                                            <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo2[0][$i]["name"]; ?></td>
                                                            <td style='font-size:14px;width:14%;text-align:center;border:0.1px solid black;'><?= number_format($furnituraInfo2[1][$i] , 0, "", " ") ?>
                                                                руб
                                                            </td>
                                                        </tr>
                                                    <?php } ?>
                                                <?php } ?>
                                            </table>
                                        <?php } ?>
                                        <?php if ($f2 == 1) { ?>
                                            <p style="text-align:right;">
                                                <span
                                                    style="color:black;font-size:18px;"><?= number_format($FurnituraTotalAcc2, 0, "", " ") ?>
                                                    руб</span><br/>
                                                <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                            </p>
                                        <?php } ?>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
                <?php if ($materialInfo2[0]['in']["name"]) { ?>
                    <!--TODO: сделать, не раб-->
                    <!-- заполнение -->
                    <tr style="background-color:#e5e5e5;">
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:30%;">
                                        <p style="text-align:center;">
                                            <?php if ($materialInfo2[0]['in']['img'] != "" && @fopen("admin/" . $materialInfo2[0]['in']['img'], "r")) { ?>
                                                <img src='admin/<?= $materialInfo2[0]['in']['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:69%;">
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                            Заполенение</p>
                                        <table style="width:100%;border:1px solid #999999;border-collapse:collapse;"
                                               cellspacing="0">
                                            <?php $mp2 = 0;
                                            /*Фурнитура */
                                            for ($i = 0; $i < count($materialInfo2); $i++) {

                                            ?>
                                                <tr>
                                                    <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                        <?= $materialInfo2[$i]['in']["name"] ?>
                                                    </td>
                                                    <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                        <?=nPrice($count0*$materialInfo2[$i]['pr'],$per,2)?>
                                                        руб
                                                    </td>
                                                      </tr>
                                                    <?php
                                                    if($arrayNamber[1][$i] !='Номер' && $arrayNamber[1][$i] !='Номер' ){
                                                     $itemN0 = $dbl->query("SELECT  expmatireals.name,expmatireals.img,expmatireals.price FROM expmatireals WHERE name Like '{$arrayNamber[1][$i]}'")->fetchArray(SQLITE3_ASSOC);
                                                      if ($itemN0 !=false){
                                                     ?>
                                                     <tr>
                                                     <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                         <?=  $itemN0["name"] ?>
                                                     </td>
                                                     <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                         <?=nPrice($materialInfo2[$i]['pl']*$itemN0['price'],$per,2)?>
                                                         руб
                                                     </td>
                                                   </tr>
                                                       <?php } ?>
                                                          <?php } ?>
                                            <?php } ?>
                                        </table>
                                        <p style="text-align:right;">
                                            <span
                                                style="color:black;font-size:18px;"><?= number_format($m2, 0, "", " ") ?>
                                                руб</span><br/>
                                            <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
                <?php if (!in_array($furnituraSelect, array(0, 3, 4))) : ?>
                    <?php
                    $a = false;
                    $img;
                    for ($i=0; $i <count($furnituraInfo2[2]) ; $i++) {
                    if($furnituraInfo2[2][$i]){
                      $img= $furnituraInfo2[2][$i]['img'];
                      //break;
                    }
                    }
                    for ($i = 0; $i < count($furnituraInfo2[2]); $i++)
                        if ($furnituraInfo2[2][$i]['name']) $a = true;
                    if ($a) {
                        ?>
                        <tr> <!-- аксессуары -->
                            <td style="width:100%;">
                                <table style="width:100%;">
                                    <tr>
                                        <td style="width:30%;">
                                            <p style="text-align:center;">
                                                <?php if ($img != "" && @fopen("admin/" . $img, "r")) { ?>
                                                    <img src='admin/<?= $img ?>'
                                                         style="height:100px;width:100px;">
                                                <?php } else { ?>
                                                    <img src='img/notselected.png' style="height:100px;width:100px;">
                                                <?php } ?>
                                            </p>
                                        </td>
                                        <td style="width:69%;">
                                            <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                                Аксессуары</p>
                                            <?php if (count($furnituraInfo2[2]) > 0) { ?>
                                                <table
                                                    style="width:100%;border-collapse:collapse;border:1px solid black;"
                                                    cellspacing='0' align="center">
                                                    <?php $ak2 = 0;
                                                    $FurnituraTotalAcc22 = 0;
                                                    for ($i = 0; $i < count($furnituraInfo2[2]); $i++) {
                                                        if ($furnituraInfo2[2][$i]["name"]) {
                                                            $FurnituraTotalAcc22 += $furnituraInfo2[3][$i] ;
                                                            $ak2 = 1; ?>
                                                            <tr>
                                                                <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo2[2][$i]["cname"]; ?></td>
                                                                <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo2[2][$i]["name"]; ?></td>
                                                                <td style='font-size:14px;width:14%;text-align:center;border:0.1px solid black;'><?= number_format($furnituraInfo2[3][$i], 0, "", " ") ?>
                                                                    руб
                                                                </td>
                                                            </tr>
                                                        <?php } ?>
                                                    <?php } ?>
                                                </table>
                                            <?php } ?>
                                            <?php if ($ak2 == 1) { ?>
                                                <p style="text-align:right;">
                                                    <span
                                                        style="color:black;font-size:18px;"><?= number_format($FurnituraTotalAcc22, 0, "", " ") ?>
                                                        руб</span><br/>
                                                    <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                                </p>
                                            <?php } ?>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    <?php } ?>
                <?php endif; ?>
                <?php
                $a = false;
                for ($i = 0; $i < count($profilInfo2[2]); $i++)
                    if ($profilInfo2[2][$i]['text']) $a = true;
                if ($a) {
                    ?>
                    <tr <?php if (in_array($furnituraSelect, array(1, 2))) echo "style=\"background-color:#e5e5e5;\""; ?>>
                        <!-- дополнения -->
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:30%;">
                                        <p style="text-align:center;">
                                            <?php if ($profilInfo2[2][0]['img'] != "" && @fopen($profilInfo2[2][0]['img'], "r")) { ?>
                                                <img src='<?= $profilInfo2[2][0]['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:69%;">
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                            Дополнения</p>
                                        <table style="width:100%;border-collapse:collapse;border:1px solid black;"
                                               cellspacing='0' align="center">
                                            <?php $a2 = 0;
                                            $AddonTotalAcc2 = 0;
                                            for ($i = 0; $i < count($profilInfo2[2]); $i++) {
                                                $AddonTotalAcc2 += $profilInfo2[2][$i]['price']; ?>
                                                <?php if ($profilInfo2[2][$i]['text']) {
                                                    $a2 = 1; ?>
                                                    <tr>
                                                        <td style='font-size:14px;width:34%;text-align:left;border:0.1px solid black;'><?= $profilInfo2[2][$i]['type']; ?></td>
                                                        <td style='font-size:14px;width:52%;text-align:left;border:0.1px solid black;'><?= $profilInfo2[2][$i]['text']; ?></td>
                                                        <td style='font-size:14px;width:14%;text-align:center;border:0.1px solid black;'><?= number_format(nPrice($count0*$profilInfo2[2][$i]['price'],$per,2), 0, "", " ") ?>
                                                            руб
                                                        </td>
                                                    </tr>
                                                <?php } ?>
                                            <?php } ?>
                                        </table>
                                        <?php if ($a2 == 1) { ?>
                                            <p style="text-align:right;">
                                                <span
                                                    style="color:black;font-size:18px;"><?= number_format(nPrice($count0*$AddonTotalAcc2,$per,2), 0, "", " ") ?>
                                                    руб</span><br/>
                                                <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                            </p>
                                        <?php } ?>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
            </table>
            <p class="pdfitalic"
               style="margin-top:0px;margin-bottom:0px;color:#666666;text-align:center;font-size:16px;">Замер, монтаж и
                доставка в стоимость включены</p>
            <p style="margin-top:0px;margin-bottom:0px;text-align:center;">
                <!--
            <span style="color:#666666;font-size:20px;">Итого за 1 комплект:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="pdfbold" style="color:#666666;font-size:20px;"><?= number_format(round($data["summa2"] / $setsNumber, 0), 0, "", " ") ?></span>
-->
                <span style="color:#666666;font-size:20px;">Итого за 1 комплект: </span>
                <?php
                if (!isset($FurnituraTotalAcc22)) $FurnituraTotalAcc22 = 0;
                if (!isset($FurnituraTotalAcc2)) $FurnituraTotalAcc2 = 0;
                if (!isset($AddonTotalAcc2)) $AddonTotalAcc2 = 0;
                ?>
                <span class="pdfbold"
                      style="color:#666666;font-size:20px;"><?= number_format(round($priceFull2, 0), 0, "", " ") ?></span>
                <span style="color:#666666;font-size:20px;"> руб.</span>
                <!--
            <?php if ($setsNumber > 1) : ?>
            <br />
            <span style="color:#666666;font-size:20px;">Итого за <?= $setsNumber ?> <?= $setsNumber < 5 ? "комплектa" : "комплектов" ?>: </span>
            <span class="pdfbold" style="color:#666666;font-size:20px;"><?= number_format($data["summa2"], 0, "", " ") ?></span>
            <span style="color:#666666;font-size:20px;"> руб.</span>
            <?php endif; ?>
-->
            </p>
            <p class="pdfitalic pdflink" style="text-align:center;font-size:16px;margin-bottom:0px;margin-top:0px;">
                Альтернативные предложения на стр. <?= $altPage ?></p>
        </div>
    </page>

    <!-- ПРЕМИУМ -->
    <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
        <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                   class="pdflink"><?= $data['mail'] ?></a></td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p class="pdfpageh1" style="padding-top:-77px;">Альтернативная комплектация для<br/>коммерческого
                предложения<br/>№<?= $orderNumber ?><br/><span class="pdfbold" style="font-size:20px;color:#666666;">(премиум)</span>
            </p>
            <table style="width:100%;">
                <tr style="background-color:#e5e5e5;"> <!-- профиль -->
                    <td style="width:100%;">
                        <table style="width:100%;">
                            <tr>
                                <td style="width:30%;">
                                    <p style="text-align:center;">
                                        <?php if ($profilInfo3[0]['img'] != "" && @fopen("admin/" . $profilInfo3[0]['img'], "r")) { ?>
                                            <img src='admin/<?= $profilInfo3[0]['img'] ?>'
                                                 style="height:100px;width:100px;">
                                        <?php } else { ?>
                                            <img src='img/notselected.png' style="height:100px;width:100px;">
                                        <?php } ?>
                                    </p>
                                </td>
                                <td style="width:69%;">
                                    <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                        Профиль</p>
                                    <table style="width:100%;border:1px solid #999999;border-collapse:collapse;"
                                           cellspacing="0">
                                        <tr>
                                            <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                <?= $profilInfo3[0]["name"] ?>
                                            </td>
                                            <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                <?= number_format(nPrice($count0*$profilInfo3[1][0],$per,3), 0, "", " ") ?> руб
                                            </td>
                                        </tr>
                                        <?php if ($pmh[2]->p != 0) { ?>
                                            <tr>
                                                <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                    <?= $pmh[2]->n ?>
                                                </td>
                                                <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                    <?= number_format(nPrice($count0*$pmh[2]->p,$per,3), 0, "", " ") ?> руб
                                                </td>
                                            </tr>
                                        <?php } ?>
                                        <?php if ($pmv[2]->p != 0) { ?>
                                            <tr>
                                                <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                    <?= $pmv[2]->n ?>
                                                </td>
                                                <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                    <?= number_format(nPrice($count0*$pmv[2]->p,$per,3), 0, "", " ") ?> руб
                                                </td>
                                            </tr>
                                        <?php } ?>
                                    </table>
                                    <p style="text-align:right;">
                                        <span
                                            style="color:black;font-size:18px;"><?= number_format(nPrice($count0*($profilInfo3[1][0]+$pmv[2]->p+$pmh[2]->p),$per,3), 0, "", " ") ?>
                                            руб</span><br/>
                                        <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <?php
                $a = false;
                for ($i = 0; $i < count($furnituraInfo3[0]); $i++)
                    if ($furnituraInfo3[0][$i]['name']) $a = true;
                if ($a) {
                    ?>
                    <tr> <!-- фурнитура -->
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:30%;">
                                        <p style="text-align:center;">
                                            <?php if ($furnituraInfo3[0][0]['img'] != "" && @fopen("admin/" . $furnituraInfo3[0][0]['img'], "r")) { ?>
                                                <img src='admin/<?= $furnituraInfo3[0][0]['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:69%;">
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                            Фурнитура</p>
                                        <?php if (count($furnituraInfo3[0]) > 0) { ?>
                                            <table style="width:100%;border-collapse:collapse;border:1px solid black;"
                                                   cellspacing='0' align="center">
                                                <?php $f3 = 0;
                                                $FurnituraTotalAcc3 = 0;
                                                for ($i = 0; $i < count($furnituraInfo3[0]); $i++) {

                                                     if ($furnituraInfo3[0][$i]["name"]) {
                                                       $FurnituraTotalAcc3 += $furnituraInfo3[1][$i];
                                                        $f3 = 1; ?>
                                                        <tr>
                                                            <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo3[0][$i]["cname"]; ?></td>
                                                            <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo3[0][$i]["name"]; ?></td>
                                                            <td style='font-size:14px;width:14%;text-align:center;border:0.1px solid black;'><?= number_format($furnituraInfo3[1][$i] , 0, "", " ") ?>
                                                                руб
                                                            </td>
                                                        </tr>
                                                    <?php } ?>
                                                <?php } ?>
                                            </table>
                                        <?php } ?>
                                        <?php if ($f3 == 1) { ?>
                                            <p style="text-align:right;">
                                                <span
                                                    style="color:black;font-size:18px;"><?= number_format($FurnituraTotalAcc3, 0, "", " ") ?>
                                                    руб</span><br/>
                                                <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                            </p>
                                        <?php } ?>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
                <?php if ($materialInfo3[0]['in']["name"]) { ?>
                <!--TODO: не раб, почини-->
                 <!-- заполнение -->
                    <tr style="background-color:#e5e5e5;">
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:30%;">
                                        <p style="text-align:center;">
                                            <?php if ($materialInfo3[0]['in']['img'] != "" && @fopen("admin/" . $materialInfo3[0]['in']['img'], "r")) { ?>
                                                <img src='admin/<?= $materialInfo3[0]['in']['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:69%;">
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                            Заполенение</p>
                                        <table style="width:100%;border:1px solid #999999;border-collapse:collapse;"
                                               cellspacing="0">
                                            <?php $mp3 = 0;
                                            for ($i = 0; $i < count($materialInfo3); $i++) {
                                                 ?>
                                                <tr>
                                                    <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                        <?= $materialInfo3[$i]['in']["name"] ?>
                                                    </td>
                                                    <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                        <?= number_format(nPrice($count0*$materialInfo3[$i]['pr'],$per,3), 0, "", " ") ?>
                                                        руб
                                                    </td>
                                                </tr>
                                                <?php
                                                if($arrayNamber[2][$i] !='Номер' && $arrayNamber[2][$i] !='Номер' ){
                                                 $itemN0 = $dbl->query("SELECT  expmatireals.name,expmatireals.img,expmatireals.price FROM expmatireals WHERE name Like '{$arrayNamber[2][$i]}'")->fetchArray(SQLITE3_ASSOC);
                                                 if( $itemN0){
                                                 ?>
                                                 <tr>
                                                 <td style="width:60%;text-align:left;border:1px solid #999999;">
                                                     <?=  $itemN0["name"] ?>
                                                 </td>
                                                 <td style="width:40%;text-align:center;border:1px solid #999999;">
                                                     <?=nPrice($materialInfo3[$i]['pl']*$itemN0['price'],$per,2)?>
                                                     руб
                                                 </td>
                                               </tr>
                                                  <?php } ?>
                                                   <?php } ?>
                                            <?php } ?>
                                        </table>
                                        <p style="text-align:right;">
                                            <span
                                                style="color:black;font-size:18px;"><?= number_format($m3, 0, "", " ") ?>
                                                руб</span><br/>
                                            <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
                <?php if (!in_array($furnituraSelect, array(0, 3, 4))) : ?>
                    <?php
                    $a = false;
                    $img;
                    for ($i=0; $i <count($furnituraInfo3[2]) ; $i++) {
                    if($furnituraInfo3[2][$i]){
                      $img= $furnituraInfo3[2][$i]['img'];
                      //break;
                    }
                    }
                    for ($i = 0; $i < count($furnituraInfo3[2]); $i++)
                        if ($furnituraInfo3[2][$i]['name']) $a = true;
                    if ($a) {
                        ?>
                        <tr> <!-- аксессуары -->
                            <td style="width:100%;">
                                <table style="width:100%;">
                                    <tr>
                                        <td style="width:30%;">
                                            <p style="text-align:center;">
                                                <?php if (  $img != "" && @fopen("admin/" .   $img, "r")) { ?>
                                                    <img src='admin/<?=   $img ?>'
                                                         style="height:100px;width:100px;">
                                                <?php } else { ?>
                                                    <img src='img/notselected.png' style="height:100px;width:100px;">
                                                <?php } ?>
                                            </p>
                                        </td>
                                        <td style="width:69%;">
                                            <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                                Аксессуары</p>
                                            <?php if (count($furnituraInfo3[2]) > 0) { ?>
                                                <table
                                                    style="width:100%;border-collapse:collapse;border:1px solid black;"
                                                    cellspacing='0' align="center">
                                                    <?php $ak3 = 0;
                                                    $FurnituraTotalAcc33 = 0;
                                                    for ($i = 0; $i < count($furnituraInfo3[2]); $i++) {
                                                         if ($furnituraInfo3[2][$i]["name"]) {
                                                               $FurnituraTotalAcc33 += $furnituraInfo3[3][$i];
                                                            $ak3 = 1; ?>
                                                            <tr>
                                                                <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo3[2][$i]["cname"]; ?></td>
                                                                <td style='font-size:14px;width:43%;text-align:left;border:0.1px solid black;'><?= $furnituraInfo3[2][$i]["name"]; ?></td>
                                                                <td style='font-size:14px;width:14%;text-align:center;border:0.1px solid black;'><?= number_format($furnituraInfo3[3][$i], 0, "", " ") ?>
                                                                    руб
                                                                </td>
                                                            </tr>
                                                        <?php } ?>
                                                    <?php } ?>
                                                </table>
                                            <?php } ?>
                                            <?php if ($ak3 == 1) { ?>
                                                <p style="text-align:right;">
                                                    <span
                                                        style="color:black;font-size:18px;"><?= number_format($FurnituraTotalAcc33, 0, "", " ") ?>
                                                        руб</span><br/>
                                                    <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                                </p>
                                            <?php } ?>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    <?php } ?>
                <?php endif; ?>
                <?php
                $a = false;
                for ($i = 0; $i < count($profilInfo3[2]); $i++)
                    if ($profilInfo3[2][$i]['text']) $a = true;
                if ($a) {
                    ?>
                    <tr <?php if (in_array($furnituraSelect, array(1, 2))) echo "style=\"background-color:#e5e5e5;\""; ?>>
                        <!-- дополнения -->
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:30%;">
                                        <p style="text-align:center;">
                                            <?php if ($profilInfo3[2][0]['img'] != "" && @fopen($profilInfo3[2][0]['img'], "r")) { ?>
                                                <img src='<?= $profilInfo3[2][0]['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:69%;">
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-top:0px;margin-bottom:0px;">
                                            Дополнения</p>
                                        <table style="width:100%;border-collapse:collapse;border:1px solid black;"
                                               cellspacing='0' align="center">
                                            <?php $a3 = 0;
                                            $AddonTotalAcc3 = 0;
                                            for ($i = 0; $i < count($profilInfo3[2]); $i++) {

                                                if ($profilInfo3[2][$i]['text']) {
                                                    $AddonTotalAcc3 += $count0*$profilInfo3[2][$i]['price'];
                                                    $a3 = 1; ?>
                                                    <tr>
                                                        <td style='font-size:14px;width:34%;text-align:left;border:0.1px solid black;'><?= $profilInfo3[2][$i]['type']; ?></td>
                                                        <td style='font-size:14px;width:52%;text-align:left;border:0.1px solid black;'><?= $profilInfo3[2][$i]['text']; ?></td>
                                                        <td style='font-size:14px;width:14%;text-align:center;border:0.1px solid black;'><?= number_format(nPrice($count0*$profilInfo3[2][$i]['price'],$per,2), 0, "", " ") ?>
                                                            руб
                                                        </td>
                                                    </tr>
                                                <?php } ?>
                                            <?php } ?>
                                        </table>
                                        <?php if ($a3 == 1) { ?>
                                            <p style="text-align:right;">
                                                <span
                                                    style="color:black;font-size:18px;"><?= number_format(nPrice($AddonTotalAcc3,$per,2), 0, "", " ") ?>
                                                    руб</span><br/>
                                                <span class="pdfitalic" style="color:royalblue;">Варианты замены смотрите на стр. <?= $altPage + 2 ?></span>
                                            </p>
                                        <?php } ?>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
            </table>

            <p class="pdfitalic"
               style="margin-top:0px;margin-bottom:0px;color:#666666;text-align:center;font-size:16px;">Замер, монтаж и
                доставка в стоимость включены</p>
            <p style="margin-top:0px;margin-bottom:0px;text-align:center;">
                <!--
            <span style="color:#666666;font-size:20px;">Итого за 1 комплект:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="pdfbold" style="color:#666666;font-size:20px;"><?= number_format(round($data["summa3"] / $setsNumber, 0), 0, "", " ") ?></span>
-->
                <span style="color:#666666;font-size:20px;">Итого за 1 комплект: </span>
                <?php
                if (!isset($FurnituraTotalAcc33)) $FurnituraTotalAcc33 = 0;
                if (!isset($FurnituraTotalAcc3)) $FurnituraTotalAcc3 = 0;
                if (!isset($AddonTotalAcc3)) $AddonTotalAcc3 = 0;
                ?>
                <span class="pdfbold"
                      style="color:#666666;font-size:20px;"><?= number_format($priceFull3, 0, "", " ") ?></span>
                <span style="color:#666666;font-size:20px;"> руб.</span>
                <!--
            <?php if ($setsNumber > 1) : ?>
            <br />
            <span style="color:#666666;font-size:20px;">Итого за <?= $setsNumber ?> <?= $setsNumber < 5 ? "комплектa" : "комплектов" ?>: </span>
            <span class="pdfbold" style="color:#666666;font-size:20px;"><?= number_format($data["summa3"], 0, "", " ") ?></span>
            <span style="color:#666666;font-size:20px;"> руб.</span>
            <?php endif; ?>
-->
            </p>
            <p class="pdfitalic pdflink" style="text-align:center;font-size:16px;margin-bottom:0px;margin-top:0px;">
                Альтернативные предложения на стр. <?= $altPage ?></p>
        </div>
    </page>

    <!-- ПРИЛОЖЕНИЕ ПРОФИЛЯ МАТЕРИАЛЫ ДЕКОР -->
    <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
        <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                   class="pdflink"><?= $data['mail'] ?></a></td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p class="pdfpageh1" style="padding-top:-77px;margin-bottom:10px;">ПРИЛОЖЕНИЕ 1</p>
            <p style="text-align:center;font-size:18px;margin-bottom:10px;">Альтернативная комплектация для<br/>коммерческого
                предложения<br/>№<?= $orderNumber ?></p>
            <div
                style="width:99%;height:50px;background-color:#e5e5e5;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                Профиль
            </div>
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <table style="width:100%;">
                            <tr>
                                <td style="width:50%;">
                                    <p style="text-align:center;">
                                        <?php if ($altPi[0]['img'] != "" && @fopen("admin/" . $altPi[0]['img'], "r")) { ?>
                                            <img src='admin/<?= $altPi[0]['img'] ?>' style="height:100px;width:100px;">
                                        <?php } else { ?>
                                            <img src='img/notselected.png' style="height:100px;width:100px;">
                                        <?php } ?>
                                    </p>
                                </td>
                                <td style="width:49%;">
                                    <br/>
                                    <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                                    <p style="color:#666666;text-align:left;font-size:21px;margin-bottom:5px;"><?= $altPi[0]["name"] ?></p>
                                    <p style="color:#666666;" class="pdfbold"><?= $profilInfo[1][1] ?> кв/м</p>
                                    <p>Стоимость данного профиля <span class="pdfbold"
                                                                       style="color:darkred;"><?= number_format(nPrice($altPi[0]['price'],$per,1), 0, "", " ") ?></span><span
                                            style="color:darkred;"> руб.</span></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <?php if ($altPi[0]['name'] != $altPa[0]['name']) { ?>
                    <tr>
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:50%;">
                                        <p style="text-align:center;">
                                            <?php if ($altPa[0]['img'] != "" && @fopen("admin/" . $altPa[0]['img'], "r")) { ?>
                                                <img src='admin/<?= $altPa[0]['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:49%;">
                                        <br/>
                                        <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-bottom:5px;"><?= $altPa[0]["name"] ?></p>
                                        <p style="color:#666666;" class="pdfbold"><?= $profilInfo[1][1] ?> кв/м</p>
                                        <p>Стоимость данного профиля <span class="pdfbold"
                                                                           style="color:darkred;"><?= number_format(nPrice($altPa[0]['price'],$per,1), 0, "", " ") ?></span><span
                                                style="color:darkred;"> руб.</span></p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
            </table>
            <?php if (false) { ?>
                <div
                    style="width:99%;height:50px;background-color:#e5e5e5;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                    Покраска профиля
                </div>
                <table style="width:100%;">
                    <tr>
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:50%;">
                                        <p style="text-align:center;">
                                            <?php if ($decorInfo2[0][3]['img'] != "" && @fopen("admin/" . $decorInfo2[0]['img'], "r")) { ?>
                                                <img src='admin/<?= $decorInfo2[0]['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:49%;">
                                        <br/>
                                        <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-bottom:5px;"><?= $decorInfo2[0][2]["name"] ?></p>
                                        <p>Стоимость данного декора <span class="pdfbold"
                                                                          style="color:darkred;"><?= number_format(nPrice($decorInfo2[1],$per,1), 0, "", " ") ?></span><span
                                                style="color:darkred;"> руб.</span></p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <?php if ($decorInfo3[0][2]['name'] != $decorInfo2[0]['name']) { ?>
                        <tr>
                            <td style="width:100%;">
                                <table style="width:100%;">
                                    <tr>
                                        <td style="width:50%;">
                                            <p style="text-align:center;">
                                                <?php if ($decorInfo3[0][3]['img'] != "" && @fopen("admin/" . $decorInfo3[0][3]['img'], "r")) { ?>
                                                    <img src='admin/<?= $decorInfo3[0][3]['img'] ?>'
                                                         style="height:100px;width:100px;">
                                                <?php } else { ?>
                                                    <img src='img/notselected.png' style="height:100px;width:100px;">
                                                <?php } ?>
                                            </p>
                                        </td>
                                        <td style="width:49%;">
                                            <br/>
                                            <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                                            <p style="color:#666666;text-align:left;font-size:21px;margin-bottom:5px;"><?= $decorInfo3[0]["name"] ?></p>
                                            <p>Стоимость данного декора <span class="pdfbold"
                                                                              style="color:darkred;"><?= number_format(nPrice($decorInfo3[1],$per,1), 0, "", " ") ?></span><span
                                                    style="color:darkred;"> руб.</span></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    <?php } ?>
                </table>
            <?php } ?>
            <div
                style="width:99%;height:50px;background-color:#e5e5e5;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                Заполнения
            </div>
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <table style="width:100%;">
                            <tr>
                                <td style="width:50%;">
                                    <p style="text-align:center;">
                                        <?php if ($altMi[0]['img'] != "" && @fopen("admin/" . $altMi[0]['img'], "r")) { ?>
                                            <img src='admin/<?= $altMi[0]['img'] ?>' style="height:100px;width:100px;">
                                        <?php } else { ?>
                                            <img src='img/notselected.png' style="height:100px;width:100px;">
                                        <?php } ?>
                                    </p>
                                </td>
                                <td style="width:49%;">
                                    <br/>
                                    <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                                    <p style="color:#666666;text-align:left;font-size:21px;margin-bottom:5px;"><?= $altMi[0]["name"] ?></p>
                                    <p>Стоимость данного материала <span class="pdfbold"
                                                                         style="color:darkred;"><?= number_format(nPrice($altMi[0]['price'],$per,1), 0, "", " ") ?></span><span
                                            style="color:darkred;"> руб.</span></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <?php if ($altMi[0]['name'] != $altMa[0]['name']) { ?>
                    <tr>
                        <td style="width:100%;">
                            <table style="width:100%;">
                                <tr>
                                    <td style="width:50%;">
                                        <p style="text-align:center;">
                                            <?php if ($altMa[0]['img'] != "" && @fopen("admin/" . $altMa[0]['img'], "r")) { ?>
                                                <img src='admin/<?= $altMa[0]['img'] ?>'
                                                     style="height:100px;width:100px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:100px;width:100px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:49%;">
                                        <br/>
                                        <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                                        <p style="color:#666666;text-align:left;font-size:21px;margin-bottom:5px;"><?= $altMa[0]["name"] ?></p>
                                        <p>Стоимость данного материала <span class="pdfbold"
                                                                             style="color:darkred;"><?= number_format(nPrice($altMa[0]['price'],$per,1), 0, "", " ") ?></span><span
                                                style="color:darkred;"> руб.</span></p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <?php } ?>
            </table>
        </div>
    </page>

    <?php if (false) { ?>
        <!-- ПРИЛОЖЕНИЕ ДОПОЛНЕНИЯ -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <div style='width: 100%;max-width: 100%;height: 99%;max-height: 99%;border: 1px solid #999999;'>
                <img style='width: 100%;height: 70px;' src='img/shapka.png'>
                <table style="width: 100%;margin-top: -3px;">
                    <tr>
                        <td style='width:18%;text-align:left;'><br/><a href='mailto: <?= $data['mail'] ?> '
                                                                       class="pdflink"><?= $data['mail'] ?></a></td>
                        <td style='width:56%;'></td>
                        <td style='width:14%;text-align:center;font-size:15px;'></td>
                        <td style='width:12%;'>
                            <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                        </td>
                    </tr>
                </table>
                <p style="text-align:center;font-size:18px;margin-bottom:10px;padding-top:-70px;">Альтернативная
                    комплектация для<br/>коммерческого предложения<br/>№<?= $orderNumber ?></p>
                <div
                    style="width:99%;height:50px;background-color:#e5e5e5;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                    Дополнения
                </div>
                <table style="width:100%;">
                    <?php for ($i = 0; $i < count($profilInfo2[2]); $i++) { ?>
                        <tr>
                            <td style="width:50%;">
                                <p style="text-align:center;">
                                    <?php if ($profilInfo2[2][$i]['img'] != "" && @fopen($profilInfo2[2][$i]['img'], "r")) { ?>
                                        <img src='<?= $profilInfo2[2][$i]['img'] ?>' style="height:80px;">
                                    <?php } else { ?>
                                        <img src='img/notselected.png' style="height:80px;">
                                    <?php } ?>
                                </p>
                            </td>
                            <td style="width:49%;">
                                <br/>
                                <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                                <p style="color:#666666;text-align:left;font-size:20px;"><?= $profilInfo2[2][$i]['type'] ?></p>
                                <p><?= $profilInfo2[2][$i]['text'] ?></p>
                                <p>Стоимость данного дополнения <span class="pdfbold"
                                                                      style="color:darkred;"><?= number_format(nPrice($profilInfo2[2][$i]['oneprice'],$per,1), 0, "", " ") ?></span><span
                                        style="color:darkred;"> руб.</span></p>
                            </td>
                        </tr>
                    <?php } ?>
                    <?php for ($i = 0; $i < count($profilInfo3[2]); $i++) { ?>
                        <?php if ($profilInfo3[2][$i]['text'] != $profilInfo2[2][$i]['text']) { ?>
                            <tr>
                                <td style="width:50%;">
                                    <p style="text-align:center;">
                                        <?php if ($profilInfo3[2][$i]['img'] != "" && @fopen($profilInfo3[2][$i]['img'], "r")) { ?>
                                            <img src='<?= $profilInfo3[2][$i]['img'] ?>' style="height:80px;">
                                        <?php } else { ?>
                                            <img src='img/notselected.png' style="height:80px;">
                                        <?php } ?>
                                    </p>
                                </td>
                                <td style="width:49%;">
                                    <br/>
                                    <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                                    <p style="color:#666666;text-align:left;font-size:20px;"><?= $profilInfo3[2][$i]['type'] ?></p>
                                    <p><?= $profilInfo3[2][$i]['text'] ?></p>
                                    <p>Стоимость данного дополнения <span class="pdfbold"
                                                                          style="color:darkred;"><?= number_format(nPrice($profilInfo3[2][$i]['oneprice'],$per,1), 0, "", " ") ?></span><span
                                            style="color:darkred;"> руб.</span></p>
                                </td>
                            </tr>
                        <?php } ?>
                    <?php } ?>
                </table>
            </div>
        </page>
    <?php } ?>

    <?php if ($typeFurnitura == 1 || $typeFurnitura == 2) { ?>

        <!-- ПРИЛОЖЕНИЕ ФУРНИТУРА МЕХАНИЗМЫ 1 -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;padding-top:-40px;'><a href='mailto: <?= $data['mail'] ?> '
                                                                                class="pdflink"><?= $data['mail'] ?></a>
                    </td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p style="text-align:center;font-size:18px;margin-bottom:10px;padding-top:-70px;">Альтернативная
                комплектация для<br/>коммерческого предложения<br/>№<?= $orderNumber ?></p>
            <div
                style="width:99%;height:50px;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                Фурнитура
            </div>
            <?php if ($altFi[0]["name"]) { ?>
                <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                <div
                    style="width:99%;height:50px;background-color:#666666;color:#ffffff;text-align:center;vertical-align:middle;margin:auto;font-size:22px;"><?= $altFi[0]["name"] ?></div>
                <div>
                    Характеристики: <?= !empty($altFi[0]["characteristics"]) ? fList($altFi[0]["characteristics"]) : "noDB" ?></div>
                <div>Описание: <?= !empty($altFi[0]["description"]) ? $altFi[0]["description"] : "noDB" ?></div>
                <div>Преимущества: <?= !empty($altFi[0]["benefits"]) ? fList($altFi[0]["benefits"]) : "noDB" ?></div>
                <div style="text-align:center;"><img style='height:150px;'
                                                     src='<?= $altFi[0]["imgBig"] != "" && @fopen("admin/" . $altFi[0]["imgBig"], "r") ? "admin/" . $altFi[0]["imgBig"] : "img/notselected.png" ?>'>
                </div>
                <p style="text-align:center;">Стоимость данного комплекта фурнитуры <span class="pdfbold"
                                                                                          style="color:darkred;"><?= number_format(nPrice($altFi[0]["price"],$per,1), 0, "", " ") ?></span><span
                        style="color:darkred;"> руб.</span></p>
            <?php } ?>
            <?php if ($altFi[0]["name"] != $altFa[0]["name"]) { ?>
                <?php if ($altFa[0]["name"]) { ?>
                    <br/>
                    <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                    <div
                        style="width:99%;height:50px;background-color:#666666;color:#ffffff;text-align:center;vertical-align:middle;margin:auto;font-size:22px;"><?= $altFa[0]["name"] ?></div>
                    <div>
                        Характеристики: <?= !empty($altFa[0]["characteristics"]) ? fList($altFa[0]["characteristics"]) : "noDB" ?></div>
                    <div>Описание: <?= !empty($altFa[0]["description"]) ? $altFa[0]["description"] : "noDB" ?></div>
                    <div>
                        Преимущества: <?= !empty($altFa[0]["benefits"]) ? fList($altFa[0]["benefits"]) : "noDB" ?></div>
                    <div style="text-align:center;"><img style='height:150px;'
                                                         src='<?= $altFa[0]["imgBig"] != "" && @fopen("admin/" . $altFa[0]["imgBig"], "r") ? "admin/" . $altFa[0]["imgBig"] : "img/notselected.png" ?>'>
                    </div>
                    <p style="text-align:center;">Стоимость данного комплекта фурнитуры <span class="pdfbold"
                                                                                              style="color:darkred;"><?= number_format(nPrice($altFa[0]["price"],$per,1), 0, "", " ") ?></span><span
                            style="color:darkred;"> руб.</span></p>
                <?php } ?>
            <?php } ?>
        </page>

        <!-- ПРИЛОЖЕНИЕ ФУРНИТУРА МЕХАНИЗМЫ 2 -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;padding-top:-40px;'><a href='mailto: <?= $data['mail'] ?> '
                                                                                class="pdflink"><?= $data['mail'] ?></a>
                    </td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p style="text-align:center;font-size:18px;margin-bottom:10px;padding-top:-70px;">Альтернативная
                комплектация для<br/>коммерческого предложения<br/>№<?= $orderNumber ?></p>
            <div
                style="width:99%;height:50px;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                Фурнитура
            </div>
            <?php if ($altFi[1]["name"]) { ?>
                <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                <div
                    style="width:99%;height:50px;background-color:#666666;color:#ffffff;text-align:center;vertical-align:middle;margin:auto;font-size:22px;"><?= $altFi[1]["name"] ?></div>
                <div>
                    Характеристики: <?= !empty($altFi[1]["characteristics"]) ? fList($altFi[1]["characteristics"]) : "noDB" ?></div>
                <div>Описание: <?= !empty($altFi[1]["description"]) ? $altFi[1]["description"] : "noDB" ?></div>
                <div>Преимущества: <?= !empty($altFi[1]["benefits"]) ? fList($altFi[1]["benefits"]) : "noDB" ?></div>
                <div style="text-align:center;"><img style='height:150px;'
                                                     src='<?= $altFi[1]["imgBig"] != "" && @fopen("admin/" . $altFi[1]["imgBig"], "r") ? "admin/" . $altFi[1]["imgBig"] : "img/notselected.png" ?>'>
                </div>
                <p style="text-align:center;">Стоимость данного комплекта фурнитуры <span class="pdfbold"
                                                                                          style="color:darkred;"><?= number_format(nPrice($altFi[1]["price"],$per,1), 0, "", " ") ?></span><span
                        style="color:darkred;"> руб.</span></p>
            <?php } ?>
            <?php if ($altFi[1]["name"] != $altFa[1]["name"]) { ?>
                <?php if ($altFa[1]["name"]) { ?>
                    <br/>
                    <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                    <div
                        style="width:99%;height:50px;background-color:#666666;color:#ffffff;text-align:center;vertical-align:middle;margin:auto;font-size:22px;"><?= $altFa[1]["name"] ?></div>
                    <div>
                        Характеристики: <?= !empty($altFa[1]["characteristics"]) ? fList($altFa[1]["characteristics"]) : "noDB" ?></div>
                    <div>Описание: <?= !empty($altFa[1]["description"]) ? $altFa[1]["description"] : "noDB" ?></div>
                    <div>
                        Преимущества: <?= !empty($altFa[1]["benefits"]) ? fList($altFa[1]["benefits"]) : "noDB" ?></div>
                    <div style="text-align:center;"><img style='height:150px;'
                                                         src='<?= $altFa[1]["imgBig"] != "" && @fopen("admin/" . $altFa[1]["imgBig"], "r") ? "admin/" . $altFa[1]["imgBig"] : "img/notselected.png" ?>'>
                    </div>
                    <p style="text-align:center;">Стоимость данного комплекта фурнитуры <span class="pdfbold"
                                                                                              style="color:darkred;"><?= number_format(nPrice($altFa[1]["price"],$per,1), 0, "", " ") ?></span><span
                            style="color:darkred;"> руб.</span></p>
                <?php } ?>
            <?php } ?>
        </page>

        <!-- ПРИЛОЖЕНИЕ ФУРНИТУРА ЭЛЕМЕНТЫ -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;padding-top:-40px;'><a href='mailto: <?= $data['mail'] ?> '
                                                                                class="pdflink"><?= $data['mail'] ?></a>
                    </td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p style="text-align:center;font-size:18px;margin-bottom:10px;padding-top:-70px;">Альтернативная
                комплектация для<br/>коммерческого предложения<br/>№<?= $orderNumber ?></p>
            <div
                style="width:99%;height:50px;background-color:#e5e5e5;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                Элементы фурнитуры
            </div>
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <table style="width:100%;">
                            <?php for ($i = 2; $i < 6; $i++) { ?>
                                <?php if ($altFi[$i]["name"]) { ?>
                                    <tr>
                                        <td style="width:50%;">
                                            <p style="text-align:center;">
                                                <?php if ($altFi[$i]["img"] != "" && @fopen("admin/" . $altFi[$i]["img"], "r")) { ?>
                                                    <img src='<?= "admin/" . $altFi[$i]["img"] ?>'
                                                         style="height:90px;width:90px;">
                                                <?php } else { ?>
                                                    <img src='img/notselected.png' style="height:90px;width:90px;">
                                                <?php } ?>
                                            </p>
                                        </td>
                                        <td style="width:49%;">
                                            <br/>
                                            <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                                            <p style="color:#666666;text-align:left;font-size:20px;"><?= $altFi[$i]["name"] ?></p>
                                            <p><?= $altFi[$i]["cname"] ?></p>
                                            <p>Стоимость данного элемента <span class="pdfbold"
                                                                                style="color:darkred;"><?= number_format(nPrice($altFi[$i]["price"],$per,1), 0, "", " ") ?></span><span
                                                    style="color:darkred;"> руб.</span></p>
                                        </td>
                                    </tr>
                                <?php } ?>
                            <?php } ?>
                            <?php for ($i = 2; $i < 6; $i++) { ?>
                                <?php if ($altFi[$i]["name"] != $altFa[$i]["name"]) { ?>
                                    <?php if ($altFa[$i]["name"]) { ?>
                                        <tr>
                                            <td style="width:50%;">
                                                <p style="text-align:center;">
                                                    <?php if ($altFa[$i]["img"] != "" && @fopen("admin/" . $altFa[$i]["img"], "r")) { ?>
                                                        <img src='<?= "admin/" . $altFa[$i]["img"] ?>'
                                                             style="height:90px;width:90px;">
                                                    <?php } else { ?>
                                                        <img src='img/notselected.png' style="height:90px;width:90px;">
                                                    <?php } ?>
                                                </p>
                                            </td>
                                            <td style="width:49%;">
                                                <br/>
                                                <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                                                <p style="color:#666666;text-align:left;font-size:20px;"><?= $altFa[$i]["name"] ?></p>
                                                <p><?= $altFa[$i]["cname"] ?></p>
                                                <p>Стоимость данного элемента <span class="pdfbold"
                                                                                    style="color:darkred;"><?= number_format(nPrice($altFa[$i]["price"],$per,1), 0, "", " ") ?></span><span
                                                        style="color:darkred;"> руб.</span></p>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                <?php } ?>
                            <?php } ?>
                        </table>
                    </td>
                </tr>
            </table>
        </page>

        <!-- ПРИЛОЖЕНИЕ ФУРНИТУРА АКСЕССУАРЫ 1 -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;padding-top:-40px;'><a href='mailto: <?= $data['mail'] ?> '
                                                                                class="pdflink"><?= $data['mail'] ?></a>
                    </td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p style="text-align:center;font-size:18px;margin-bottom:10px;padding-top:-70px;">Альтернативная
                комплектация для<br/>коммерческого предложения<br/>№<?= $orderNumber ?></p>
            <div
                style="width:99%;height:50px;background-color:#e5e5e5;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                Аксессуары
            </div>
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <table style="width:100%;">
                            <?php for ($i = 6; $i < count($altFi); $i++) { ?>
                                <tr>
                                    <td style="width:50%;">
                                        <p style="text-align:center;">
                                            <?php if ($altFi[$i]["img"] != "" && @fopen("admin/" . $altFi[$i]["img"], "r")) { ?>
                                                <img src='<?= "admin/" . $altFi[$i]["img"] ?>' style="height:80px;">
                                            <?php } else { ?>
                                                <img src='img/notselected.png' style="height:80px;">
                                            <?php } ?>
                                        </p>
                                    </td>
                                    <td style="width:49%;">
                                        <br/>
                                        <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                                        <p style="color:#666666;text-align:left;font-size:20px;"><?= $altFi[$i]["name"] ?></p>
                                        <p><?= $altFi[$i]["cname"] ?></p>
                                        <p>Стоимость данного элемента <span class="pdfbold"
                                                                            style="color:darkred;"><?= number_format(nPrice($altFi[$i]["price"],$per,1), 0, "", " ") ?></span><span
                                                style="color:darkred;"> руб.</span></p>
                                    </td>
                                </tr>
                            <?php } ?>
                            <?php for ($i = 6; $i < count($altFa); $i++) { ?>
                                <?php if ($altFi[$i]["name"] != $altFa[$i]["name"]) { ?>
                                    <?php if ($altFa[$i]["name"]) { ?>
                                        <tr>
                                            <td style="width:50%;">
                                                <p style="text-align:center;">
                                                    <?php if ($altFa[$i]["img"] != "" && @fopen("admin/" . $altFa[$i]["img"], "r")) { ?>
                                                        <img src='<?= "admin/" . $altFa[$i]["img"] ?>'
                                                             style="height:80px;">
                                                    <?php } else { ?>
                                                        <img src='img/notselected.png' style="height:80px;">
                                                    <?php } ?>
                                                </p>
                                            </td>
                                            <td style="width:49%;">
                                                <br/>
                                                <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                                                <p style="color:#666666;text-align:left;font-size:20px;"><?= $altFa[$i]["name"] ?></p>
                                                <p><?= $altFa[$i]["cname"] ?></p>
                                                <p>Стоимость данного элемента <span class="pdfbold"
                                                                                    style="color:darkred;"><?= number_format(nPrice($altFa[$i]["price"],$per,1), 0, "", " ") ?></span><span
                                                        style="color:darkred;"> руб.</span></p>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                <?php } ?>
                            <?php } ?>
                        </table>
                    </td>
                </tr>
            </table>
        </page>

    <?php } ?>

    <?php if (in_array($typeFurnitura, array(0, 3, 4))) { ?>
        <!-- ПРИЛОЖЕНИЕ АЛЬТЕРНАТИВНАЯ ФУРНИТУРА -->
        <page backtop="10px" backbottom="10px" backleft="10px" backright="15px">
            <img style='width: 100%;height: 70px;' src='img/shapka.png'>
            <table style="width: 100%;margin-top: -3px;">
                <tr>
                    <td style='width:18%;text-align:left;padding-top:-40px;'><a href='mailto: <?= $data['mail'] ?> '
                                                                                class="pdflink"><?= $data['mail'] ?></a>
                    </td>
                    <td style='width:56%;'></td>
                    <td style='width:14%;text-align:center;font-size:15px;'></td>
                    <td style='width:12%;'>
                        <div class="pdfpagenumberarea"><span class="pdfpagenumber">[[page_cu]]</span></div>
                    </td>
                </tr>
            </table>
            <p style="text-align:center;font-size:18px;margin-bottom:10px;padding-top:-70px;">Альтернативная
                комплектация для<br/>коммерческого предложения<br/>№<?= $orderNumber ?></p>
            <div
                style="width:99%;height:50px;background-color:#e5e5e5;color:#666666;text-align:center;vertical-align:middle;margin:auto;font-size:22px;">
                Фурнитура
            </div>
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <table style="width:100%;">
                            <?php for ($i = 0; $i < count($altFi); $i++) { ?>
                                <?php if ($altFi[$i]["name"]) { ?>
                                    <tr>
                                        <td style="width:50%;">
                                            <p style="text-align:center;">
                                                <?php if ($altFi[$i]["img"] != "" && @fopen("admin/" . $altFi[$i]["img"], "r")) { ?>
                                                    <img src='<?= "admin/" . $altFi[$i]["img"] ?>'
                                                         style="height:90px;width:90px;">
                                                <?php } else { ?>
                                                    <img src='img/notselected.png' style="height:90px;width:90px;">
                                                <?php } ?>
                                            </p>
                                        </td>
                                        <td style="width:49%;">
                                            <br/>
                                            <p class="pdfbold" style="color:red;font-size:16px;">эконом</p>
                                            <p style="color:#666666;text-align:left;font-size:20px;"><?= $altFi[$i]["name"] ?></p>
                                            <p><?= $altFi[$i]["cname"] ?></p>
                                            <p>Стоимость данного элемента <span class="pdfbold"
                                                                                style="color:darkred;"><?= number_format(nPrice($altFi[$i]["price"],$per,1), 0, "", " ") ?></span><span
                                                    style="color:darkred;"> руб.</span></p>
                                        </td>
                                    </tr>
                                <?php } ?>
                            <?php } ?>
                            <?php for ($i = 0; $i < count($altFa); $i++) { ?>
                                <?php if ($altFi[$i]["name"] != $altFa[$i]["name"]) { ?>
                                    <?php if ($altFa[$i]["name"]) { ?>
                                        <tr>
                                            <td style="width:50%;">
                                                <p style="text-align:center;">
                                                    <?php if ($altFa[$i]["img"] != "" && @fopen("admin/" . $altFa[$i]["img"], "r")) { ?>
                                                        <img src='<?= "admin/" . $altFa[$i]["img"] ?>'
                                                             style="height:90px;width:90px;">
                                                    <?php } else { ?>
                                                        <img src='img/notselected.png' style="height:90px;width:90px;">
                                                    <?php } ?>
                                                </p>
                                            </td>
                                            <td style="width:49%;">
                                                <br/>
                                                <p class="pdfbold" style="color:red;font-size:16px;">премиум</p>
                                                <p style="color:#666666;text-align:left;font-size:20px;"><?= $altFa[$i]["name"] ?></p>
                                                <p><?= $altFa[$i]["cname"] ?></p>
                                                <p>Стоимость данного элемента <span class="pdfbold"
                                                                                    style="color:darkred;"><?= number_format(nPrice($altFa[$i]["price"],$per,1), 0, "", " ") ?></span><span
                                                        style="color:darkred;"> руб.</span></p>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                <?php } ?>
                            <?php } ?>
                        </table>
                    </td>
                </tr>
            </table>
        </page>
    <?php } ?>

    <?php
    $content = ob_get_clean();
    require_once('html2pdf/html2pdf.class.php');
    try {
        $html2pdf = new HTML2PDF('P', 'A4', 'en', true, 'UTF-8', array(0, 0, 0, 0));
        $html2pdf->addFont("times", "", "times");
        $html2pdf->addFont("freesans", "", "freesans");
        $html2pdf->addFont("freesansb", "", "freesansb");
        $html2pdf->addFont("freesansi", "", "freesansi");
        $html2pdf->addFont("freesansbi", "", "freesansbi");
        $html2pdf->setDefaultFont("freesans");
        $html2pdf->writeHTML($content);
        ob_end_clean();
        $html2pdf->Output('commercial_offer.pdf');
        $html2pdf->Output('./commercial_offer.pdf','F');
    } catch (HTML2PDF_exception $e) {
        echo $e;
        exit;
    }
} else {
    $content = ob_get_clean();
    require_once('html2pdf/html2pdf.class.php');
    try {
        $html2pdf = new HTML2PDF('P', 'A4', 'en', true, 'UTF-8', array(0, 0, 0, 0));
        $html2pdf->setDefaultFont("freesans");
        $html2pdf->writeHTML("<h1 align=\"center\">Проверьте введенные данные.</h1>");
        ob_end_clean();
        $html2pdf->Output('kp.pdf');
    } catch (HTML2PDF_exception $e) {
        echo $e;
        exit;
    }
}
?>
