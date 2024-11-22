-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2024 at 08:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hc-assist_database1`
--

-- --------------------------------------------------------

--
-- Table structure for table `audit_trail`
--

CREATE TABLE `audit_trail` (
  `audit_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `date_performed` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `child_history`
--

CREATE TABLE `child_history` (
  `child_history_id` int(11) NOT NULL,
  `history_date` date NOT NULL,
  `child_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `child_nutrition`
--

CREATE TABLE `child_nutrition` (
  `child_id` int(11) NOT NULL,
  `child_status` varchar(30) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `blood_pressure` float DEFAULT NULL,
  `heart_rate` float DEFAULT NULL,
  `patient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contagious_disease`
--

CREATE TABLE `contagious_disease` (
  `disease_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `disease_name` varchar(100) DEFAULT NULL,
  `diagnosis_date` date DEFAULT NULL,
  `disease_status` varchar(30) DEFAULT NULL,
  `administered_by` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `disease_schedule`
--

CREATE TABLE `disease_schedule` (
  `disease_schedule_id` int(11) NOT NULL,
  `activity` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `disease_schedule_date` date NOT NULL,
  `disease_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `immunization`
--

CREATE TABLE `immunization` (
  `immunization_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `immunization_name` varchar(100) DEFAULT NULL,
  `administered_date` date DEFAULT NULL,
  `administered_by` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `immunization_schedule`
--

CREATE TABLE `immunization_schedule` (
  `immunization_schedule_id` int(11) NOT NULL,
  `activity` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `immunization_schedule_date` date NOT NULL,
  `immunization_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_id` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `purok` varchar(100) DEFAULT NULL,
  `household` varchar(100) DEFAULT NULL,
  `civil_status` varchar(30) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  `blood_type` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pregnant`
--

CREATE TABLE `pregnant` (
  `pregnant_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `start_date` date DEFAULT NULL,
  `expected_due_date` date DEFAULT NULL,
  `pregnancy_status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pregnant_schedule`
--

CREATE TABLE `pregnant_schedule` (
  `pregnant_schedule_id` int(11) NOT NULL,
  `pregnant_id` int(11) NOT NULL,
  `pregnant_schedule_date` date NOT NULL,
  `activity` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `referrals`
--

CREATE TABLE `referrals` (
  `referral_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `disease` varchar(100) DEFAULT NULL,
  `referral_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `purok_assigned` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `civil_status` varchar(30) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `signature` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `first_name`, `middle_name`, `last_name`, `birth_date`, `gender`, `purok_assigned`, `position`, `civil_status`, `image`, `signature`, `age`, `contact_number`, `password`, `username`) VALUES
(1, 'Dhaniel', 'Lapa', 'Malinao', '2002-02-26', 'male', 'santos', 'Admin', 'Single', NULL, NULL, 23, '09752205198', 'jjxv1234', 'Dhaniel Malinao'),
(2, 'Lawrenz', 'Capangpangan', 'Carisusa', NULL, 'Male', NULL, 'Admin', 'Not Married', NULL, NULL, 23, '09987889182', '', ''),
(4, 'Lawrenz', 'Capangpangan', 'Carisusas', NULL, 'Male', '', 'Admin', 'Not Married', '', '', 1, '09987889182', '', 'Lawrenz Carisusas'),
(11, 'Beefs', 'Kobe', 'Jiraya', NULL, 'Male', 'asc', 'Admin', 'Not Married', '', '', 23, '13123123', 'jjxv', 'Beefs Jiraya'),
(13, 'RIngo', 'Larva', 'Red', NULL, 'Male', 'Json', 'Admin', 'Married', '', '', 34, '09718239132', '1234', 'RIngo Red'),
(14, 'Marc', 'Larp', 'Cualbar', NULL, 'Male', 'red', 'Admin', 'Not Married', NULL, NULL, 21, '098881283812', '123', 'Marc Cualbar'),
(15, 'Rolly', 'Lol', 'gol', NULL, 'Male', 'Rose', 'Admin', 'Married', NULL, NULL, 45, '0912312041', '123', 'Rolly gol');

-- --------------------------------------------------------

--
-- Table structure for table `steps`
--

CREATE TABLE `steps` (
  `steps_id` int(11) NOT NULL,
  `workflow_id` int(11) NOT NULL,
  `step_name` varchar(50) DEFAULT NULL,
  `sequence` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `workflow`
--

CREATE TABLE `workflow` (
  `workflow_id` int(11) NOT NULL,
  `staff_Id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audit_trail`
--
ALTER TABLE `audit_trail`
  ADD PRIMARY KEY (`audit_id`);

--
-- Indexes for table `child_history`
--
ALTER TABLE `child_history`
  ADD PRIMARY KEY (`child_history_id`);

--
-- Indexes for table `child_nutrition`
--
ALTER TABLE `child_nutrition`
  ADD PRIMARY KEY (`child_id`);

--
-- Indexes for table `contagious_disease`
--
ALTER TABLE `contagious_disease`
  ADD PRIMARY KEY (`disease_id`);

--
-- Indexes for table `immunization`
--
ALTER TABLE `immunization`
  ADD PRIMARY KEY (`immunization_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_id`);

--
-- Indexes for table `pregnant`
--
ALTER TABLE `pregnant`
  ADD PRIMARY KEY (`pregnant_id`);

--
-- Indexes for table `pregnant_schedule`
--
ALTER TABLE `pregnant_schedule`
  ADD PRIMARY KEY (`pregnant_schedule_id`);

--
-- Indexes for table `referrals`
--
ALTER TABLE `referrals`
  ADD PRIMARY KEY (`referral_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `steps`
--
ALTER TABLE `steps`
  ADD PRIMARY KEY (`steps_id`);

--
-- Indexes for table `workflow`
--
ALTER TABLE `workflow`
  ADD PRIMARY KEY (`workflow_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audit_trail`
--
ALTER TABLE `audit_trail`
  MODIFY `audit_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `child_history`
--
ALTER TABLE `child_history`
  MODIFY `child_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `child_nutrition`
--
ALTER TABLE `child_nutrition`
  MODIFY `child_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contagious_disease`
--
ALTER TABLE `contagious_disease`
  MODIFY `disease_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `immunization`
--
ALTER TABLE `immunization`
  MODIFY `immunization_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pregnant`
--
ALTER TABLE `pregnant`
  MODIFY `pregnant_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pregnant_schedule`
--
ALTER TABLE `pregnant_schedule`
  MODIFY `pregnant_schedule_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `referrals`
--
ALTER TABLE `referrals`
  MODIFY `referral_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `steps`
--
ALTER TABLE `steps`
  MODIFY `steps_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `workflow`
--
ALTER TABLE `workflow`
  MODIFY `workflow_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
