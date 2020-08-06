-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-08-2020 a las 18:28:51
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mercadoliebre`
--
CREATE DATABASE IF NOT EXISTS `mercadoliebre` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mercadoliebre`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(1, 'Cafetera Moulinex Dolce Gusto', 'Cafetera Dolce Gusto Lumio. La cafetera Dolce Gusto Lumio es de variedad automática que ha llegado c', 12000, 50, 'img-cafetera-moulinex.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(2, 'Macbook Pro 2022', 'Macbook Pro 2019 Mpxq2ll/a Intel Core i5 2.3 Ghz 8gb RAM 128gb SSD Pantalla 13.3\\\" Retina Apple Nuev', 99999, 3, 'img-macbook-pro-2019.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(3, 'Samsung Galaxy S10', 'Experiencia visual excepcional. Mirá tus series y películas favoritas con la mejor definición.Tendrá', 72999, 25, 'img-samsung-galaxy-s10.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(4, 'Heladera no frost Whirlpool WRM45A', 'Disfrutá de la frescura de tus alimentos y almacenalos de manera práctica y cómoda en tu heladera Wh', 47900, 10, 'img-heladera-whirpool.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(5, 'Nikon Reflex D3500 - Kit', 'Incluye la cámara D3500, el objetivo zoom AF-P DX NIKKOR 18-55mm y el superteleobjetivo zoom compact', 53000, 20, 'img-camara-nikon.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(6, 'Aire Acondicionado 3200w Frio / Calor', 'AIRE SPLIT 3200W TACA-3200WCHSA/KC FC TCL. Capacidad frio 3200 Watts. Capacidad calor 3300 Watts. Po', 20999, 12, 'img-aire-acondicionado.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(7, 'Notebook Lenovo I3 Intel 8gb Ram', 'PROCESADOR / CHIPSET. CPU: Intel Core i3(8a generación) 8130U / 2.2 GHz. Velocidad turbo máxima: 3, ', 36700, 5, 'img-laptop-lenovo.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(8, 'Apple iPhone 11 Pro Dual SIM 256 GB', '¡El nuevo smartphone que lo tiene todo! Con este lanzamiento, Apple ha superado todos sus récords. S', 148000, 2, 'img-iphone-11.jpg', 'in-sale');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(9, 'Teclado Apple Magic Inalámbrico', 'El teclado mágico combina un diseño elegante con una batería recargable incorporada y funciones clav', 11399, 0, 'img-apple-magic-keyboard.jpg', 'visited');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(10, 'Mouse Inalámbrico Logitech M280', 'Uso más cómodo para la mano derecha gracias a la forma contorneada con recubrimiento de goma blanda.', 1200, 10, 'img-mouse-logitech.jpg', 'visited');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(11, 'Parlante Inalámbrico Bose Soundtouch 10', 'Parlante Inalámbrico Bose Soundtouch 10. SoundTouch®.La manera más sencilla de reproducir música en ', 29990, 12, 'img-parlante-bose.jpg', 'visited');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(12, 'Home Theatre Sony Bdv-e4100', 'El sonido Surround de 5.1 canales y 1000 W proporciona un audio de verdadero impacto en los efectos ', 32990, 0, 'img-home-theater-sony.jpg', 'visited');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(13, 'Smart TV Samsung 4K 50', 'Con el Smart TV Samsung UN50MU6100, viví una nueva experiencia visual con la resolución 4K, que te p', 34990, 0, 'img-tv-samsung-smart.jpg', 'visited');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(14, 'Sony S6700 Reproductor De Blu-ray ', 'Disfruta de tus películas favoritas con hasta cuatro veces más detalles que Full HD, gracias a la co', 10999, 5, 'img-sony-blueray.jpg', 'visited');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(15, 'Bicicleta Mountain Bike Fierce Rodado 29', 'Bicicleta Mountain Bike Fierce Rodado 29 21 velocidades. Tipo: Mountain Bike. Rodado: 29. Material C', 15979, 12, 'img-bicicleta-fierce.jpg', 'visited');
INSERT INTO `productos` (`id`, `name`, `description`, `precio`, `discount`, `image`, `category`) VALUES(16, 'Sony Srs-xb12 Parlante Bluetooth Portátil', 'Deja que la música dance cobre vida con EXTRA BASS™ Anima el ambiente con EXTRA BASS™1. Un radiador ', 4699, 0, 'img-parlante-sony.jpg', 'visited');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
