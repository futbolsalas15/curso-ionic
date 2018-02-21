<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$database = new SQLite3('hotel.sqlite');
$listaHab = $database->query("SELECT a.noHabitacion, a.tipoSuite, a.precio, a.foto, CASE WHEN b.nombres IS NOT NULL THEN 'true' ELSE 'false' END AS isReservado FROM habitaciones a LEFT JOIN reservas b ON (a.noHabitacion = b.noHabitacion) ORDER BY a.noHabitacion");
$listaHabArray = [];
while( ($row = $listaHab->fetchArray(SQLITE3_ASSOC)) !== FALSE ){
    $listaHabArray[] = $row;
}
$listaHab->finalize();
$database->close();

echo json_encode($listaHabArray);