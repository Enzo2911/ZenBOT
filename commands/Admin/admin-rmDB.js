let config = require('../../settings/config.json');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.pass,
    database : config.db
});

module.exports = {
    aliases: ["admin-rm"],
    name: "admin-remove",
    category: "AdminDB",
    description: "Permet de supprimé les permissions Platiniums et Ultimates et AutoHits des utilisateurs de la db",
    usage: '"<ID DE LA PERSONNE>" // Reaction message : 1 = Platinium // 2 = Ultimate // 3 = AutoHit',
    run: async (Alexa, message, args, prefix, log, admin) => {
        let adminauthorization = admin;
        let id = args.join(" ");
        if (!adminauthorization.includes(message.author.id)) return;
        if(!args[0]) {
            message.channel.send("Usage : " + prefix + "Admin-remove <ID>")
        } else {
        db.query(`SELECT user, autohit, ultimate as ulti, platinium as plat FROM registre WHERE id = ${id}`, async (error, results) => {
            if (error) return message.reply("ID Invalide ou ID pas inscrit dans la DB");
            if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
            message.react('1️⃣').then(() => message.react('2️⃣'));
            const filter = (reaction, user) => {
                    return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id !== Alexa.user.id;
            };
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '1️⃣') {
                        if (results[0].plat !== 0) {
                            db.query(`UPDATE registre SET platinium = "0" WHERE id = ${id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Remove Platinium\nNom : <@!" + id + "> \nID : " + id)
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> n'est déja plus Platinium`)
                        }
                    }
                    if (reaction.emoji.name === '2️⃣') {
                        if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
                        if (results[0].ulti !== 0) {
                            db.query(`UPDATE registre SET ultimate = "0" WHERE id = ${id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Remove Ultimate\nNom : <@!" + id + ">\nID : " + id)
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> n'est déja plus Ultimate`)
                        }
                    }
                    if (reaction.emoji.name === '3️⃣') {
                        if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
                        if (results[0].autohit !== 0) {
                            db.query(`UPDATE registre SET autohit = "0" WHERE id = ${id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Remove AutoHit\nNom : <@!" + id + ">\nID : " + id)
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> n'est déja plus AutoHit`)
                        }
                    }
                })
                .catch(collected => {
                    message.reply('Alexa dit : tu n\'a pas réagis');
                });
        })} 
    }
}

