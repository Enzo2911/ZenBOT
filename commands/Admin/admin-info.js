let config = require('../../settings/config.json');
const mysql = require('mysql');
const {MessageEmbed} = require("discord.js");

const db = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.pass,
    database : config.db
});


db.connect();

module.exports = {
    name: "admin-info",
    category: "AdminDB",
    description: "Affiche les stats de la db // NB Plat / NB Ultimate Ou via l'ID les stats de la personne associé a cette ID",
    usage: '[ID]',
    run: async (Alexa, message, args, prefix, log) => {

        let id = args.join(" ");
        let adminauthorization = ["805933660729638913", "799168976668065852", "701480495690547351"]
        if (!adminauthorization.includes(message.author.id)) return;
        if(args[0]) {
            db.query(`SELECT id, user, IF(ultimate = 1, 1, NULL) as yeultimate, IF(platinium = 1, 1, NULL) as yeplatinium, \`Date Inscription\` as dateinscrit FROM registre WHERE id = ${args[0]}`, async (error, results) => {
                const DBHELPID = new MessageEmbed();
                let ultimate;
                let platinium;
                if(results[0].yeultimate == null) {
                    ultimate = "Nopp";
                } else {
                    ultimate = "Yepa";
                }
                if(results[0].yeplatinium == null) {
                    platinium = "Nopp";
                } else {
                    platinium = "Yepa";
                }
                message.channel.send(DBHELPID
                    .setFooter('Copyright @AlexaBot @2021')
                    .setTitle("**Statistique de la base de données :**")
                    .addFields(
                        { name: '__ID :__', value: `${results[0].id}`, inline: false},
                        { name: '__Username Inscrit sur la db :__', value: `${results[0].user}`, inline: false},
                        { name: '__Ultimate : __', value: `${ultimate}`, inline: true},
                        { name: '__Platinium : __', value: `${platinium}`, inline: true},
                        { name: '__Date Inscription dans la DB : __', value: `${results[0].dateinscrit}`, inline: false},
                    )
                    .setTimestamp()
                    .setThumbnail(Alexa.user.displayAvatarURL())
                    )
            })
        } else {
        db.query(`SELECT COUNT(id) as nbtotal, COUNT(IF(ultimate = 1, 1, NULL)) as nbultimate, COUNT(IF(platinium = 1, 1, NULL)) as nbplatinium FROM registre`, async (error, results) => {
            if (error) throw error;
            const DBHELP = new MessageEmbed();
            message.channel.send(DBHELP
                .setFooter('Copyright @AlexaBot @2021')
                .setTitle("**Statistique de la base de données :**")
                .addFields(
                  //  { name: '__Nom de la DB :__', value: `$`, inline: true}
                    { name: '__Nombre d\'inscrit dans la db__', value: `${results[0].nbtotal}`, inline: false},
                    { name: '__Stats Platinium__', value: `${results[0].nbplatinium}`, inline: true},
                    { name: '__Stats Ultimate__', value: `${results[0].nbultimate}`, inline: true},
                )
                .setTimestamp()
                .setThumbnail(Alexa.user.displayAvatarURL())
            )
        })
        }
    }
}

