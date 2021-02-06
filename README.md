# AlexaBOT

## Table of contents

- [Version Francaise](#FR)
  - [Introduction](#introduction)
  - [PreRequis](#prerequis)
  - [Installation Linux Version](#LinuxVersion)
  - [Installation Windows Version](#WindowsVersion)
    - [Node JS](#NODEJS)
      - [Verification Installation](#Verication)
      - [Comment Crée Un BOT](#RecupereToken)
      - [Edité le Fichier config.json](#EditeFichierConfig)
     - [WEB SERVER](#ServerWEB)
- [Version Anglais](#US)

## FR

## Introduction 

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

## PreRequis

- Node JS 
- AlexaBot 
- Serveur WEB (MySql / Apache2)

## LinuxVersion 



## WindowsVersion

### NODEJS

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





## US

    
