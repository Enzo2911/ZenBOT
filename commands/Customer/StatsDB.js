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
                    const dbstats = new MessageEmbed()
                    dbstats
                        .setFooter('Copyright @AlexaBot @2021')
                        .setTitle("**Statistique de la base de données :**")
                        // AUCHAN 
                        db.query(`SELECT count(*) as nbstockauchan from genauchan`, async (results) => {
                            let auchan;
                            if (results[0].nbstockauchan === 0) {
                                auchan = "Out Of Stock";
                            } else {
                                auchan = results[0].nbstockauchan;
                            }
                            dbstats.addField({ name: '__Stats Auchan__', value: `${auchan}`, inline: true})
                        })
                        // ADN
                        db.query(`SELECT count(*) as nbstockadn from genadn`, async (results) => {
                            let adn;
                            if (results[0].nbstockadn === 0) {
                                adn = "Out Of Stock";
                            } else {
                                adn = results[0].nbstockadn;
                            }
                            dbstats.addField({ name: '__Stats ADN__', value: `${adn}`, inline: true})
                        })
                        // CRUNCHYROLL
                        db.query(`SELECT count(*) as nbstockcrunchyroll from gencrunchyroll`, async (results) => {
                            let crunchyroll;
                            if (results[0].nbstockcrunchyroll === 0) {
                                crunchyroll = "Out Of Stock";
                            } else {
                                crunchyroll = results[0].nbstockcrunchyroll;
                            }
                            dbstats.addField({ name: '__Stats Crunchyroll__', value: `${crunchyroll}`, inline: true})
                        })
                        // kfc
                        db.query(`SELECT count(*) as nbstockkfc from genkfc`, async (results) => {
                            let kfc;
                            if (results[0].nbstockkfc === 0) {
                                kfc = "Out Of Stock";
                            } else {
                                kfc = results[0].nbstockkfc;
                            }
                            dbstats.addField({ name: '__Stats Del Arte__', value: `${kfc}`, inline: true})
                        })
                        // COUPE 1
                        // ESPACE UP
                        db.query(`SELECT count(*) as nbstockespaceup from genespaceup`, async (results) => {
                            let espaceup;
                            if (results[0].nbstockespaceup === 0) {
                                espaceup = "Out Of Stock";
                            } else {
                                espaceup = results[0].nbstockespaceup;
                            }
                            dbstats.addField({ name: '__Stats Space UP__', value: `${espaceup}`, inline: true})
                        })
                        // FRICHTI
                        db.query(`SELECT count(*) as nbstockfrichti from genfrichti`, async (results) => {
                            let frichti;
                            if (results[0].nbstockfrichti === 0) {
                                frichti = "Out Of Stock";
                            } else {
                                frichti = results[0].nbstockfrichti;
                            }
                            dbstats.addField({ name: '__Stats Frichti__', value: `${frichti}`, inline: true})
                        })
                        // KFC
                        db.query(`SELECT count(*) as nbstockkfc from genkfc`, async (results) => {
                            let kfc;
                            if (results[0].nbstockkfc === 0) {
                                kfc = "Out Of Stock";
                            } else {
                                kfc = results[0].nbstockkfc;
                            }
                            dbstats.addField({ name: '__Stats KFC__', value: `${kfc}`, inline: true})
                        }) 
                        // KING 365
                        db.query(`SELECT count(*) as nbstockking365 from genking365`, async (results) => {
                            let king365;
                            if (results[0].nbstockking365 === 0) {
                                king365 = "Out Of Stock";
                            } else {
                                king365 = results[0].nbstockking365;
                            }
                            dbstats.addField({ name: '__Stats King 365__', value: `${king365}`, inline: true})
                        })
                        // MOLOTOV
                        db.query(`SELECT count(*) as nbstockmolov from genmolov`, async (results) => {
                            let molov;
                            if (results[0].nbstockmolov === 0) {
                                molov = "Out Of Stock";
                            } else {
                                molov = results[0].nbstockmolov;
                            }
                            dbstats.addField({ name: '__Stats Molotov TV__', value: `${molov}`, inline: true})
                        })
                        // MYCANAL
                        db.query(`SELECT count(*) as nbstockmycanal from genmycanal`, async (results) => {
                            let mycanal;
                            if (results[0].nbstockmycanal === 0) {
                                mycanal = "Out Of Stock";
                            } else {
                                mycanal = results[0].nbstockmycanal;
                            }
                            dbstats.addField({ name: '__Stats MyCanal__', value: `${mycanal}`, inline: true})
                        })
                        // NORD VPN
                        db.query(`SELECT count(*) as nbstocknordvpn from gennordvpn`, async (results) => {
                            let nordvpn;
                            if (results[0].nbstocknordvpn === 0) {
                                nordvpn = "Out Of Stock";
                            } else {
                                nordvpn = results[0].nbstocknordvpn;
                            }
                            dbstats.addField({ name: '__Stats Nord VPN__', value: `${nordvpn}`, inline: true})
                        })
                        // ORANGE TV
                        db.query(`SELECT count(*) as nbstockorangetv from genorangetv`, async (results) => {
                            let orangetv;
                            if (results[0].nbstockorangetv === 0) {
                                orangetv = "Out Of Stock";
                            } else {
                                orangetv = results[0].nbstockorangetv;
                            }
                            dbstats.addField({ name: '__Stats Orange TV__', value: `${orangetv}`, inline: true})
                        })
                        // SALTO
                        // COUPE3
                        db.query(`SELECT count(*) as nbstocksalto from gensalto`, async (results) => {
                            let salto;
                            if (results[0].nbstocksalto === 0) {
                                salto = "Out Of Stock";
                            } else {
                                salto = results[0].nbstocksalto;
                            }
                            dbstats.addField({ name: '__Stats Salto__', value: `${salto}`, inline: true})
                        })
                        // SUPER U
                        db.query(`SELECT count(*) as nbstocksuperu from gensuperu`, async (results) => {
                            let superu;
                            if (results[0].nbstocksuperu === 0) {
                                superu = "Out Of Stock";
                            } else {
                                superu = results[0].nbstocksuperu;
                            }
                            dbstats.addField({ name: '__Stats Super U__', value: `${superu}`, inline: true})
                        })
                        // UPTOBOX
                        db.query(`SELECT count(*) as nbstockuptobox from genuptobox`, async (results) => {
                            let uptobox;
                            if (results[0].nbstockuptobox === 0) {
                                uptobox = "Out Of Stock";
                            } else {
                                uptobox = results[0].nbstockuptobox;
                            }
                            dbstats.addField({ name: '__Stats Uptobox__', value: `${uptobox}`, inline: true})
                        })
                        // XSPLIT
                        db.query(`SELECT count(*) as nbstockxsplit from genxsplit`, async (results) => {
                            let xsplit;
                            if (results[0].nbstockxsplit === 0) {
                                xsplit = "Out Of Stock";
                            } else {
                                xsplit = results[0].nbstockxsplit;
                            }
                            dbstats.addField({ name: '__Stats Xsplit__', value: `${xsplit}`, inline: true})
                        })
                        db.query(`SELECT count(*) as nbstockyvesrocher from genyvesrocher`, async (results) => {
                            let yvesrocher;
                            if (results[0].nbstockyvesrocher === 0) {
                                yvesrocher = "Out Of Stock";
                            } else {
                                yvesrocher = results[0].nbstockyvesrocher;
                            }
                            dbstats.addField({ name: '__Stats YvesRocher__', value: `${yvesrocher}`, inline: true})
                        })
                        // COUPE 4 EN 1
                        dbstats.setTimestamp()
                        dbstats.setThumbnail(Alexa.user.displayAvatarURL())

                        return message.channel.send(dbstats);
            } else {
                return message.reply("Vous n'avez pas d'abonnement pour utilisé le Bot");
            }
        })
    }
}

