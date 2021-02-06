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
    description: "Affiche les stats de la db // NB Plat / NB Ultimate / NB AutoHit Ou via l'ID les stats de la personne associé a cette ID",
    usage: '[ID]',
    run: async (Alexa, message, args, prefix, log, admin) => {
        let adminauthorization = admin;
        let id = args.join(" ");
        if (!adminauthorization.includes(message.author.id)) return;
        if(args[0]) {
            db.query(`SELECT id, user, DATEDIFF(\`Date Fin Abonnement\`, \`Date Debut Abonnement\`) as restant, IF(ultimate = 1, 1, NULL) as yeultimate, IF(platinium = 1, 1, NULL) as yeplatinium, IF(autohit = 1, 1, NULL) as yeautohit, \`Date Inscription\` as dateinscrit, IF(platinium = 1, nbgenplat, NULL) as nbgenplatinium, IF(ultimate = 1, nbgenulti, NULL) as nbgenultimate, IF(autohit = 1, nbgenautohit, NULL) as nbgenautohit, \`Date Debut Abonnement\` as dda, \`Date Fin Abonnement\` as dfa FROM registre WHERE id = ${id}`, async (error, results) => {
                if (error) return message.reply("ID Invalide ou ID pas inscrit dans la DB");
                if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
                const DBHELPID = new MessageEmbed();
                let ultimate;
                let platinium;
                let autohit;
                let nbgenrestant;
                let dateabonnement;
                let dateabonnementfin;
                let restant;
                if(results[0].yeautohit == null) {
                    autohit = "Nopp";
                } else {
                    autohit = "Yepa";
                    nbgenrestant = results[0].nbgenautohit;
                    dateabonnement = results[0].dda;
                    dateabonnementfin = results[0].dfa;
                    restant = results[0].restant;
                }
                if(results[0].yeultimate == null) {
                    ultimate = "Nopp";
                } else {
                    ultimate = "Yepa";
                    nbgenrestant = results[0].nbgenultimate;
                    dateabonnement = results[0].dda;
                    dateabonnementfin = results[0].dfa;
                    restant = results[0].restant;
                }
                if(results[0].yeplatinium == null) {
                    platinium = "Nopp";
                } else {
                    platinium = "Yepa";
                    nbgenrestant = results[0].nbgenplatinium;
                    dateabonnement = results[0].dda;
                    dateabonnementfin = results[0].dfa;
                    restant = results[0].restant;
                }
                if(results[0].dda == undefined) {
                    dateabonnement = "Pas d'abonnement"
                }
                if(results[0].restant == undefined) {
                    restant = "Pas d'abonnement"
                }
                if(results[0].dfa == undefined) {
                    dateabonnementfin = "Pas d'abonnement"
                }
                if(results[0].nbgenplatinium == undefined) {
                    nbgenrestant = "Pas d'abonnement";
                }
                message.channel.send(DBHELPID
                    .setFooter('Copyright @AlexaBot @2021')
                    .setTitle("**Statistique de la base de données :**")
                    .addFields(
                        { name: '__ID :__', value: `${results[0].id}`, inline: false},
                        { name: '__Username Inscrit sur la db :__', value: `${results[0].user}`, inline: false},
                        { name: '__AutoHit : __', value: `${autohit}`, inline: true},
                        { name: '__Ultimate : __', value: `${ultimate}`, inline: true},
                        { name: '__Platinium : __', value: `${platinium}`, inline: true},
                        { name: '__Nombre Gen Restant__', value: `${nbgenrestant}`, inline: false},
                        { name: '__Date Debut Abonnement : __', value: `${dateabonnement}`, inline: true},
                        { name: '__Date Fin Abonnement : __', value: `${dateabonnementfin}`, inline: true},
                        { name: '__Jours Restant Abonnement : __', value: `${restant}`, inline: false},
                        { name: '__Date Inscription dans la DB : __', value: `${results[0].dateinscrit}`, inline: false},
                    )
                    .setTimestamp()
                    .setThumbnail(Alexa.user.displayAvatarURL())
                    )
            })
        } else {
        db.query(`SELECT COUNT(id) as nbtotal, COUNT(IF(autohit = 1, 1, NULL)) as nbautohit, COUNT(IF(ultimate = 1, 1, NULL)) as nbultimate, COUNT(IF(platinium = 1, 1, NULL)) as nbplatinium FROM registre`, async (error, results) => {
            if (error) throw error;
            const DBHELP = new MessageEmbed();
            message.channel.send(DBHELP
                .setFooter('Copyright @AlexaBot @2021')
                .setTitle("**Statistique de la base de données :**")
                .addFields(
                  //  { name: '__Nom de la DB :__', value: `$`, inline: true}
                    { name: '__Nombre d\'inscrit dans la db__', value: `${results[0].nbtotal}`, inline: false},
                    { name: '__Stats AutoHit__', value: `${results[0].nbautohit}`, inline: true},
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

