<?php
if(is_dir('zip')==false){
    mkdir('zip', 0777, true);
}
$archive_name = "./zip/" .date("m.d.Y(H.i)"). ".zip";

$dir_db = 'db';
$zip = new ZipArchive;

$res = $zip->open($archive_name, ZipArchive::CREATE);


if ($res === TRUE) {

    $zip->addFile('./db/DataBaseAdmin.db3', 'db/DataBaseAdmin.db3');

    ZipAddFilesFromDir('materials',$zip);
    ZipAddFilesFromDir('dekor',$zip);
    ZipAddFilesFromDir('db',$zip);
    ZipAddFilesFromDir('uploads',$zip);

    $zip->close();

echo 'Архив Создан!!!';

} else {

    echo 'No good';

}
/**
 * Функция добавляет из папки все файлы в архив
 * @param $dir
 * @param $zip
 */
function ZipAddFilesFromDir($dir,$zip){
    $scan = scandir($dir);
    unset($scan[array_search('.', $scan)]);
    unset($scan[array_search('..', $scan)]);
    while (list ($key, $val) = each($scan)) {
        $zip->addFile($dir.'/' . $val);
    }
}
