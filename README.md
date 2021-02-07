# AlexaBOT

## Table of Contents

- [Version Francaise](#FR)
  - [Introduction](#introductionFR)
  - [PreRequis](#prerequisFR)
  - [Installation Linux Version](#InstallationLinux)
  - [Installation Windows Version](#InstallationWindows)
      - [Node JS](#NODEJS-FR)
        - [Verification Installation](#Verication)
        - [Récupéré le Token](#RecupereToken)
        - [Comment Crée un BOT](#CommentCreeUnBOT)
        - [Edité le Fichier config.json](#EditeFichierConfig)
      - [WEB SERVER](#ServerWEB)
        - [Installation de la DB + Config](#Partie1)
        - [Installation du Serveur WEB + Config](#Partie2)
- [Version Anglais](#US)
  - [Introduction](#introductionUS)
  - [PreRequis](#prerequisUS)
  - [Linux Version Installation](#LinuxInstallation)
  - [Windows Version Installation](#WindowsInstallation)
      - [Node JS](#NODEJS-US)
        - [Verification Installation](#Checking)
        - [Get the Token](#GetToken)
        - [How to Make BOT](#HowMakeBot)
        - [Edit the File config.json](#EditFileConfig)
      - [WEB SERVER](#WEBServer)
        - [Installation of the DB + Config](#Part1)
        - [Installation of Serveur WEB + Config](#Part2)

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

## InstallationLinux

Plus Tard

## InstallationWindows

### NODEJS-FR

Installé [Node JS](https://nodejs.org)

### Verication

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

### RecupereToken

- Récupé le token de sont [bot discord](http://discord.com/developers/applications)

### CommentCreeUnBOT

- New Application
- Bot
- Add Bot

Et Voila nous avons récupéré le token mettez le de coté.

### EditeFichierConfig

Le fichier que nous allons édité se trouve dans le dossier settings
Nom du fichier : config.json 

- Vous allez devoir mettre le token de votre bot dans la partie token
- Vous pouvez aussi changé le prefix si vous le souhaité 
- Configuré les perms admin via votre ID Discord
- Et LOGDB qui est l'endroit ou vous allez recevoir vos log lorsqu'une personne executera une commande ou entrera dans la DB

### ServerWEB

### Partie1

Installation de la DB

- allez sur phpmyadmin si vous avez installé wamp ou xamp et lancé tous les services il vous suffira alors de lancé 127.0.0.1/phpmyadmin pour y accédé
- Crée une database (Nom que vous souhaité je vais utilisé alexabot pour ma part)
- Allez dans le dossier base de données et importez le fichier nommé TableTYPEAlexaBOT.sql dans la base de données que vous avez créée
- Allez sur le fichier config.json comme vue précédamment et Edité en remplacant c'est information par les votres :

```json
"host": "localhost",
"user": "root",
"pass": "",
"db": "alexabot",
```

### Partie2

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

## LinuxInstallation

Plus Tard

## WindowsInstallation

### NODEJS-US

Please Installed this : [Node JS](https://nodejs.org)

### Cheking

<p> When NODE JS installed : </p>
<p> Instruction: </p>
  
```cmd
Windows R ==> cmd

Node -v Displays the version of NODE JS 

If nothing is displayed, please reinstall Node JS. 

Once the verification is done, go to the directory where AlexaBOT is located via cd destination.

  --> npm start 
  
everything should be fine if you encounter some problems with the manually installed modules npm i nameofmodule.

```

### GetToken

- Retrieved the token from this [bot discord](http://discord.com/developers/applications)

### HowMakeBot

- New Application
- Bot
- Add Bot

### EditFileConfig

The file we are going to edit is in the settings folder.
File name: config.json 

- You'll have to put the token of your bot in the token part
- You can also change the prefix if you want to. 
- Configured admin perms via your Discord ID
- And LOGDB which is the place where you will receive your logs when someone executes a command or enters the DB.


### WEBServer

### Part1

Installation of the DB

- go to phpmyadmin if you have installed wamp or xamp and launched all the services, you just need to launch 127.0.0.1/phpmyadmin to access it.
- Create a database (Name you want me to use alexabot for my part)
- go to phpmyadmin if you have installed wamp or xamp and launched all the services, you just need to launch 127.0.0.1/phpmyadmin to access it.
- Go to folder database and import the file named TableTYPEAlexaBOT.sql in the database you have create
- Go to the config.json file as the previous view and edit it replacing this information with your own:

```json
"host": "localhost",
"user": "root",
"pass": "",
"db": "alexabot",
```

### Part2

Installation of the WEB Server + Introduction of the site allowing us to fill the database.

- by default you must put the site (the folder inscription_gen) in the www directory associated with your software ( WAMP or other )
- then go [here](http://127.0.0.1) and normally the DB registration page is displayed
- Now we only need to configure the configPHP.json file, which is also located in the settings folder with the same information as the previous step:

```json
[{
    "host": "localhost",
    "user": "root",
    "pass": "",
    "db": "zenbot"
}]
```
