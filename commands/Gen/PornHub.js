let config = require('../../settings/config.json');
const mysql = require('mysql');
const chalk = require('chalk');

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.pass,
    database: config.db
});


db.connect();

module.exports = {
    name: "gen-pornhub",
    category: "GenerateurCompte",
    description: "Permet de généré un Compte PornHub si vous êtes Platinium ou Ultimate ou AutoHit",
    usage: '[Doit avoir un abonnement Platinium ou Ultimate ou AutoHit]',
    run: async (Alexa, message, args, prefix, log) => {
        if (message.channel.id !== config.channel) {
            message.reply("Tu est qui ? pour me reveillé comme ca :thinking: de plus tu n'est meme pas autorizé a le faire");
            Alexa.channels.cache.get(log).send("Une personne a tenté d'effecuté une commande hors channel autorizé \nName : " + message.author.username + "\nID : " + message.author.id)
        } else {
            db.query(`SELECT autohit, platinium as plat, ultimate as ulti, nbgenplat, nbgenulti, nbgenautohit FROM registre WHERE id = ${message.author.id}`, async (error, results) => {
                if (error) return message.reply("ID Invalide ou ID pas inscrit dans la DB");
                if (results.length === 0) return message.reply(`<@!${message.author.id}> n'est pas inscrit dans la base de données.`);
                if ((results[0].plat === 1) || (results[0].ulti === 1) || (results[0].autohit === 1)) {
                    db.query(`SELECT id, user, pass, capture as cap FROM genpornhub`, async (error, results2) => {
                        if (error) throw error;
                        if (results2[0] !== undefined) {
                            if (results[0].plat === 1) {
                                //console.log(results[0].nbgenplat)
                                if (results[0].nbgenplat <= 0) return message.reply("Vous avez trop généré pour aujourd'hui revenez demain.");
                                message.reply("Un compte va vous être envoyé en privé")
                                message.author.send(`Voici le Compte PornHub : ${results2[0].user}:${results2[0].pass} // Capture :  ${results2[0].cap}`).catch(() => message.reply("Active tes DM plz"));
                                console.log("")
                                console.log(chalk.bgYellow(`Compte Envoyé a : ${message.author.username} // ID : ${message.author.id} // Compte en question : ${results2[0].user}:${results2[0].pass} // Capture :  ${results2[0].cap}`))
                                db.query(`DELETE FROM genpornhub WHERE id = ${results2[0].id}`, async (error) => {
                                    if (error) throw error;
                                })
                                db.query(`UPDATE registre SET nbgenplat = nbgenplat - 1 WHERE id = ${message.author.id}`, async (error) => {
                                    if (error) throw error;
                                })
                            } else if (results[0].ulti === 1) {
                                if (results[0].nbgenulti <= 0) return message.reply("Vous avez trop généré pour aujourd'hui revenez demain.");
                                message.reply("Un compte va vous être envoyé en privé")
                                message.author.send(`Voici le Compte PornHub : ${results2[0].user}:${results2[0].pass} // Capture :  ${results2[0].cap}`).catch(() => message.reply("Active tes DM plz"));
                                console.log("")
                                console.log(chalk.bgYellow(`Compte Envoyé a : ${message.author.username} // ID : ${message.author.id} // Compte en question : ${results2[0].user}:${results2[0].pass} // Capture :  ${results2[0].cap}`))
                                db.query(`DELETE FROM genpornhub WHERE id = ${results2[0].id}`, async (error) => {
                                    if (error) throw error;
                                })
                                db.query(`UPDATE registre SET nbgenulti = nbgenulti - 1 WHERE id = ${message.author.id}`, async (error) => {
                                    if (error) throw error;
                                })
                            } else if (results[0].autohit === 1) {
                                if (results[0].nbgenautohit <= 0) return message.reply("Vous avez trop généré pour aujourd'hui revenez demain.");
                                message.reply("Un compte va vous être envoyé en privé")
                                message.author.send(`Voici le Compte PornHub : ${results2[0].user}:${results2[0].pass} // Capture :  ${results2[0].cap}`).catch(() => message.reply("Active tes DM plz"));
                                console.log("")
                                console.log(chalk.bgYellow(`Compte Envoyé a : ${message.author.username} // ID : ${message.author.id} // Compte en question : ${results2[0].user}:${results2[0].pass} // Capture :  ${results2[0].cap}`))
                                db.query(`UPDATE registre SET nbgenautohit = nbgenautohit - 1 WHERE id = ${message.author.id}`, async (error) => {
                                    if (error) throw error;
                                })
                            } else {
                                message.reply("Tes obligatoirement un admin qui c'est mis les deux perms donc NTM")
                            }
                        } else {
                            message.reply("Désolé il n'y a plus de Compte PornHub");
                        }
                    })
                } else {
                    return message.reply("Vous n'avez pas d'abonnement pour utilisé le Bot");
                }
            })
        }
    }
}


