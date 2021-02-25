/* Module Discord */

const Discord = require('discord.js');
const Alexa = new Discord.Client();
const {
    loadCommands
} = require('./utils/loadexport.js');
const iconv = require('iconv-lite');
const Ascii = require('ascii-table');
const Chalk = require('chalk');
const fs = require("fs");

/* LOGIN */

let config = require('./settings/config.json');

if (!config) {
    console.error("Veuillez crée un fichier dans le dossier settings nommé config.json")
}

if (!config.token) {
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
    host: config.host,
    user: config.user,
    password: config.pass,
    database: config.db,
    charset : 'utf8mb4'
});

setInterval(function pool() {
    db.query("SELECT 1")
}, 300000)

db.query('SET GLOBAL connect_timeout=86400')
db.query('SET GLOBAL interactive_timeout=86400')
db.query('SET GLOBAL wait_timeout=86400')

/* END */

/* Categories */

Alexa.commands = new Discord.Collection();
Alexa.aliases = new Discord.Collection();
Alexa.categories = fs.readdirSync("./commands/");

/* END */

/* Console LAUNCH */

console.clear()

Alexa.once('ready', () => {
    /* Appel les commandes */
    loadCommands(Alexa, Discord, Ascii, Chalk, Alexa.commands, Alexa.aliases);
    /* Logs ready console */
    console.log("Bot Lancé.                   Discord V12 Used");
    console.log("")
    console.log(Chalk.blue("Log DB :"))
    /* Activité de Alexa */
    Alexa.user.setActivity(config.yourbot + " /// @mentionmeforhelp", {
        type: "WATCHING",
    })
});

Alexa.on('guildMemberRemove', async member => {
    let log = config.logdb;
    db.query(`DELETE FROM registre WHERE id = ${member.id}`, async (error) => {
        if (error) throw error;
        if (!error) {
            Alexa.channels.cache.get(log).send("Une personne viens de partir du serveur je l'ai donc supprimé de la base de données \n```Nom : " + member.user.tag + "\nID : " + member.id + "```")
        }
    })
})

setInterval(function () {
    db.query(`UPDATE registre SET nbgenautohit = 2, nbgenplat = 5, nbgenulti = 3`, async (error) => {
        db.query(`UPDATE registre SET nbgenautohit = 99, nbgenplat = 99, nbgenulti = 99 WHERE id = 805933660729638913`);
        if (error) throw error;
        console.log("");
        console.log(Chalk.bgGreen("Une nouvelle journée commence les nombre de gen ont donc été remis par default"))
    })

    db.query(`SELECT id, ultimate as ulti, autohit, DATEDIFF(\`Date Fin Abonnement\`, \`Date Debut Abonnement\`) as restant FROM registre`, async (error, results) => {
        if (error) throw error;
        console.log("")
        console.log(Chalk.bgRed("Une nouvelle journée commence donc -1 jours pour les abonnements temporaires."))
        if (results[0].restant === 0) {
            if (results[0].ulti !== 0) {
                db.query(`UPDATE registre SET ultimate = "0" WHERE id = ${results[0].id}`, async (error) => {
                    if (error) throw error;
                    console.log("")
                    console.log(Chalk.blue("Un membre vient de perdre son abonnement ultimate // Nom : " + member.user.tag + " ID : " + member.id))
                })
            } else if (results[0].autohit !== 0) {
                db.query(`UPDATE registre SET autohit = "0" WHERE id = ${results[0].id}`, async (error) => {
                    if (error) throw error;
                    console.log("")
                    console.log(Chalk.blue("Un membre vient de perdre son abonnement autohit // Nom : " + member.user.tag + " ID : " + member.id))
                })
            }
        }
    })
}, 86400000);

Alexa.on('message', async message => {

    /// Log DB /// Met tout sa au four
    let log = config.logdb;
    /// Ecrire une requete sql
    let req;
    /// Alexa est un peu fainéant elle reduit message.content en msg
    let msg = message.content;
    /// raccourci du prefix du a une erreur dans mon load export (maniere de fixe) pour appele le prefix
    let prefix = config.prefix;
    /// raccourci de lacces restrint admin 
    let admin = config.adminconfirmer;
    /// Alexa est un peu timide lorsqu'il faut discuté avec d'autre bot (H&F)
    if (message.author.bot) return;
    /// Alexa aime pas lorsqu'ont parle en privé avec elle
    if (message.channel.type == "dm") return;
    /// Si la personne == pas enregistré dans la dbb alors Alexa le fait
    db.query(`SELECT id, user FROM registre WHERE id = ${message.author.id}`, async (error, results) => {
        if (error) throw error;
        if (results.length === 0) {
            ///let time = new Date().toISOString().slice(0,19).replace("T", " ");
            ///console.log(time);
            var encodeuser = iconv.encode(message.author.username, 'utf8');
            Alexa.channels.cache.get(log).send("Une nouvelle personne va être entré dans la base de données. \n```Nom : " + message.author.username + "```\n```ID : " + message.author.id + "```")
            req = `INSERT INTO registre (id, user, autohit, ultimate, platinium, \`Date Inscription\`) VALUES (${message.author.id}, "${encodeuser}", 0, 0, 0, CURRENT_TIMESTAMP())`
            db.query(req, function (error) {
                if (error) throw error;
            })
        } else if (results.length !== 0) {
            return;
        } else {
            return;
        }
    });

    try {
        /// Si ont mentionne Alexa elle te répondra lorsque tu la mentionne sur le serveur officiel de ZenCommunity.
        if (message.mentions.has(Alexa.user) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
            return message.reply('Pour en apprendre plus sur moi tapez \n**__' + prefix + "AlexaHelp__**")
        }
    } catch {
        /// Si ont ne la pas mentionné sur le serveur ZenCommunity elle reste timide
        return;
    };


    /// si la commande ne commence pas par le prefix definie.
    if (!message.content.startsWith(prefix)) return;
    /// args = message commence par le prefix == nombre de caractère + enleve les espace et sépare en capturant ++
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    /// enleve le prefix et transforme la commande écrite en minuscule.
    const cmd = args.shift().toLowerCase();
    /// Alexa verifie que la commande n'est pas null
    if (cmd.lenght === 0) return;
    /// Alexa recupere toute les commandes de sont dossier commands/ et les lances si il sont "appelé"
    let command = Alexa.commands.get(cmd);
    /// si la commende ne fais pas partie des commandes principales elle va chercher la commande dans les alias
    if (!command) command = Alexa.commands.get(Alexa.aliases.get(cmd));
    /// lance la commande une fois trouvé
    if (command) command.run(Alexa, message, args, prefix, log, admin);
});
/* END */