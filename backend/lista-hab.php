<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

echo json_encode([
    ["noHabitacion" => 101, "tipoSuite" => "Economica", "precio" => 100000, "foto" => "assets/imgs/habitacion.jpg"],
    ["noHabitacion" => 201, "tipoSuite" => "Economica", "precio" => 100000, "foto" => "assets/imgs/habitacion.jpg"],
    ["noHabitacion" => 301, "tipoSuite" => "Economica", "precio" => 120000, "foto" => "assets/imgs/habitacion.jpg"],
    ["noHabitacion" => 401, "tipoSuite" => "Suite", "precio" => 450000, "foto" => "assets/imgs/habitacion.jpg"],
    ["noHabitacion" => 501, "tipoSuite" => "Suite", "precio" => 500000, "foto" => "assets/imgs/habitacion.jpg"],
]);