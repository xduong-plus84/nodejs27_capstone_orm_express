DROP DATABASE IF EXISTS db_capstone_orm_expressjs;
CREATE DATABASE db_capstone_orm_expressjs;
USE db_capstone_orm_expressjs;

DROP TABLE IF EXISTS `nguoi_dung`;
CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `ho_ten` varchar(255) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
);

DROP TABLE IF EXISTS `hinh_anh`;
CREATE TABLE `hinh_anh` (
  `hinh_anh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(255) DEFAULT NULL,
  `duong_dan` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_anh_id`),
  FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `luu_anh`;
CREATE TABLE `luu_anh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_anh_id` int NOT NULL,
  `ngay_luu` datetime DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_anh_id`),
  FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`hinh_anh_id`) REFERENCES `hinh_anh` (`hinh_anh_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `binh_luan`;
CREATE TABLE `binh_luan` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_anh_id` int NOT NULL,
  `ngay_binh_luan` datetime DEFAULT NULL,
  `noi_dung` varchar(555) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_anh_id`),
  FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`hinh_anh_id`) REFERENCES `hinh_anh` (`hinh_anh_id`)  ON DELETE CASCADE ON UPDATE CASCADE
);





