<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 12.04.2017
 * Time: 13:22
 */


include_once './mailphp/PHPMailer-5.2.23/PHPMailerAutoload.php';

if (isset($_POST['mailk'])) {
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';
    $mail->setFrom($_POST['mail'], $_POST['name']);
    $mail->addAddress($_POST['mailk'], $_POST['namek']);
    $mail->addAddress($_POST['mail']);

    $mail->addAttachment('../commercial_offer.pdf', 'Коммерческое_предложения.pdf');

    $mail->isHTML(true);

    $mail->Subject = $_POST['title'];
    $mail->Body = $_POST['body'];

    if (!$mail->send()) {
        echo 'No';
    } else {
        echo 'Ok';
    }
}else {
    echo 'No';
}