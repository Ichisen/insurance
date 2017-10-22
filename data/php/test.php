<?php
$date = date_create('', timezone_open('Asia/Krasnoyarsk'));
echo date_format($date, 'd.m.Y H:i:s') . "\n";
?>