<?php

include_once 'db_driver.php';


$DB = new DB();

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

if (isset($_GET['add'])) {


    switch ($_GET['add']) {
        case 'add':
            /** @var TYPE_NAME $ */
            $DB->query_no_var("INSERT INTO profile(id, name, img, formula, max, paz, steklo, penal, height, model, int, price, priceK, view,priceDekor,priceColor,priceAnod,characteristics,description,benefits,doubleFilling,thicknessSteklo,thicknessMaterials)
                                VALUES (NULL ,'{$_POST['name']}','{$_POST['image']}',1,'{$_POST['max']}','{$_POST['paz']}',
                                '{$_POST['steklo']}','{$_POST['penal']}','{$_POST['height']}','{$_POST['model']}','{$_POST['int']}',{$_POST['price']},0,
                                {$_POST['view']},{$_POST['priceDekor']},{$_POST['priceColor']},{$_POST['priceAnod']},'{$_POST['characteristics']}',
                                '{$_POST['description']}','{$_POST['benefits']}',{$_POST['doubleFilling']},' ',' ')");
            echo "GOOD";
            break;
        case 'add2':
            $id = tabelid($_POST['id']);
            $DB->query_no_var("INSERT INTO `{$id}` (`id`, `name`, `price`, `img`) VALUES (NULL, '{$_POST['name']}', '{$_POST['price']}', '{$_POST['image']}')");
            $item = $DB->query("SELECT *FROM {$id} WHERE name LIKE '{$_POST['name']}'");
            unset($_POST['id']);
            unset($_POST['image']);
            unset($_POST['price']);
            foreach ($_POST as $key => $value) {
                $DB->query_no_var("INSERT INTO profil_{$id} (id_profil, id_t) VALUES ({$value},{$item[0]['id']})");
            }
            echo json_encode($item);
            break;
        case 'add3':
            $DB->query("INSERT INTO `tabel4` (`id`, `name`,`img`) VALUES (NULL, '{$_POST['name']}', '{$_POST['image']}')");
            echo json_encode($_POST);
            break;
        case 'add4':
            $password = password_hash($_POST['pass'], PASSWORD_BCRYPT);
            $DB->query("INSERT INTO `users` (`id`, `Name`, `Pass`, `hash`) VALUES (NULL, '{$_POST['name']}','{$_POST['pass']}','{$password}')");
            echo "Добавлено";
            break;
        case 'add5':
            $DB->query_no_var("INSERT INTO `formula` (`id`, `name`, `var`, `description`) VALUES (NULL, '{$_POST['name']}', '{$_POST['var']}', '{$_POST['description']}')");
            echo "Формула добавлена";
            break;
        case 'add6':
            $DB->query_no_var("INSERT INTO `categorydekor` (`id`, `name`) VALUES (NULL, '{$_POST['name']}')");
            echo "Add";
            break;
        case 'add7':
            $DB->query_no_var("UPDATE `categorydekor` SET `name` = '{$_POST['name']}' WHERE `categorydekor`.`id` = {$_POST['id']}");
            break;
        case 'add8':
            $DB->query_no_var("INSERT INTO `carcastype` (`id`, `name`, `price`, `img`) VALUES  (NULL, '{$_POST['name']}', '{$_POST['price']}', '{$_POST['image']}')");
            $item = $DB->query("SELECT *FROM carcastype WHERE name LIKE '{$_POST['name']}'");
            unset($_POST['id']);
            unset($_POST['image']);
            unset($_POST['price']);
            foreach ($_POST as $key => $value) {
                $DB->query_no_var("INSERT INTO profil_type (id_profil, id_t) VALUES ({$value},{$item[0]['id']})");
            }
            echo "Добавлено";
            break;
        case 'add9':
            $DB->query_no_var("INSERT INTO tabel2 (`id`, `name`, `price`, `img`) VALUES  (NULL, '{$_POST['name']}', '{$_POST['price']}', '{$_POST['image']}')");
            $item = $DB->query("SELECT *FROM tabel2 WHERE name LIKE '{$_POST['name']}'");
            unset($_POST['id']);
            unset($_POST['name']);
            unset($_POST['image']);
            foreach ($_POST as $key => $value) {
                $DB->query_no_var("INSERT INTO profil_cap (id_profil, id_c) VALUES ({$value},{$item[0]['id']})");
            }
            echo "Добавлено";
            break;
        case 'add10':
            $DB->query_no_var("INSERT INTO Peremochki (id, name, img, max, paz, steklo, penal, height,price,priceK,priceDekor,priceColor,priceAnod,width,thickness) VALUES (NULL ,'{$_POST['name']}', '{$_POST['image']}', '{$_POST['max']}', '{$_POST['paz']}', '{$_POST['steklo']}', '{$_POST['penal']}', '{$_POST['height']}',{$_POST['price']},{$_POST['priceK']},{$_POST['priceDekor']},{$_POST['priceColor']},{$_POST['priceAnod']},{$_POST['width']},{$_POST['thickness']})");
            $item = $DB->query("SELECT *FROM Peremochki WHERE name LIKE '{$_POST['name']}'");
            unset($_POST['id']);
            unset($_POST['image']);
            unset($_POST['name']);
            unset($_POST['formula']);
            unset($_POST['max']);
            unset($_POST['paz']);
            unset($_POST['steklo']);
            unset($_POST['penal']);
            unset($_POST['height']);
            unset($_POST['price']);
            unset($_POST['priceK']);
            unset($_POST['priceDekor']);
            unset($_POST['priceColor']);
            unset($_POST['priceAnod']);
            unset($_POST['width']);
            unset($_POST['thickness']);
            echo json_encode($_POST);
            foreach ($_POST as $key => $value) {
                $DB->query_no_var("INSERT INTO profil_h (id_profil, id_h) VALUES ({$value},{$item[0]['id']})");
            }
            break;
        case 'add11':
            $DB->query_no_var("INSERT INTO view_profil (id, name) VALUES (NULL ,'{$_POST['name']}')");
            break;
        case 'addfurnitura':
            $DB->query_no_var("INSERT INTO furnitura (
                cat, name, img, imgBig, characteristics, description, benefits, price, formula
            ) VALUES (
                '" . $_POST['cat'] . "',
                '" . $_POST['name'] . "',
                '" . $_POST['img'] . "',
                '" . $_POST['imgBig'] . "',
                '" . $_POST['characteristics'] . "',
                '" . $_POST['description'] . "',
                '" . $_POST['benefits'] . "',
                '" . $_POST['price'] . "',
                '" . $_POST['formula'] . "'
            )");
            $item = $DB->query("SELECT id FROM furnitura WHERE name LIKE '{$_POST['name']}' AND cat = {$_POST['cat']}");
            unset($_POST['cat']);
            unset($_POST['name']);
            unset($_POST['img']);
            unset($_POST['imgBig']);
            unset($_POST['characteristics']);
            unset($_POST['description']);
            unset($_POST['benefits']);
            unset($_POST['price']);
            unset($_POST['formula']);
            echo json_encode($_POST);
            foreach ($_POST as $key => $value) {
                $DB->query_no_var("INSERT INTO furniturapro (pfid,ppid) VALUES ({$item[0]['id']},{$value})");
            }
            break;
        case 'editfurnitura':
            $DB->query_no_var("UPDATE furnitura SET
                name='" . $_POST['name'] . "',
                img='" . $_POST['img'] . "',
                imgBig='" . $_POST['imgBig'] . "',
                characteristics='" . $_POST['characteristics'] . "',
                description='" . $_POST['description'] . "',
                benefits='" . $_POST['benefits'] . "',
                price='" . $_POST['price'] . "',
                formula='" . $_POST['formula'] . "'
            WHERE `id`='" . $_POST['id'] . "'");
            break;
        case 'preditfurnitura':
            echo json_encode($DB->query("SELECT * FROM furnitura WHERE `id`='" . $_POST['id'] . "'"));
            break;
        case 'addcalcmanager':
            $text = htmlspecialchars($_POST['text'], ENT_QUOTES);
            $SQL = "INSERT INTO calcmanagers (name, mail, phone,text,pass) VALUES (
                '" . $_POST['name'] . "',
                '" . $_POST['mail'] . "',
                '" . $_POST['phone'] . "',
                '" . $text . "', 
                '" . $_POST['pass'] . "'
            )";
            $DB->query_no_var($SQL);
            echo $SQL;
            break;
        case 'addtemp':
            $text = htmlspecialchars($_POST['text'], ENT_QUOTES);
            $SQL = "INSERT INTO temp (name, user,text,theme,code) VALUES (
                '" . $_POST['name'] . "',
                '" . $_POST['manager'] . "',
                '" . $text . "',
                '" . $_POST['theme'] . "',
                '" . $_POST['code'] . "'
            )";
            $DB->query_no_var($SQL);
            echo $SQL;
            break;
        case 'editcalcmanager':
            $text = htmlspecialchars($_POST['text'], ENT_QUOTES);
            $sql = "UPDATE calcmanagers SET
                name='" . $_POST['name'] . "',
                mail='" . $_POST['mail'] . "',
                phone='" . $_POST['phone'] . "',
                text='" . $text . "',
                pass='" . $_POST['pass'] . "'
                WHERE id='" . $_POST['id'] . "'";
            $DB->query_no_var($sql);
            echo $_POST['text'];
            break;
        case 'preditcalcmanager':
            $item = $DB->query("SELECT * FROM calcmanagers WHERE id='" . $_POST['id'] . "'");
            $item[0]['text'] = str_replace("\"", "}", htmlspecialchars_decode($item[0]['text'], ENT_QUOTES));
            echo json_encode($item);
            break;
        case 'addmaterialscategory':
            $DB->query_no_var("INSERT INTO `categorymaterials` (`id`, `name`) VALUES (NULL, '{$_POST['name']}')");
            echo "Add";
            break;
        case 'editmaterialscategory':
            $DB->query_no_var("UPDATE `categorymaterials` SET `name` = '{$_POST['name']}' WHERE `categorymaterials`.`id` = {$_POST['id']}");
            break;
        case 'add12':
            $DB->query_no_var("INSERT INTO formula (`id`, `name`,formula) VALUES (NULL, '{$_POST['name']}', '{$_POST['formula']}')");
            $item = $DB->query("SELECT * FROM formula WHERE `name` = '{$_POST['name']}'");
            echo json_encode($item);
            break;
        case 'add13':
            $DB->query_no_var("INSERT INTO SupplementsM (`id`, `name`,type,typeprice) VALUES (NULL, '{$_POST['name']}', '{$_POST['type']}', '{$_POST['typeprice']}')");
            echo 'Добавлено';
            break;
        case 'add14':
            $DB->query_no_var("INSERT INTO Supplements (`id`,patern_id, `name`,img,price) VALUES (NULL,'{$_POST['parent_id']}', '{$_POST['name']}',  '{$_POST['img']}',  '{$_POST['price']}')");

            $item = $DB->query("SELECT id FROM Supplements WHERE name LIKE '{$_POST['name']}'");

            unset($_POST['parent_id']);
            unset($_POST['name']);
            unset($_POST['img']);
            unset($_POST['price']);

            foreach ($_POST['form'] as $value) {
                $DB->query_no_var("INSERT INTO ProfilAndSupplements (Profil,Supplements) VALUES ('{$value}','{$item[0]['id']}')");
            }
            echo 'Добавлено';

            break;
    }
}

