SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Structure de la table `registre`
--

DROP TABLE IF EXISTS `registre`;
CREATE TABLE IF NOT EXISTS `registre` (
  `id` varchar(30) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `ultimate` tinyint(1) DEFAULT NULL,
  `platinium` tinyint(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `genspotify`
--

DROP TABLE IF EXISTS `genspotify`;
CREATE TABLE IF NOT EXISTS `genspotify` (
  `user` varchar(50) DEFAULT NULL,
  `pass` varchar(30) DEFAULT NULL,
  `capture` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `gennetflix`
--

DROP TABLE IF EXISTS `gennetflix`;
CREATE TABLE IF NOT EXISTS `gennetflix` (
  `user` varchar(50) DEFAULT NULL,
  `pass` varchar(30) DEFAULT NULL,
  `capture` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


-- A crée dans une DBB déja existante puis config le config.json pour changé les infos de la db et tout..