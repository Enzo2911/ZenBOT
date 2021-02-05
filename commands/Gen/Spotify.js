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
    //aliases: ["gen-sp", "gen-spt"],
    // name: "gen-spotify",
    category: "GenerateurCompte",
    description: "Permet de générer un compte Spotify si vous est Platinium ou Ultimate",
    usage: '[Doit avoir un abonnement Platinium ou Ultimate]',
    run: async (Alexa, message, args, prefix, log) => {
        
        db.query(`SELECT platinium as plat, ultimate as ulti FROM registre WHERE id = ${id}`, async (error, results) => {
            if (error) throw error;

            if (results[0].plat !== 1 || results[0].ultimate !== 1) return message.reply("Vous n'avez pas d'abonnement pour utilisé le Bot");

            db.query(`SELECT user, pass, capture FROM genspotify WHERE id = ${id}`, async (error, results) => {
                if (error) throw error;
            })
        })
    }
}

