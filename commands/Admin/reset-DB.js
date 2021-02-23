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
    aliases: ["admin-rdb"],
    name: "admin-resetdb",
     category: "AdminBot",
     description: "Permet de reset une db en particulier si mentionné ou toute les DB",
     usage: '"<gen + nomdeladb>" or nothing',
     run : async(Alexa, message, args, prefix, log, admin) => {
        let adminauthorization = admin;
        if (!adminauthorization.includes(message.author.id)) return;
        let choixdb = args.join(" ").toLowerCase();
        let i = 0;
        if (!choixdb) {
            do {
                db.query(`TRUNCATE TABLE ${config.gendispo[i]}`, async (error, results) => {
                    if(error) throw error;
                })
                i++
            }
            while(i < config.gendispo.length)
            message.reply("Toute les tables de generateur ont été vidée. !")
        } else {
        db.query(`TRUNCATE TABLE ${choixdb}`, async (error, results) => {
            if(error) return message.reply("La table demandé n'existe pas. !");
            message.reply("La table demandé a été vidée. !")
        })
     }
    }
}