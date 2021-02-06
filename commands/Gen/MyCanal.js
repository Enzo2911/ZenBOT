let config = require('../../settings/config.json');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.pass,
    database: config.db
});


db.connect();

module.exports = {
    name: "gen-mycanal",
    category: "GenerateurCompte",
    description: "Permet de générer un Compte MyCanal si vous est Platinium ou Ultimate ou AutoHit",
    usage: '[Doit avoir un abonnement Platinium ou Ultimate ou AutoHit]',
    run: async (Alexa, message, args, prefix, log) => {
        db.query(`SELECT autohit, platinium as plat, ultimate as ulti, nbgenplat, nbgenulti, nbgenautohit FROM registre WHERE id = ${message.author.id}`, async (error, results) => {
            if (error) throw error;
            // console.log(results[0])
            if ((results[0].plat === 1) || (results[0].ulti === 1) || (results[0].autohit === 1)) {
                db.query(`SELECT id, user, pass, capture FROM genmycanal`, async (error, results2) => {
                    if (error) throw error;
                    if (results2[0] !== undefined) {
                        if (results[0].plat === 1) {
                            //console.log(results[0].nbgenplat)
                            if (results[0].nbgenplat <= 0) return message.reply("Vous avez trop générer pour aujourd'hui revenez demain.");
                            message.reply("Un compte va vous être envoyé en privé")
                            message.author.send(`Voici le Compte MyCanal : ${results2[0].user}:${results2[0].pass} // Capture :  ${results[0].capture}`)
                            db.query(`DELETE FROM genmycanal WHERE id = ${results2[0].id}`, async (error) => {
                                if (error) throw error;
                            })
                            db.query(`UPDATE registre SET nbgenplat = nbgenplat - 1 WHERE id = ${message.author.id}`, async (error) => {
                                if (error) throw error;
                            })
                        } else if (results[0].ulti === 1) {
                            if (results[0].nbgenulti <= 0) return message.reply("Vous avez trop générer pour aujourd'hui revenez demain.");
                            message.reply("Un compte va vous être envoyé en privé")
                            message.author.send(`Voici le Compte MyCanal : ${results2[0].user}:${results2[0].pass} // Capture :  ${results[0].capture}`)
                            db.query(`DELETE FROM genmycanal WHERE id = ${results2[0].id}`, async (error) => {
                                if (error) throw error;
                            })
                            db.query(`UPDATE registre SET nbgenulti = nbgenulti - 1 WHERE id = ${message.author.id}`, async (error) => {
                                if (error) throw error;
                            })
                        } else if (results[0].autohit === 1) { 
                            if (results[0].nbgenautohit <= 0) return message.reply("Vous avez trop générer pour aujourd'hui revenez demain.");
                            message.reply("Un compte va vous être envoyé en privé")
                            
                            db.query(`UPDATE registre SET nbgenautohit = nbgenautohit - 1 WHERE id = ${message.author.id}`, async (error) => {
                                if (error) throw error;
                            })
                        } else {
                            message.reply("Tes obligatoirement un admin qui c'est mis les deux perms donc NTM")
                        }
                    } else {
                        message.reply("Désolé il n'y a plus de Compte MyCanal");
                    }
                })
            } else {
                return message.reply("Vous n'avez pas d'abonnement pour utilisé le Bot");
            }
        })
    }
}


