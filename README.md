# AlexaBOT

## Table of contents

- [Version Francaise](#FR)
  - [Introduction](#introductionFR)
  - [PreRequis](#prerequisFR)
  - [Installation Linux Version](#LinuxVersionFR)
  - [Installation Windows Version](#WindowsVersionFR)
      - [Node JS](#NODEJSFR)
        - [Verification Installation](#VericationFR)
        - [Comment Crée Un BOT](#RecupereTokenFR)
        - [Edité le Fichier config.json](#EditeFichierConfigFR)
      - [WEB SERVER](#ServerWEBFR)
        - [Installation de la DB + Config](#Partie1FR)
        - [Installation du Serveur WEB + Config](#Partie2FR)
- [Version Anglais](#US)
  - [Introduction](#introductionUS)
  - [PreRequis](#prerequisUS)
   - [Linux Version Installation](#LinuxVersionUS)
  - [Windows Version Installation](#WindowsVersionUS)

## FR

## IntroductionFR

<p> Bot Réalisé en 1 semaine </p> 
<table>
  <th>
    Language Utilisé
  </th>
  <td>
    Javascript 75%
  </td>
  <td>
    PHP / HTML 15%
  </td>
  <td>
    SQL 5% 
  </td>
</table>
<p> Multiple Commande + Générateur VIA DB My Sql + partie inscription dans la DB automatiquement via requête POST </p>

## PreRequisFR

- Node JS 
- AlexaBot 
- Serveur WEB (MySql / Apache2)

## LinuxVersionFR



## WindowsVersionFR

### NODEJSFR

Installé [Node JS](https://nodejs.org)

### VericationFR

<p> Une Fois NODE JS installé : </p>
<p> Instruction : </p>
  
```cmd
Windows R ==> cmd

Node -v Affiche la version de NODE JS 

Si rien ne saffiche veillez reinstallé Node JS 

Une fois la vérification effectuée allez dans le répertoire où est localisé AlexaBOT via cd destination

  --> npm start 
  
tout devrait sinstaller si vous rencontrez quelques problèmes pour les modules installés les a la main npm i nomdumodule.

```

### RecupereTokenFR

- Récupé le token de sont [bot discord](http://discord.com/developers/applications)

### CommentCreeUnBOTFR

- New Application
- Bot
- Add Bot

Et Voila nous avons récupéré le token mettez le de coté.

### EditeFichierConfigFR

Le fichier que nous allons édité se trouve dans le dossier settings
Nom du fichier : config.json 

- Vous allez devoir mettre le token de votre bot dans la partie token
- Vous pouvez aussi changé le prefix si vous le souhaité 
- Configuré les perms admin via votre ID Discord
- Et LOGDB qui est l'endroit ou vous allez recevoir vos log lorsqu'une personne executera une commande ou entrera dans la DB

### ServerWEBFR

### Partie1FR

Installation de la DB

- allez sur phpmyadmin si vous avez installé wamp ou xamp et lancé tous les services il vous suffira alors de lancé 127.0.0.1/phpmyadmin pour y accédé
- Crée une database (Nom que vous souhaité je vais utilisé alexabot pour ma part)
- Allez sur le fichier config.json comme vue précédamment et Edité en remplacant c'est information par les votres :
```json
"host": "localhost",
"user": "root",
"pass": "",
"db": "alexabot",
```

### Partie2FR

Installation du Serveur WEB + Introduction du site nous permettant de remplir la base de donnée.

- par default vous devez mettre le site (le dossier inscription_gen) dans le repertoire www associé a votre logiciel ( WAMP ou autre )
- puis allez [ici](http://127.0.0.1) et normalement la page d'inscription de la DB s'affiche
- Il nous reste plus qu'a configuré le Fichier configPHP.json se trouvant aussi dans le dossier settings avec les memes information que l'étape précendante :
```json
[{
    "host": "localhost",
    "user": "root",
    "pass": "",
    "db": "zenbot"
}]
```

## US

## IntroductionUS

<p> Bot Made in 1 week </p> 
<table>
  <th>
   Used  Language
  </th>
  <td>
    Javascript 75%
  </td>
  <td>
    PHP / HTML 15%
  </td>
  <td>
    SQL 5% 
  </td>
</table>
<p> Multiple Command + Generator VIA DB My Sql + part registre in the DB automatically with request POST </p>

## PreRequisUS

- Node JS 
- AlexaBot 
- Serveur WEB (MySql / Apache2)

## LinuxVersionUS



## WindowsVersionUS

### NODEJS

Installé [Node JS](https://nodejs.org)

### Verication

    
