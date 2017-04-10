<?php

// инициализация объекта доступа к базе данных
class HistoryDB extends SQLite3 {
    function __construct() {
        $this->open("../db/history.db");
    }
}
$db = new HistoryDB();

// поля состояния
$inputFieldsArray = [
    "HIGHT_SETS_ID",
    "WIDTH_SETS_ID",
    "TOTAL_PAINTING_ID",
    "MOVABLE_PAINTING_ID",
    "NUMBER_OF_DUPLICATOR_ID",
    "NUMBER_SETS_ID",
    "TYPE_BAFFLE_ID",
    "BAFFLE_SEKECTOR_CLASS"
];
$dataAttributesArray = [
    "type",
    "price",
    "price_in_profil",
    "price_in_napolnenii",
    "area",
    "decor_price",
    "karkas_img",
    "karkas_name",
    "karkas_info",
    "karkas_tsvet_uplotnitelya",
    "karkas_tsvet_zaglushki",
    "karkas_tsvet_zaglushki_tortsevoy",
    "karkas_vid_krepleniya",
    "karkas_tsvet_uplotnitelya_price",
    "karkas_tsvet_zaglushki_price",
    "karkas_tsvet_zaglushki_tortsevoy_price",
    "karkas_vid_krepleniya_price",
    "karkas_price",
    "karkas_full_price",
    "vertikalnue_pereochki_count",
    "vertikalnue_pereochki_img",
    "vertikalnue_pereochki_name",
    "vertikalnue_pereochki_price",
    "vertikalnue_pereochki_price_for_one",
    "horizontal_pereochki_count",
    "horizontal_pereochki_img",
    "horizontal_pereochki_name",
    "horizontal_pereochki_price",
    "horizontal_pereochki_price_for_one",
    "furnitura_razdvizh_mehanizm",
    "furnitura_dovodchik",
    "furnitura_skladnoi_mehanizm",
    "material_1_type",
    "material_1_color",
    "material_1_width",
    "material_1_height",
    "material_1_kol",
    "material_1_zakalka_stekla",
    "material_1_dvoynoe_zapolnenie",
    "material_1_tolschina",
    "material_1_ploschad",
    "material_1_price",
    "material_2_type",
    "material_2_color",
    "material_2_width",
    "material_2_height",
    "material_2_kol",
    "material_2_zakalka_stekla",
    "material_2_dvoynoe_zapolnenie",
    "material_2_tolschina",
    "material_2_ploschad",
    "material_2_price",
    "material_3_type",
    "material_3_color",
    "material_3_width",
    "material_3_height",
    "material_3_kol",
    "material_3_zakalka_stekla",
    "material_3_dvoynoe_zapolnenie",
    "material_3_tolschina",
    "material_3_ploschad",
    "material_3_price",
    "material_4_type",
    "material_4_color",
    "material_4_width",
    "material_4_height",
    "material_4_kol",
    "material_4_zakalka_stekla",
    "material_4_dvoynoe_zapolnenie",
    "material_4_tolschina",
    "material_4_ploschad",
    "material_4_price",
    "material_5_type",
    "material_5_color",
    "material_5_width",
    "material_5_height",
    "material_5_kol",
    "material_5_zakalka_stekla",
    "material_5_dvoynoe_zapolnenie",
    "material_5_tolschina",
    "material_5_ploschad",
    "material_5_price"
];

// массив со значениями полей состояния
$jsObj = json_decode($_REQUEST["obj"], true);

if ($_REQUEST["action"] != "apply") {

    // выбор действия (кроме применения)
    switch ($_REQUEST["action"]) {

    case "create":
        // создание таблицы состояний
        $createQuery = "CREATE TABLE variants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date DATETIME DEFAULT CURRENT_TIMESTAMP,
        ";
        foreach ($inputFieldsArray as $i) $createQuery .= $i . " TEXT,";
        foreach ($dataAttributesArray as $i) $createQuery .= $i . "1 TEXT,";
        foreach ($dataAttributesArray as $i) $createQuery .= $i . "2 TEXT,";
        foreach ($dataAttributesArray as $i) $createQuery .= $i . "3 TEXT,";
        $createQuery .= "comment TEXT)";
        $db->exec("DROP TABLE IF EXISTS variants");
        $db->exec($createQuery);
        break;

    case "insert":
        // создание нового состояния
        $insertQuery = "INSERT INTO variants (";
        foreach ($inputFieldsArray as $i) $insertQuery .= $i . ",";
        foreach ($dataAttributesArray as $i) $insertQuery .= $i . "1,";
        foreach ($dataAttributesArray as $i) $insertQuery .= $i . "2,";
        foreach ($dataAttributesArray as $i) $insertQuery .= $i . "3,";
        $insertQuery .= "comment) VALUES (";
        foreach ($inputFieldsArray as $i) $insertQuery .= "'".$jsObj[$i]."',";
        foreach ($dataAttributesArray as $i) $insertQuery .= "'".$jsObj[$i."1"]."',";
        foreach ($dataAttributesArray as $i) $insertQuery .= "'".$jsObj[$i."2"]."',";
        foreach ($dataAttributesArray as $i) $insertQuery .= "'".$jsObj[$i."3"]."',";
        $insertQuery .= "'".$jsObj["comment"]."')";
        $db->exec($insertQuery);
        break;

    case "delete":
        // удаление состояния
        $db->exec("DELETE FROM variants WHERE id = " . $jsObj["id"]);
        break;

    default:
        break;

    }

    // выдод списка состояний
    $results = $db->query("SELECT id,comment FROM variants");
    echo '<table align="center">';
    while ($result = $results->fetchArray(SQLITE3_ASSOC)) {
        echo '<tr>';
        echo '<td><button onclick=\'historyAjaxApply("apply", "{\"id\":'.$result["id"].'}")\'>Apply</button></td>';
        echo '<td><button onclick=\'historyAjax("delete", "{\"id\":'.$result["id"].'}")\'>Delete</button></td>';
        foreach ($result as $k => $v) if ($k != "id") echo "<td> $v </td>";
        echo "</tr>";
    }
    echo '</table>';
    exit;

} else {

    // получение полей состояния для последующего применения
    $results = $db->query("SELECT * FROM variants WHERE id = ".$jsObj["id"]);
    echo json_encode($results->fetchArray(SQLITE3_ASSOC));
    exit;

}

?>
