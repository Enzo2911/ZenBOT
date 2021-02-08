let config = require('../../settings/config.json');
const mysql = require('mysql');
const {MessageEmbed} = require("discord.js");

const db = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.pass,
    database : config.db
});

module.exports = {
// mettra apres flm
    name: "gen-stats",
    category: "GenerateurCompte",
    description: "Affiche les statistiques en tant réel des gen dispo actuellement",
    usage: '[Doit avoir un abonnement Platinium ou Ultimate ou AutoHit]',
    run: async (Alexa, message, args) => {
        db.query(`SELECT autohit, platinium as plat, ultimate as ulti, nbgenplat, nbgenulti, nbgenautohit FROM registre WHERE id = ${message.author.id}`, async (error, results) => {
            if (error) return message.reply("ID Invalide ou ID pas inscrit dans la DB");
            if (results.length === 0) return message.reply(`<@!${message.author.id}> n'est pas inscrit dans la base de données.`);
            if ((results[0].plat === 1) || (results[0].ulti === 1) || (results[0].autohit === 1)) {
                db.query("SELECT COUNT(genadn.id) as nbstockadn, COUNT(genauchan.id) as nbstockauchan, COUNT(gencrunchyroll.id) as nbstockcrunchyroll, COUNT(gendelarte.id) as nbstockdelarte, COUNT(genespaceup.id) as nbstockespaceup, COUNT(genfrichti.id) as nbstockfrichti, COUNT(genhulu.id) as nbstockhulu, COUNT(genkfc.id) as nbstockkfc, COUNT(genking365.id) as nbstockking365, COUNT(genmolov.id) as nbstockmolov, COUNT(genmycanal.id) as nbstockmycanal, COUNT(gennordvpn.id) as nbstocknordvpn, COUNT(genorangetv.id) as nbstockorangetv, COUNT(gensalto.id) as nbstocksalto, COUNT(gensuperu.id) as nbstocksuperu, COUNT(genuptobox.id) as nbstockuptobox, COUNT(genxsplit.id) as nbstockxsplit, COUNT(genyvesrocher.id) as nbstockyvesrocher FROM genadn, genauchan, gencrunchyroll, gendelarte, genespaceup, genfrichti, genhulu, genkfc, genking365, genmolov, genmycanal, gennordvpn, genorangetv, gensalto, gensuperu, genuptobox, genxsplit, genyvesrocher WHERE genadn.id = genauchan.id AND genauchan.id = gencrunchyroll.id AND gencrunchyroll.id = gendelarte.id AND gendelarte.id = genespaceup.id AND genespaceup.id = genfrichti.id AND genfrichti.id = genhulu.id AND genhulu.id = genkfc.id AND genkfc.id = genking365.id AND genking365.id = genmolov.id AND genmolov.id = genmycanal.id AND genmycanal.id = gennordvpn.id and gennordvpn.id = genorangetv.id AND  genorangetv.id = gensalto.id AND gensalto.id = gensuperu.id AND gensuperu.id = genuptobox.id AND genuptobox.id = genxsplit.id AND genxsplit.id = genyvesrocher.id", async(error, results) => {
                    const dbstats = new MessageEmbed()
                    message.channel.send(dbstats
                        .setFooter('Copyright @AlexaBot @2021')
                        .setTitle("**Statistique de la base de données :**")
                        .addFields(
                          //  { name: '__Nom de la DB :__', value: `$`, inline: true}
                             // COUPE 1
                            { name: '__Stats Auchan__', value: `${results[0].nbstockauchan}`, inline: true},
                            { name: '__Stats ADN__', value: `${results[0].nbstockadn}`, inline: true},
                            { name: '__Stats Crunchyroll__', value: `${results[0].nbstockcrunchyroll}`, inline: true},
                            { name: '__Stats Del Arte__', value: `${results[0].nbstockdelarte}`, inline: true},
                            { name: '__Stats Space UP__', value: `${results[0].nbstockespaceup}`, inline: true},
                            { name: '__Stats Frichti__', value: `${results[0].nbstockfrichti}`, inline: true},
                            // COUPE2
                            { name: '__Stats KFC__', value: `${results[0].nbstockkfc}`, inline: true},
                            { name: '__Stats King 365__', value: `${results[0].nbstockking365}`, inline: true},
                            { name: '__Stats Molotov TV__', value: `${results[0].nbstockmolov}`, inline: true},
                            { name: '__Stats MyCanal__', value: `${results[0].nbstockmycanal}`, inline: true},
                            { name: '__Stats Nord VPN__', value: `${results[0].nbstocknordvpn}`, inline: true},
                            { name: '__Stats Orange TV__', value: `${results[0].nbstockorangetv}`, inline: true},
                            // COUPE3
                            { name: '__Stats Salto__', value: `${results[0].nbstocksalto}`, inline: true},
                            { name: '__Stats Super U__', value: `${results[0].nbstocksuperu}`, inline: true},
                            { name: '__Stats Uptobox__', value: `${results[0].nbstockuptobox}`, inline: true},
                            { name: '__Stats Xsplit__', value: `${results[0].nbstockxsplit}`, inline: true},
                            { name: '__Stats YvesRocher__', value: `${results[0].nbstockyvesrocher}`, inline: true},
                            // COUPE 4 DANS 1
                            )
                        .setTimestamp()
                        .setThumbnail(Alexa.user.displayAvatarURL())
                    )
                })
            } else {
                return message.reply("Vous n'avez pas d'abonnement pour utilisé le Bot");
            }
        })
    }
}

