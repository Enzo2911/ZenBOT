let config = require('../../settings/config.json');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.pass,
    database : config.db
});


db.connect();

module.exports = {
    name: "admin-add",
    category: "AdminDB",
    description: "Permet de modifié les permission  Platinium et Ultimate des utilisateurs de la db",
    usage: '"<ID DE LA PERSONNE>" // Reaction message : 1 = Platinium // 2 = Ultimate // 3 = AutoHit',
    run: async (Alexa, message, args, prefix, log) => {
        let id = args.join(" ");
        let adminauthorization = ["805933660729638913", "799168976668065852", "701480495690547351", "734358014227906632"]
        if (!adminauthorization.includes(message.author.id)) return;
        if(!args[0]) {
            message.channel.send("Usage : " + prefix + "Admin-add <ID>")
        } else {
        db.query(`SELECT user, autohit, ultimate as ulti, platinium as plat FROM registre WHERE id = ${id}`, async (error, results) => {
            if (error) throw error;
            if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
            message.react('1️⃣').then(() => message.react('2️⃣')).then(() => message.react('3️⃣'));
            const filter = (reaction, user) => {
                    return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id !== Alexa.user.id;
            };
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '1️⃣') {
                        if (results[0].plat !== 1) {
                            db.query(`UPDATE registre SET platinium = "1", \`Date Debut Abonnement\` = CURRENT_DATE(), , \`Date Fin Abonnement\` = \`Date Debut Abonnement\` + INTERVAL 5 YEAR WHERE id = ${id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Ajout Platinium\nNom : <@!" + id + "> \nID : " + id)
                       
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> est déja Platinium`)
                        }
                    }
                    if (reaction.emoji.name === '2️⃣') {
                        if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
                        if (results[0].ulti !== 1) {
                            db.query(`UPDATE registre SET ultimate = "1", \`Date Debut Abonnement\` = CURRENT_DATE(), \`Date Fin Abonnement\` = \`Date Debut Abonnement\` + INTERVAL 3 MONTH  WHERE id = ${id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Ajout Ultimate\nNom : <@!" + id + "> \nID : " + id)   
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> est déja Ultimate`)
                        }
                    }
                    if (reaction.emoji.name === '3️⃣') {
                        if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
                        if (results[0].autohit !== 1) {
                            db.query(`UPDATE registre SET autohit = "1", \`Date Debut Abonnement\` = CURRENT_DATE(), \`Date Fin Abonnement\` = \`Date Debut Abonnement\` + INTERVAL 1 MONTH  WHERE id = ${id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Ajout AutoHit\nNom : <@!" + id + "> \nID : " + id)   
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> est déja AutoHit`)
                        }
                    }
                })
                .catch(collected => {
                    message.reply('Alexa dit : tu n\'a pas réagis');
                });
        })} 
    }
}

