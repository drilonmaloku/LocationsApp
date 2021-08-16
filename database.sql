-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2021 at 09:56 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`city_id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Berlin', '2021-08-16', '2021-08-16'),
(2, 'Amsterdam', '2021-08-16', '2021-08-16'),
(3, 'Ljubljana', '2021-08-16', '2021-08-16'),
(4, 'Belgrade', '2021-08-16', '2021-08-16'),
(5, 'Zagreb', '2021-08-16', '2021-08-16'),
(6, 'Sarajevo', '2021-08-16', '2021-08-16'),
(7, 'Prishtina', '2021-08-16', '2021-08-16'),
(8, 'Rome', '2021-08-16', '2021-08-16'),
(9, 'Paris', '2021-08-16', '2021-08-16'),
(10, 'Madrid', '2021-08-16', '2021-08-16'),
(11, 'Istanbul', '2021-08-16', '2021-08-16'),
(12, 'Moscow', '2021-08-16', '2021-08-16'),
(13, 'Stockholm', '2021-08-16', '2021-08-16');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `location_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city_id` int(11) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`location_id`, `name`, `address`, `city_id`, `longitude`, `latitude`, `createdAt`, `updatedAt`) VALUES
(1, 'TEst7', 'addresstet', 5, 100.23, 23.34, '2021-08-16', '2021-08-16'),
(2, 'LocationT', 'AddressT', 6, 53.23, 23.52, '2021-08-16', '2021-08-16'),
(3, 'LocationT', 'AddressT', 1, 53.23, 23.52, '2021-08-16', '2021-08-16'),
(4, 'LocationT', 'AddressT', 1, 93.23, 53.52, '2021-08-16', '2021-08-16'),
(5, 'LocationT', 'AddressT', 1, 93.23, 53.52, '2021-08-16', '2021-08-16'),
(6, 'LocationT', 'AddressT', 1, 93.23, 53.52, '2021-08-16', '2021-08-16'),
(7, 'LocationT', 'AddressT', 1, 93.23, 53.52, '2021-08-16', '2021-08-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`location_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
