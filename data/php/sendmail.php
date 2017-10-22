<?php
$to  = "alfironius@gmail.com" ;

$type = htmlspecialchars($_GET["type"]);
$name = htmlspecialchars($_GET["name"]);
$phone = htmlspecialchars($_GET["phone"]);
$description = htmlspecialchars($_GET["description"]);

$message = file_get_contents('../tpl/'.$type.'.html');

$date = date_create('', timezone_open('Asia/Krasnoyarsk'));
$datetime = date_format($date, 'd.m.Y H:i:s');

if($type == "main_message") {
    $subject = "Веб-заявка от $name ( $phone ) [$datetime]";
}

if($type && $name && $phone) {

    $subject = str_replace('%$name%', $name, $subject);
    $subject = str_replace('%$phone%', $phone, $subject);
    $subject = str_replace('%$datetime%', $datetime, $subject);

    $message = str_replace('%$name%', $name, $message);
    $message = str_replace('%$phone%', $phone, $message);
    $message = str_replace('%$datetime%', $datetime, $message);
    $message = str_replace('%$description%', $description, $message);


    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: VseStrahovie.RU <VseStrahovie@VseStrahovie.RU>\r\n";

    mail($to, $subject, $message, $headers);
}
?>