-- Table TYPE Crée d'abord une db puis les tables s'inséreront tout seul

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
  `autohit` tinyint(1) DEFAULT NULL,
  `ultimate` tinyint(1) DEFAULT NULL,
  `platinium` tinyint(1) DEFAULT NULL,
  `nbgenplat` int(11) NOT NULL DEFAULT '5',
  `nbgenulti` int(11) NOT NULL DEFAULT '3',
  `nbgenautohit` int(11) NOT NULL DEFAULT '2',
  `Date Inscription` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Date Debut Abonnement` datetime DEFAULT NULL,
  `Date Fin Abonnement` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `registre`
--

INSERT INTO `registre` (`id`, `user`, `autohit`, `ultimate`, `platinium`, `nbgenplat`, `nbgenulti`, `nbgenautohit`, `Date Inscription`, `Date Debut Abonnement`, `Date Fin Abonnement`) VALUES
('805933660729638913', 'Sarah Jeffrey', 0, 0, 0, 5, 3, 2, '2021-02-06 16:34:30', NULL, NULL);
COMMIT;

-- --------------------------------------------------------

--
-- Structure de la table `gendelarte`
--

DROP TABLE IF EXISTS `gendelarte`;
CREATE TABLE IF NOT EXISTS `gendelarte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
-- --------------------------------------------------------

--
-- Structure de la table `genaccordhotel`
--

DROP TABLE IF EXISTS `genaccordhotel`;
CREATE TABLE IF NOT EXISTS `genaccordhotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gengosport`
--

DROP TABLE IF EXISTS `gengosport`;
CREATE TABLE IF NOT EXISTS `gengosport` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genhma`
--

DROP TABLE IF EXISTS `genhma`;
CREATE TABLE IF NOT EXISTS `genhma` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `geniban`
--

DROP TABLE IF EXISTS `geniban`;
CREATE TABLE IF NOT EXISTS `geniban` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genmega`
--

DROP TABLE IF EXISTS `genmega`;
CREATE TABLE IF NOT EXISTS `genmega` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gennapster`
--

DROP TABLE IF EXISTS `gennapster`;
CREATE TABLE IF NOT EXISTS `gennapster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gennitrado`
--

DROP TABLE IF EXISTS `gennitrado`;
CREATE TABLE IF NOT EXISTS `gennitrado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genpornhub`
--

DROP TABLE IF EXISTS `genpornhub`;
CREATE TABLE IF NOT EXISTS `genpornhub` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genpornportal`
--

DROP TABLE IF EXISTS `genpornportal`;
CREATE TABLE IF NOT EXISTS `genpornportal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genqobuz`
--

DROP TABLE IF EXISTS `genqobuz`;
CREATE TABLE IF NOT EXISTS `genqobuz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gentelefoot`
--

DROP TABLE IF EXISTS `gentelefoot`;
CREATE TABLE IF NOT EXISTS `gentelefoot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genvelib`
--

DROP TABLE IF EXISTS `genvelib`;
CREATE TABLE IF NOT EXISTS `genvelib` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genbrioche`
--

DROP TABLE IF EXISTS `genbrioche`;
CREATE TABLE IF NOT EXISTS `genbrioche` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gencasino`
--

DROP TABLE IF EXISTS `gencasino`;
CREATE TABLE IF NOT EXISTS `gencasino` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genauchan`
--

DROP TABLE IF EXISTS `gennordvpn`;
CREATE TABLE IF NOT EXISTS `gennordvpn` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genfrichti`
--

DROP TABLE IF EXISTS `genfrichti`;
CREATE TABLE IF NOT EXISTS `genfrichti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gennordvpn`
--

DROP TABLE IF EXISTS `gennordvpn`;
CREATE TABLE IF NOT EXISTS `gennordvpn` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genyvesrocher`
--

DROP TABLE IF EXISTS `genyvesrocher`;
CREATE TABLE IF NOT EXISTS `genyvesrocher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gencrunchyroll`
--

DROP TABLE IF EXISTS `gencrunchyroll`;
CREATE TABLE IF NOT EXISTS `gencrunchyroll` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genuptobox`
--

DROP TABLE IF EXISTS `genuptobox`;
CREATE TABLE IF NOT EXISTS `genuptobox` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genadn`
--

DROP TABLE IF EXISTS `genadn`;
CREATE TABLE IF NOT EXISTS `genadn` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genespaceup`
--

DROP TABLE IF EXISTS `genespaceup`;
CREATE TABLE IF NOT EXISTS `genespaceup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genxsplit`
--

DROP TABLE IF EXISTS `genxsplit`;
CREATE TABLE IF NOT EXISTS `genxsplit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gensalto`
--

DROP TABLE IF EXISTS `gensalto`;
CREATE TABLE IF NOT EXISTS `gensalto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genhulu`
--

DROP TABLE IF EXISTS `genhulu`;
CREATE TABLE IF NOT EXISTS `genhulu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genorangetv`
--

DROP TABLE IF EXISTS `genorangetv`;
CREATE TABLE IF NOT EXISTS `genorangetv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genkfc`
--

DROP TABLE IF EXISTS `genkfc`;
CREATE TABLE IF NOT EXISTS `genkfc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


--
-- Structure de la table `genking365`
--

DROP TABLE IF EXISTS `genking365`;
CREATE TABLE IF NOT EXISTS `genking365` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genmolov`
--

DROP TABLE IF EXISTS `genmolov`;
CREATE TABLE IF NOT EXISTS `genmolov` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `genmycanal`
--

DROP TABLE IF EXISTS `genmycanal`;
CREATE TABLE IF NOT EXISTS `genmycanal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Structure de la table `gensuperu`
--

DROP TABLE IF EXISTS `gensuperu`;
CREATE TABLE IF NOT EXISTS `gensuperu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `pass` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `capture` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- A crée dans une DBB déja existante puis config le config.json pour changé les infos de la db et tout..