if (isset($_GET['delete'])) {
    switch ($_GET['delete']) {
        case 'delete':
            $DB->query("DELETE FROM `profile` WHERE `profile`.`id` = {$_POST['id']}");
            break;
        case 'delete2':
            $id = tabelid($_POST['stol']);
            $DB->query("DELETE FROM `{$id}` WHERE `{$id}`.`id` = {$_POST['id']}");
            break;
        case 'delete3':
            $DB->query("DELETE FROM `users` WHERE `users`.`id` = {$_POST['id']}");
            break;
        case 'delete4':
            $DB->query("DELETE FROM decor WHERE id = {$_POST['id']}");
            echo $_POST['id'];
            break;
        case 'delete5':
            $DB->query("DELETE FROM `categorydekor` WHERE `categorydekor`.`id` = {$_POST['id']}");
            break;
        case 'delete6':
            $DB->query("DELETE FROM `carcastype` WHERE `carcastype`.`id` = {$_POST['id']}");
            break;
        case 'delete7':
            $DB->query("DELETE FROM tabel2 WHERE tabel2.`id` = {$_POST['id']}");
            break;
        case 'delete8':
            $DB->query("DELETE FROM Peremochki WHERE id=" . $_POST['id']);
            $DB->query("DELETE FROM profil_h WHERE id_h=" . $_POST['id']);
            break;
        case 'delete9':
            $DB->query("DELETE FROM view_profil WHERE id=" . $_POST['id']);
            echo 'GOOD';
            break;
        case 'deletefurnitura':
            $DB->query("DELETE FROM furnitura WHERE id=" . $_POST['id']);
            $DB->query("DELETE FROM furniturapro WHERE pfid=" . $_POST['id']);
            break;
        case 'deletecalcmanager':
            $DB->query("DELETE FROM calcmanagers WHERE id=" . $_POST['id']);
            break;
        case 'delete10':
            $DB->query("DELETE FROM materials WHERE id = {$_POST['id']}");
            echo $_POST['id'];
            break;
        case 'deletecategorymaterials':
            $DB->query("DELETE FROM `categorymaterials` WHERE `categorymaterials`.`id` = {$_POST['id']}");
            break;
        case 'delete11':
            $DB->query("DELETE FROM formula WHERE formula.`id` = {$_POST['id']}");
            break;
        case 'delete12':
            $DB->query_no_var("DELETE FROM SupplementsM WHERE SupplementsM.`id` = {$_POST['id']}");
            break;
        case 'delete13':
            $DB->query_no_var("DELETE FROM Supplements WHERE Supplements.`id` = {$_POST['id']}");
            break;
        case 'deltemp':
            $DB->query_no_var("DELETE FROM temp WHERE temp.`id` = {$_POST['id']}");
            break;
    }
}
if (isset($_POST['select'])) {
    $res = $DB->query("SELECT * FROM " . $_POST['select']);
    echo json_encode($res);
}
if (isset($_POST['h'])) {
    $res = $DB->query("SELECT * FROM `profile` WHERE view={$_POST['id']} AND `max`  >={$_POST['h']}");
    echo json_encode($res);
}
if (isset($_GET['select'])) {
    switch ($_GET['select']) {
        case '1':
            $item = $DB->query("SELECT * FROM `profile` WHERE `id` = {$_POST['id']}");
            echo json_encode($item);
            break;
        case '2':
            $id = tabelid($_POST['stol']);
            $item = $DB->query("SELECT * FROM `{$id}` WHERE `id` = {$_POST['id']}");
            echo json_encode($item);
            break;
        case '3':
            $item = $DB->query("SELECT * FROM `tabel4` WHERE `id` = {$_POST['id']}");
            echo json_encode($item);
            break;
        case '4':
            $item = $DB->query("SELECT * FROM `users` WHERE `id` = {$_POST['id']}");
            echo json_encode($item);
            break;
        case '5':
            $item = $DB->query("SELECT * FROM `formula` WHERE `var` = '{$_POST['var']}'");
            echo json_encode($item);
            break;
        case '6':
            $item = $DB->query("SELECT * FROM `categorydekor` WHERE `id` = '{$_POST['id']}'");
            echo json_encode($item);
            break;
        case '7':
            $item = $DB->query("SELECT * FROM `carcastype` WHERE `id` = '{$_POST['id']}'");
            echo json_encode($item);
            break;
        case '8':
            $item = $DB->query("SELECT * FROM `cap` WHERE `id` = '{$_POST['id']}'");
            echo json_encode($item);
            break;
        case '9':
            $item = $DB->query("SELECT *FROM Peremochki WHERE id=" . $_POST['id']);
            echo json_encode($item);
            break;
        case '10':
            $item = $DB->query("SELECT * FROM `categorymaterials` WHERE `id` = '{$_POST['id']}'");
            echo json_encode($item);
            break;
        case '11':
            $item = $DB->query("SELECT *FROM SupplementsM WHERE id='{$_POST['id']}'");
            echo json_encode($item);
            break;
        case '12':
            $item = $DB->query("SELECT *FROM Supplements WHERE id='{$_POST['id']}'");
            echo json_encode($item);
            break;
    }
}
if (isset($_GET['dekor'])) {
    $DB->query_no_var("INSERT INTO `decor` (`id`, `parent_id`, `name`, `img`) VALUES (NULL, '{$_POST['count']}', '{$_POST['name']}', '{$_POST['image']}')");
    echo json_encode($_POST);
}
if (isset($_GET['getAllDekor'])) {
    $item = $DB->query("SELECT * FROM decor");
    echo json_encode($item);
}
if (isset($_GET['getDekor'])) {
    $item = $DB->query("SELECT * FROM decor WHERE  id={$_POST['id']} AND parent_id = {$_POST['count']}");
    echo json_encode($item);
}
if (isset($_GET['getDekor1'])) {
    $item = $DB->query("SELECT * FROM `decor` WHERE `id` = {$_POST['id']}");
    echo json_encode($item);
}
if (isset($_GET['getProfile'])) {
    $item = $DB->query("SELECT * FROM `profile`");
    echo json_encode($item);
}
if (isset($_GET['getProfile1'])) {
    $item = $DB->query("SELECT * FROM `profile` WHERE `id` = {$_POST['id']}");
    echo json_encode($item);
}
if (isset($_GET['fullgetdekor'])) {
    $item = $DB->query("SELECT * FROM `decor` WHERE `parent_id` = " . $_POST['id']);
    echo json_encode($item);
}
if (isset($_POST['data'])) {
    $item = $DB->query("SELECT *FROM view_profil");
    echo json_encode($item);
}
if (isset($_POST['getProfilName'])) {
    $item = $DB->query("SELECT *FROM profile WHERE name LIKE '{$_POST['getProfilName']}'");
    echo json_encode($item);
}
if (isset($_POST['getCapName'])) {
    $item = $DB->query("SELECT  *FROM carcastype WHERE name LIKE '{$_POST['getCapName']}'");
    echo json_encode($item);
}
if (isset($_POST['getZaglushkaVPaz'])) {
    $item = $DB->query("SELECT  *FROM tabel3 WHERE name LIKE '{$_POST['getZaglushkaVPaz']}'");
    echo json_encode($item);
}
if (isset($_POST['getPeremuchkaName'])) {
    $item = $DB->query("SELECT *FROM Peremochki WHERE name LIKE '{$_POST['getPeremuchkaName']}'");
    echo json_encode($item);
}
if (isset($_POST['getZaglushkaTorcevayaName'])) {
    $item = $DB->query("SELECT *FROM tabel2 WHERE name LIKE '{$_POST['getZaglushkaTorcevayaName']}'");
    echo json_encode($item);
}
if (isset($_POST['getUplotnitelName'])) {
    $item = $DB->query("SELECT *FROM tabel1 WHERE name LIKE '{$_POST['getUplotnitelName']}'");
    echo json_encode($item);
}
if (isset($_GET['materials'])) {
    $DB->query_no_var("INSERT INTO `materials` (`id`, `name`, `img`, `price`, `type`, `thickness`, `zakalka`, `characteristics`, `description`, `benefits`) VALUES (NULL, '{$_POST['name']}', '{$_POST['image']}', '{$_POST['price']}', '{$_POST['type']}', '{$_POST['thickness']}', '{$_POST['zakalka']}', '{$_POST['characteristics']}', '{$_POST['description']}', '{$_POST['benefits']}')");
    echo json_encode($_POST);
}
if (isset($_GET['getMaterials'])) {
    $item = $DB->query("SELECT * FROM materials WHERE  id={$_POST['id']} AND type = {$_POST['type']}");
    echo json_encode($item);
}
if (isset($_GET['fullgetmaterials'])) {
    $item = $DB->query("SELECT * FROM `materials` WHERE `type` = " . $_POST['id']);
    echo json_encode($item);
}
if (isset($_GET['getMaterials1'])) {
    $item = $DB->query("SELECT * FROM `materials` WHERE `id` = {$_POST['id']}");
    echo json_encode($item);
}
if (isset($_GET['getAllMaterials'])) {
    $item = $DB->query("SELECT * FROM materials ORDER BY SUBSTR(price, ';', 1) DESC");
    echo json_encode($item);
}

