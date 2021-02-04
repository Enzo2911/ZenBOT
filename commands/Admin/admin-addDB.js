const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user     : 'root',
    password : '',
    database : 'zenbot'
});

db.connect();

module.exports = {
    name: "admin-add",
    category: "AdminDB",
    description: "Permet de modifié les permission  Platinium et Ultimate des utilisateurs de la db",
    usage: '"<ID DE LA PERSONNE> // Reaction message : 1 = Platinium // 2 = Ultimate',
    run: async (Alexa, message, args, prefix, log) => {
        
        let id = args.join(" ");
        let adminauthorization = ("805933660729638913", "799168976668065852", "701480495690547351")
        if (message.author.id !== adminauthorization) return;
        if(!args[0]) {
            message.channel.send("Usage : " + prefix + "Admin-add <ID>")
        } else {
        db.query(`SELECT user, ultimate as ulti, platinium as plat FROM registre WHERE id = ${id}`, async (error, results) => {
            if (error) throw error;
            if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
            message.react('1️⃣').then(() => message.react('2️⃣'));
            const filter = (reaction, user) => {
                    return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id !== Alexa.user.id;
            };
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '1️⃣') {
                        if (results[0].plat !== 1) {
                            db.query(`UPDATE registre SET platinium = "1" WHERE id = ${message.author.id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Ajout Platinium\n```Nom : " + message.author.username + " \nID : " + message.author.id + "```")
                                db.end();
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> est déja platinium`)
                        }
                    }
                    if (reaction.emoji.name === '2️⃣') {
                        if (results.length === 0) return message.reply(`<@!${id}> n'est pas inscrit dans la base de données.`);
                        if (results[0].ulti !== 1) {
                            db.query(`UPDATE registre SET ultimate = "1" WHERE id = ${message.author.id}`, function (error) {
                                if (error) throw error;
                                message.delete()
                                message.reply("Alexa a éffectué votre ordre")
                                Alexa.channels.cache.get(log).send("Ajout Ultimate\n```Nom : " + message.author.username + " \nID : " + message.author.id + "```")
                                db.end();
                            });
                        } else {
                            message.delete()
                            message.reply(`<@!${id}> est déja ultimate`)
                        }
                    }
                })
                .catch(collected => {
                    message.reply('Alexa dit : tu n\'a pas réagis');
                });
        })} 
    }
}

