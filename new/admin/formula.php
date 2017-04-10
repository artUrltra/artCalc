<?php

include_once 'db_driver.php';


class file
{
    private $file_dir;
    private $text_file;

    /**
     * @return mixed
     */
    public function getTextFile()
    {
        return $this->text_file;
    }

    /**
     * @param mixed $text_file
     */
    public function setTextFile($text_file)
    {
        $this->text_file = $text_file;
    }

    /**
     * file constructor.
     * @param $file_dir
     */

    public function __construct($file_dir)
    {
        if (file_exists($file_dir)) {
            $this->file_dir = $file_dir;
            $this->text_file = file_get_contents($this->getFileDir());
        } else {
            exit("Файл отсутствует!!!");
        }
    }

    /**
     * @return mixed
     */
    public function getFileDir()
    {
        return $this->file_dir;
    }

    /**
     * @param mixed $file_dir
     */
    public function setFileDir($file_dir)
    {
        $this->file_dir = $file_dir;
    }


    public function updatingFormula($swap_line, $new_line)
    {
        $this->setTextFile(str_replace($swap_line, $new_line, $this->getTextFile()));
        file_put_contents($this->file_dir, $this->text_file);
        echo "Файл изменен";
    }

    public function formylaProfil()
    {
        $file = fopen($this->getFileDir(), "w+");

        $DB = new DB();
        $allprofil = $DB->query('SELECT * FROM `profile`');

        $scripn = 'function price(id, width, height) {

            var price = 0;

            if (isNaN(price)) {
                price = 0;
            }

            switch (id) {';
        for ($i = 0; $i < count($allprofil); $i++) {
            $scripn .= "case " . $allprofil[$i]['id'] . ":
                   
         price = " . $allprofil[$i]['formula'] . ";
        return price;
         break;";

        }
        $scripn .="}}";
        $test = fwrite($file, $scripn);
        if ($test) echo 'Данные в файл успешно занесены.';
        else echo 'Ошибка при записи в файл.';

        fclose($file);
        echo $scripn;
    }

public function formylaHorizontal()
{
    $file = fopen($this->getFileDir(), "w+");

    $DB = new DB();
    $allprofil = $DB->query('SELECT * FROM HorizontalPperemochki');

    $scripn = 'function priceH(id, width, height) {

            var price = 0;

            if (isNaN(price)) {
                price = 0;
            }

            switch (id) {';
    for ($i = 0; $i < count($allprofil); $i++) {
        $scripn .= "case " . $allprofil[$i]['id'] . ":
                   
         price = " . $allprofil[$i]['formula'] . ";
        return price;
         break;";

    }
    $scripn .="}}";
    $test = fwrite($file, $scripn);
    if ($test) echo 'Данные в файл успешно занесены.';
    else echo 'Ошибка при записи в файл.';

    fclose($file);
    echo $scripn;
}
    public function formylaV()
    {
        $file = fopen($this->getFileDir(), "w+");

        $DB = new DB();
        $allprofil = $DB->query('SELECT * FROM VertikalnuePeremochki');

        $scripn = 'function priceV(id, width, height) {

            var price = 0;

            if (isNaN(price)) {
                price = 0;
            }

            switch (id) {';
        for ($i = 0; $i < count($allprofil); $i++) {
            $scripn .= "case " . $allprofil[$i]['id'] . ":
                   
         price = " . $allprofil[$i]['formula'] . ";
        return price;
         break;";

        }
        $scripn .="}}";
        $test = fwrite($file, $scripn);
        if ($test) echo 'Данные в файл успешно занесены.';
        else echo 'Ошибка при записи в файл.';

        fclose($file);
        echo $scripn;
    }

}


if (isset($_POST['var'])) {
    $item = $DB->query("SELECT * FROM `formula` WHERE `var` LIKE '{$_POST['var']}'");

    $DB->query_no_var("UPDATE `formula` SET `description` = '{$_POST['description']}' WHERE `formula`.`var` = '{$_POST['var']}'");

    $file = new file("../buld/js/script.js");
    $file->updatingFormula($item[0]['description'], $_POST['description']);
}
if (isset($_POST['delete'])) {
    $DB->query_no_var("DELETE FROM `formula` WHERE `formula`.`var` =  '{$_POST['delete']}'");
    echo $_POST['delete'];
}


if(isset($_POST['formula'])) {

    $test = new file('../js/Price.js');
    $test->formylaProfil();
}
if(isset($_POST['formulaH'])) {

    $test = new file('../js/PriceH.js');
    $test->formylaHorizontal();
}
if(isset($_POST['formulaV'])) {

    $test = new file('../js/PriceV.js');
    $test->formylaV();
}