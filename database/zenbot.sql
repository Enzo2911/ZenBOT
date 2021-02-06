SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Structure de la table `registre`
--

DROP TABLE IF EXISTS `registre`;
CREATE TABLE IF NOT EXISTS `registre` (
  `id` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `ultimate` tinyint(1) DEFAULT NULL,
  `platinium` tinyint(1) DEFAULT NULL,
  `nbgenplat` int(11) NOT NULL DEFAULT '5',
  `nbgenulti` int(11) NOT NULL DEFAULT '3',
  `Date Inscription` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `gendelarte`
--

DROP TABLE IF EXISTS `gendelarte`;
CREATE TABLE IF NOT EXISTS `gendelarte` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
-- --------------------------------------------------------

--
-- Structure de la table `genauchan`
--

DROP TABLE IF EXISTS `genauchan`;
CREATE TABLE IF NOT EXISTS `genauchan` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genfrichti`
--

DROP TABLE IF EXISTS `genfrichti`;
CREATE TABLE IF NOT EXISTS `genfrichti` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genkfc`
--

DROP TABLE IF EXISTS `genkfc`;
CREATE TABLE IF NOT EXISTS `genkfc` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Structure de la table `genking365`
--

DROP TABLE IF EXISTS `genking365`;
CREATE TABLE IF NOT EXISTS `genking365` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genmolov`
--

DROP TABLE IF EXISTS `genmolov`;
CREATE TABLE IF NOT EXISTS `genmolov` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genmycanal`
--

DROP TABLE IF EXISTS `genmycanal`;
CREATE TABLE IF NOT EXISTS `genmycanal` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gensuperu`
--

DROP TABLE IF EXISTS `gensuperu`;
CREATE TABLE IF NOT EXISTS `gensuperu` (
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- A crée dans une DBB déja existante puis config le config.json pour changé les infos de la db et tout..