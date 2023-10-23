CREATE DATABASE  IF NOT EXISTS `news`;
USE `news`;
DROP TABLE IF EXISTS `userdet`;
CREATE TABLE `userdet` (
  `First_Name` varchar(45) DEFAULT NULL,
  `Last_Name` varchar(45) DEFAULT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL
);