if (isset($_GET["selectFurnitura"])) {
    $items = $DB->query("SELECT furnitura.id,
                                furnitura.cat,
                                furnitura.name,
                                furnitura.img,
                                furnitura.imgBig,
                                furnitura.characteristics,
                                furnitura.description,
                                furnitura.benefits,
                                furnitura.price,
                                furnitura.formula,
                                furnituracat.cid,
                                furnituracat.cview,
                                furnituracat.ctype,
                                furnituracat.cname
                           FROM furnitura
                          INNER JOIN furnituracat
                          WHERE furnituracat.cid = furnitura.cat
                          ORDER BY furnitura.price DESC
    ");
    echo json_encode($items);
}

if (isset($_GET["selectFurnituraById"])) {
    $items = $DB->query("SELECT furnitura.id,
                                furnitura.cat,
                                furnitura.name,
                                furnitura.img,
                                furnitura.imgBig,
                                furnitura.characteristics,
                                furnitura.description,
                                furnitura.benefits,
                                furnitura.price,
                                furnitura.formula,
                                furnituracat.cid,
                                furnituracat.cview,
                                furnituracat.ctype,
                                furnituracat.cname
                           FROM furnitura
                          INNER JOIN profile
                          INNER JOIN furnituracat
                          WHERE furnitura.id = " . $_POST['id'] . "
                            AND furnitura.cat = furnituracat.cid
    ");
    echo json_encode($items);
}

if (isset($_GET["selectCalcManagers"])) {
    $items = $DB->query("SELECT * FROM calcmanagers");
    echo json_encode($items);
}

if (isset($_GET["selectFurnituraStart"])) {
    $items = $DB->query("SELECT cat, name, img, price, description FROM furnitura ORDER BY price DESC");
    echo json_encode($items);
}

if (isset($_GET["selectFurnituraPrice"])) {
    $items = $DB->query("SELECT price, formula FROM furnitura WHERE cat = " . $_POST['cat'] . " AND name LIKE '" . $_POST['name'] . "'");
    echo json_encode($items);
}

if (isset($_GET["selectProfileId"])) {
    $items = $DB->query("SELECT id FROM profile WHERE name LIKE '" . $_POST['name'] . "'");
    echo json_encode($items);
}

if (isset($_GET["getProfilesByPriceSort"])) {
    $items = $DB->query("SELECT * FROM profile ORDER BY price ASC");
    echo json_encode($items);
}
if (isset($_GET['upload'])) {
    switch ($_GET['upload']) {
        case 'profil': {
            $DB->query_no_var("UPDATE profile SET name='" . $_POST['name'] . "',img='" . $_POST['img'] . "',max=" . $_POST['max'] . ",paz=" . $_POST['paz'] . ",steklo=" . $_POST['steklo'] . ",penal=" . $_POST['penal'] . ",height=" . $_POST['height'] .
                ",model='" . $_POST['model'] . "',int='" . $_POST['int'] . "',price=" . $_POST['price'] . ",priceK=" . 0 . ",priceDekor=" . $_POST['priceDekor'] . ",priceAnod=" . $_POST['priceAnod'] . ",priceColor=" . $_POST['priceColor'] . "
  ,characteristics='" . $_POST['characteristics'] . "',description='" . $_POST['description'] . "',benefits='" . $_POST['benefits'] . "',doubleFilling=" . $_POST['doubleFilling'] . " WHERE id =" . $_POST['id']);
            echo $_POST['int'];
            break;
        }
        case 'Peremochki': {
            $DB->query_no_var("UPDATE Peremochki SET name='" . $_POST['name'] . "',img='" . $_POST['img'] . "',max=" . $_POST['max'] . ",paz=" . $_POST['paz'] . ",steklo=" . $_POST['steklo'] . ",penal=" . $_POST['penal'] . ",height=" . $_POST['height'] . ",price=" . $_POST['price'] . ",priceK=0,priceColor=" . $_POST['priceColor'] . ",priceAnod=" . $_POST['priceAnod'] . ",priceDekor=" . $_POST['priceDekor'] . ",width=" . $_POST['width'] . ",thickness=" . $_POST['thickness'] . " WHERE id=" . $_POST['id']);
            echo json_encode($_POST);
            break;
        }
        case 'Matireals': {
            $DB->query_no_var("UPDATE materials SET name='" . $_POST['name'] . "',img='" . $_POST['img'] . "',thickness='" . $_POST['thickness'] . "',zakalka='" . $_POST['zakalka'] . "',characteristics='" . $_POST['characteristics'] . "',description='" . $_POST['description'] . "',benefits='" . $_POST['benefits'] . "',price='" . $_POST['price'] . "' WHERE id=" . $_POST['id']);
            echo json_encode($_POST);
            break;
        }
        case 'Hoho': {
            $DB->query_no_var("UPDATE SupplementsM SET name='" . $_POST['name'] . "',type='" . $_POST['type'] . "',typeprice='" . $_POST['typeprice'] . "'WHERE id=" . $_POST['id']);
            echo 'Hoho';
            break;
        }
        case 'Hoho1': {
            $DB->query_no_var("UPDATE Supplements SET name='" . $_POST['name'] . "',price='" . $_POST['price'] . "',img='" . $_POST['img'] . "'WHERE id=" . $_POST['id']);
            $DB->query_no_var("DELETE FROM ProfilAndSupplements WHERE Supplements ='{$_POST['id']}'");
            unset($_POST['parent_id']);
            unset($_POST['name']);
            unset($_POST['img']);
            unset($_POST['price']);

            foreach ($_POST['form'] as $value) {
                $DB->query_no_var("INSERT INTO ProfilAndSupplements (Profil,Supplements) VALUES ('{$value}','{$_POST['id']}')");
            }
            echo 'Hoho';
            break;
        }
    }

}
if (isset($_POST['getFormuls'])) {
    $itema = $DB->query("SELECT * FROM formula /*WHERE name LIKE '{$_POST['getFormuls']}'*/");
    echo json_encode($itema);
}
if (isset($_POST['getSupplements'])) {
    $itema = $DB->query("SELECT * FROM Supplements /*WHERE name LIKE */");
    echo json_encode($itema);
}
if (isset($_POST['getSupplementsm'])) {
    $itema = $DB->query("SELECT * FROM SupplementsM /*WHERE name LIKE */");
    echo json_encode($itema);
}
if (isset($_POST['getProfilAndSupplements'])) {
    $itema = $DB->query("SELECT * FROM ProfilAndSupplements ");
    echo json_encode($itema);
}
if (isset($_POST['getProfil'])) {
    $itema = $DB->query("SELECT * FROM profile ");
    echo json_encode($itema);
}
if (isset($_POST['getPeremochki'])) {
    $itema = $DB->query("SELECT * FROM Peremochki ");
    echo json_encode($itema);
}
if (isset($_POST['getprofil_h'])) {
    $itema = $DB->query("SELECT * FROM profil_h ");
    echo json_encode($itema);
}

if (isset($_GET['furnitura'])) {
    $type = serialize($_POST['type']);
    $profiles = serialize($_POST['profiles']);
    $materials = serialize($_POST['materials']);
    $option = serialize($_POST['option']);
    if ($_POST['checked'] == 'true') {
        $_POST['checked'] = 1;
    } else {
        $_POST['checked'] = 0;
    }
    $DB->query_no_var("INSERT INTO castomfurn (id, name, type, profiles, materials, option, formula,accessory)
    VALUES (NULL ,'{$_POST['name']}','{$type}','{$profiles}','{$materials}','{$option}','{$_POST['formula']}',{$_POST['checked']})");
}
if (isset($_GET['newF'])) {
    $other = serialize($_POST);
    $DB->query_no_var("INSERT INTO itemsnewfurn (id, other, parent_id) VALUES (NULL ,'{$other}','{$_GET['newF']}')");
}
if (isset($_GET['delfurn'])) {
    $DB->query_no_var("DELETE FROM castomfurn WHERE castomfurn.`id` = {$_GET['delfurn']}");
}
if (isset($_GET['delfurn1'])) {
    $n = $_GET['delfurn1'];
    $items = $DB->query("SELECT * FROM itemsnewfurn WHERE parent_id = {$_GET['id']}");
    $DB->query_no_var("DELETE FROM itemsnewfurn WHERE id = {$items[$n]['id']}");
}
if (isset($_GET['editfurn'])) {
    $item = $DB->query("SELECT *FROM castomfurn WHERE id ={$_POST['id']}");
    $item[0]['materials'] = unserialize($item[0]['materials']);
    $item[0]['option'] = unserialize($item[0]['option']);
    $item[0]['profiles'] = unserialize($item[0]['profiles']);
    $item[0]['type'] = unserialize($item[0]['type']);
    echo json_encode($item);
}
if (isset($_GET['editfurn1'])) {
    $type = serialize($_POST['type']);
    $profiles = serialize($_POST['profiles']);
    $materials = serialize($_POST['materials']);
    $option = serialize($_POST['option']);
    if ($_POST['checked'] == 'true') {
        $_POST['checked'] = 1;
    } else {
        $_POST['checked'] = 0;
    }
    $DB->query_no_var("UPDATE  castomfurn SET  name ='{$_POST['name']}', type ='{$type}', profiles='{$profiles}', materials='{$materials}', option ='{$option}', formula='{$_POST['formula']}',accessory={$_POST['checked']} WHERE id ={$_GET['editfurn1']}");
}
if (isset($_GET['editfurnnew'])) {
    $other = serialize($_POST);
    $DB->query_no_var("UPDATE itemsnewfurn  SET other='{$other}'WHERE id={$_GET['editfurnnew']}");
}
if (isset($_GET['getcastomfurn'])) {
    $items = $DB->query('SELECT * FROM castomfurn');
    foreach ($items as &$i) {
        $i['type'] = unserialize($i['type']);
        $i['profiles'] = unserialize($i['profiles']);
        $i['materials'] = unserialize($i['materials']);
        $i['option'] = unserialize($i['option']);
    }
    echo json_encode($items);
}
if (isset($_GET['getitemsnewfurn'])) {
    $items = $DB->query('SELECT * FROM itemsnewfurn');
    foreach ($items as &$i) {
        $i['other'] = unserialize($i['other']);
    }
    echo json_encode($items);
}
if (isset($_GET['expm'])) {
    $arr = serialize($_POST['arr']);
    $DB->query_no_var("INSERT INTO expmatireals (id, name, img, type, arr_p, price) VALUES (NULL ,'{$_POST['name']}','{$_POST['img']}','{$_POST['type']}','{$arr}','{$_POST['price']}')");
}
if (isset($_GET['expmd'])) {
    $DB->query_no_var("DELETE FROM expmatireals WHERE id={$_POST['id']}");
}
if (isset($_GET['getexpm'])) {
    $items = $DB->query("SELECT * FROM expmatireals");
    foreach ($items as &$item) {
        $item['arr_p'] = unserialize($item['arr_p']);
    }
    echo json_encode($items);
}


if (isset($_GET['imgadd'])) {
    $flag = true;
    try {
        $DB->query_no_var("INSERT INTO images (id, name, description, tags,img) VALUES (NULL ,'{$_POST['name']}','{$_POST['description']}','{$_POST['tags']}','{$_POST['img']}')");
    } catch (Error $e) {
        $flag = false;
    }
    echo $flag;
}
if (isset($_GET['getimeges'])) {
    echo json_encode($DB->query('SELECT * FROM "images"'));
}
if (isset($_GET['catalog'])) {
    $sql = "INSERT INTO catalogs (name, link, parent_id, hide, \"left\", \"group\", separately, level, description) 
VALUES ('{$_POST['title']}','{$_POST['link']}','{$_GET['catalog']}','{$_POST['hide']}','{$_POST['show_on_left']}','{$_POST['separate']}','{$_POST['separate']}',0,'{$_POST['description']}')";
    $DB->query_no_var($sql);
    echo $sql;
}

if (isset($_GET['delcatalog'])) {
    $SQL = "DELETE FROM catalogs WHERE  catalogs.id ='{$_GET['delcatalog']}'";
    $SQL1 = "DELETE FROM catalogs WHERE  catalogs.parent_id ='{$_GET['delcatalog']}'";
    $DB->query_no_var($SQL);
    $DB->query_no_var($SQL1);
}

if (isset($_GET['getcatalog'])) {
    $item = $DB->query('SELECT * FROM   catalogs WHERE  id =' . $_POST['id']);
    echo json_encode($item[0]);
}
if (isset($_GET['getmanagers'])) {
    $items = $DB->query('SELECT * FROM calcmanagers');
    foreach ($items as &$i) {
        $i['text'] = str_replace("\"", "'", htmlspecialchars_decode($i['text'], ENT_QUOTES));

    }
    echo json_encode($items);
}
if (isset($_GET['getteml'])) {
    $items = $DB->query('SELECT * FROM temp');
    foreach ($items as &$i) {
        $i['text'] = str_replace("\"", "}", htmlspecialchars_decode($i['text'], ENT_QUOTES));

    }
    echo json_encode($items);
}
if (isset($_GET['getcatalogs'])) {
    $items = $DB->query('SELECT * FROM  catalogs');
    echo json_encode($items);
}

if (isset($_GET['gettemp'])) {
    $items = $DB->query('SELECT * FROM  temp');
    echo json_encode($items);
}

if (isset($_GET['upcatalog'])) {
    $DB->query_no_var("UPDATE catalogs SET name ='{$_POST['title']}', link='{$_POST['link']}',hide='{$_POST['hide']}',\"left\"='{$_POST['show_on_left']}',\"group\"='{$_POST['is_group_catalog']}',separately='{$_POST['separate']}',description='{$_POST['description']}' WHERE id='{$_GET['upcatalog']}'");
}

if(isset($_GET['getedititem'])){
    $sql ="SELECT * FROM temp WHERE id={$_POST['id']}";
    $item =$DB->query($sql);
   echo json_encode($item[0]);
}

if(isset($_GET['setedittemp'])){
    $text = htmlspecialchars($_POST['text'], ENT_QUOTES);
    $DB->query_no_var("UPDATE temp SET name='{$_POST['name']}', user='{$_POST['user']}', text='{$text}',code='{$_POST['code']}',theme='{$_POST['theme']}' WHERE id='{$_POST['id']}'");
}