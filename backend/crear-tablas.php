<?php

$database = new SQLite3('hotel.sqlite');

// tabla habitaciones
$database->exec("DROP TABLE IF EXISTS habitaciones");
$database->exec("CREATE TABLE IF NOT EXISTS habitaciones(noHabitacion NUMBER(3), tipoSuite VARCHAR(100), precio NUMBER(12,2), foto VARCHAR(100), reservado NUMBER(1) DEFAULT 0)");
$database->exec("INSERT INTO habitaciones(noHabitacion, tipoSuite, precio, foto) VALUES (101, 'Economica', 100000, 'habitacion.jpg')");
$database->exec("INSERT INTO habitaciones(noHabitacion, tipoSuite, precio, foto) VALUES (201, 'Economica', 100000, 'habitacion.jpg')");
$database->exec("INSERT INTO habitaciones(noHabitacion, tipoSuite, precio, foto) VALUES (301, 'Economica', 120000, 'habitacion.jpg')");
$database->exec("INSERT INTO habitaciones(noHabitacion, tipoSuite, precio, foto) VALUES (401, 'Suite', 450000, 'habitacion.jpg')");
$database->exec("INSERT INTO habitaciones(noHabitacion, tipoSuite, precio, foto) VALUES (501, 'Suite', 500000, 'habitacion.jpg')");

// tabla reservas
$database->exec("DROP TABLE IF EXISTS reservas");
$database->exec("CREATE TABLE IF NOT EXISTS reservas(noHabitacion NUMBER(3), nombres VARCHAR(60), apellidos VARCHAR(60), documento VARCHAR(60), telefono VARCHAR(60), fecha DATE)");

$database->close();