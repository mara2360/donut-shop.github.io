-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 04, 2024 at 07:25 PM
-- Server version: 8.0.35
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DonutDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Donuts`
--

CREATE TABLE `Donuts` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Donuts`
--

INSERT INTO `Donuts` (`id`, `name`, `description`, `price`) VALUES
(1, 'Unicorn Sparkles', 'Edible rainbow glitter and rainbow sprinkles with blueberry frosting and pink dyed doughnut.', 8.00),
(2, 'Double Chunk Chocolate Cookie', 'Crumbled chocolate chip cookies on top of a chocolate frosting and chocolate chip chunk doughnut.', 6.00),
(3, 'Friday the 13th', 'Black sprinkles with red frosting and raspberry-filled glazed doughnut.', 4.00),
(4, 'The Basics', 'Simple doughnut with vanilla frosting.', 2.00),
(5, 'Strawberry Shortcake', 'Pink sprinkles with strawberry frosting and red velvet doughnut.', 4.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Donuts`
--
ALTER TABLE `Donuts`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
