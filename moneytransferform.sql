-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2022 at 09:13 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moneytransferform`
--

-- --------------------------------------------------------

--
-- Table structure for table `save_data`
--

CREATE TABLE `save_data` (
  `id` int(11) NOT NULL,
  `cardNum` int(16) NOT NULL,
  `cardHolder` varchar(100) NOT NULL,
  `expDM` float NOT NULL,
  `expDY` float NOT NULL,
  `code` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `save_data`
--

INSERT INTO `save_data` (`id`, `cardNum`, `cardHolder`, `expDM`, `expDY`, `code`) VALUES
(4, 2147483647, 'hamada', 12, 23, 123),
(5, 2147483647, 'qwe', 12, 23, 123),
(6, 2147483647, 'qwe', 12, 23, 123);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `save_data`
--
ALTER TABLE `save_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `save_data`
--
ALTER TABLE `save_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
