-- Adminer 4.2.2 MySQL dump

SET NAMES utf8;
-- SET time_zone = '+00:00';
-- SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';


DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `name` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

INSERT INTO `people` (`name`, `id`) VALUES
('Dave',	1),
('Bob',	2),
('Ken',	3),
('Joe',	4);

DROP TABLE IF EXISTS `users_xataface`;
CREATE TABLE `users_xataface` (
  `username` varchar(32) NOT NULL,
  `password` varchar(244) NOT NULL,
  `Role` enum('READ','NO','EDIT','DELETE','OWNER','USER','ADMIN','REGISTER','ADDER','EDITB1','MANAGER') DEFAULT 'ADDER',
  `first_name` varchar(233) DEFAULT NULL,
  `last_name` varchar(233) DEFAULT NULL,
  `address` varchar(244) DEFAULT NULL,
  `phone_num` varchar(211) DEFAULT NULL,
  `email` varchar(234) NOT NULL,
  `comment_fld1` text,
  `createdtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedtime` datetime DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users_xataface` (`username`, `password`, `Role`, `first_name`, `last_name`, `address`, `phone_num`, `email`, `comment_fld1`, `createdtime`, `updatedtime`) VALUES
('a',	'',	'EDIT',	NULL,	NULL,	NULL,	NULL,	'x@x.com',	NULL,	'2013-06-18 17:46:12',	'2013-07-17 11:28:59');

-- 2016-11-19 16:33:15
