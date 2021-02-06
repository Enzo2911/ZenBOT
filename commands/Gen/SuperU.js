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
    aliases: ["gen-superu"],
    name: "gen-superu",
    category: "GenerateurCompte",
    description: "Permet de générer un compte Super-U si vous est Platinium ou Ultimate",
    usage: '[Doit avoir un abonnement Platinium ou Ultimate]',
    run: async (Alexa, message, args, prefix, log) => {
        db.query(`SELECT platinium as plat, ultimate as ulti, nbgenplat, nbgenulti FROM registre WHERE id = ${message.author.id}`, async (error, results) => {
            if (error) throw error;
            // console.log(results[0])
            if ((results[0].plat === 1) || (results[0].ulti === 1)) {
                db.query(`SELECT id, user, pass, capture FROM gensuperu`, async (error, results2) => {
                    if (error) throw error;
                    if (results2[0] !== undefined) {
                        if (results[0].plat === 1) {
                            //console.log(results[0].nbgenplat)
                            if (results[0].nbgenplat <= 0) return message.reply("Vous avez trop générer pour aujourd'hui revenez demain.");
                            message.reply("Un compte va vous être envoyé en privé")
                            message.author.send(`Voici le Compte Super-U : ${results2[0].user}:${results2[0].pass} // Capture :  ${results[0].capture}`)
                            db.query(`DELETE FROM gensuperu WHERE id = ${results2[0].id}`, async (error) => {
                                if (error) throw error;
                            })
                            db.query(`UPDATE registre SET nbgenplat = nbgenplat - 1 WHERE id = ${message.author.id}`, async (error) => {
                                if (error) throw error;
                            })
                        } else if (results[0].ulti === 1) {
                            //console.log(results[0].nbgenulti)
                            if (results[0].nbgenulti <= 0) return message.reply("Vous avez trop générer pour aujourd'hui revenez demain.");
                            message.reply("Un compte va vous être envoyé en privé")
                            message.author.send(`Voici le Compte Super-U : ${results2[0].user}:${results2[0].pass} // Capture :  ${results[0].capture}`)
                            db.query(`DELETE FROM gensuperu WHERE id = ${results2[0].id}`, async (error) => {
                                if (error) throw error;
                            })
                            db.query(`UPDATE registre SET nbgenulti = nbgenulti - 1 WHERE id = ${message.author.id}`, async (error) => {
                                if (error) throw error;
                            })
                        } else {
                            message.reply("Tes obligatoirement un admin qui c'est mis les deux perms donc NTM")
                        }
                    } else {
                        message.reply("Désolé il n'y a plus de compte SuperU");
                    }
                })
            } else {
                return message.reply("Vous n'avez pas d'abonnement pour utilisé le Bot");
            }
        })
    }
}

