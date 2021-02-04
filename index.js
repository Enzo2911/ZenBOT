/* Module Discord */

const Discord = require('discord.js');
const Alexa = new Discord.Client();
const { loadCommands } = require('./utils/loadexport.js');
const Ascii = require('ascii-table');
const Chalk = require('chalk');
const fs = require("fs");

/* LOGIN */

let config = require('./settings/config.json');

if(!config.token) {
    console.error("Token pas inserer. !!");
} else {
    Alexa.login(config.token).catch(error => { 
       if (error.code == 'TOKEN_INVALID') {
            console.error("Invalide TOKEN");
       }
    })
}

/* END */

/* Base de données */

const mysql = require('mysql');

const db = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.pass,
    database : config.db
});

db.connect();

/* END */

/* Categories */

Alexa.commands = new Discord.Collection();
Alexa.aliases = new Discord.Collection();
Alexa.categories = fs.readdirSync("./commands/");

/* END */

/* Console LAUNCH */

Alexa.once('ready', () => {
    /* Appel les commandes */
    loadCommands(Alexa, Discord, Ascii, Chalk, Alexa.commands, Alexa.aliases); 
    /* Logs ready console */
    console.log("             Bot Lancé.");
    /* Activité de Alexa */
    Alexa.user.setActivity("zencommunity.xyz // @mentionmeforhelp", {
        type: "WATCHING",
    })     
});

Alexa.on('message', async message => {

    // Log DB // Met tout sa au four
    let log = config.logdb;
    // Ecrire une requete sql
    let req;
    // Alexa est un peu fainéant elle reduit message.content en msg
    let msg = message.content;
    // raccourcci du prefix du a une erreur dans mon load export (maniere de fixe) pour appele le prefix
    let prefix = config.prefix;
    // Alexa est un peu timide lorsqu'il faut discuté avec d'autre bot (H&F)
    if (message.author.bot) return;
    // Alexa aime pas lorsqu'ont parle en privé avec elle
    if(message.channel.type == "dm") return;
    // Si la personne == pas enregistré dans la dbb alors Alexa le fait
    db.query(`SELECT id, user FROM registre WHERE id = ${message.author.id}`, async (error, results) => {
            if (error) throw error;
            if(results.length === 0) {
                Alexa.channels.cache.get(log).send("Une nouvelle personne va être entré dans la base de données. \n```Nom : " + message.author.username + " \nID : " + message.author.id + "```")
                req = `INSERT INTO registre (id, user, ultimate, platinium) VALUES (${message.author.id}, "${message.author.username}", 0, 0)`
                db.query(req, function (error) {
                    if (error) throw error;

                })
            } else {
                return;
            }
        db.end();
    });

    try {
        // Si ont mentionne Alexa elle te répondra lorsque tu la mentionne sur le serveur officiel de ZenCommunity.
        if (message.mentions.has(Alexa.user) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
            return message.reply('Pour connaitre mes commandes tapez \n**__'+ prefix + "ZenHelp__**") 
        }
    } catch {
        // Si ont ne la pas mentionné sur le serveur ZenCommunity elle reste timide
        return;
    };


    // si la commande ne commence pas par le prefix definie.
    if(!message.content.startsWith(prefix)) return;
    // args = message commence par le prefix == nombre de caractère + enleve les espace et sépare en capturant ++
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    // enleve le prefix et transforme la commande écrite en minuscule.
    const cmd = args.shift().toLowerCase();
    // Alexa verifie que la commande n'est pas null
    if (cmd.lenght === 0) return;
    // Alexa recupere toute les commandes de sont dossier commands/ et les lances si il sont "appelé"
    let command = Alexa.commands.get(cmd);
    // si la commende ne fais pas partie des commandes principales elle va chercher la commande dans les alias
    if (!command) command = Alexa.commands.get(Alexa.aliases.get(cmd));
    // lance la commande une fois trouvé
    if (command) command.run(Alexa, message, args, prefix, log);
});
/* END */
