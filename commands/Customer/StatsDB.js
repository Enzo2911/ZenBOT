let config = require('../../settings/config.json');
const mysql = require('mysql');
const { MessageEmbed } = require("discord.js");

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.pass,
    database: config.db
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
                message.reply("Stats Envoyé en pv (sry du spam c'est temporaire. :( )")
                // AUCHAN 
                db.query(`SELECT count(*) as nbstockauchan from genauchan`, async (error, results) => {
                    if (error) throw error;
                    let auchan;
                    if (results[0].nbstockauchan === 0) {
                        auchan = "Out Of Stock";
                    } else {
                        auchan = results[0].nbstockauchan;
                    }
                    message.author.send('Stats Auchan : ' + `${auchan}`)
                })

                // ADN
                db.query(`SELECT count(*) as nbstockadn from genadn`, async (error, results) => {
                    if (error) throw error;
                    let adn;
                    if (results[0].nbstockadn === 0) {
                        adn = "Out Of Stock";
                    } else {
                        adn = results[0].nbstockadn;
                    }
                    message.author.send('Stats ADN : ' + `${adn}`)
                })
                // CRUNCHYROLL
                db.query(`SELECT count(*) as nbstockcrunchyroll from gencrunchyroll`, async (error, results) => {
                    if (error) throw error;
                    let crunchyroll;
                    if (results[0].nbstockcrunchyroll === 0) {
                        crunchyroll = "Out Of Stock";
                    } else {
                        crunchyroll = results[0].nbstockcrunchyroll;
                    }
                    message.author.send('Stats Crunchyroll : ' + `${crunchyroll}`)
                })
                // DELARTE
                db.query(`SELECT count(*) as nbstockdelarte from gendelarte`, async (error, results) => {
                    if (error) throw error;
                    let delarte;
                    if (results[0].nbstockdelarte === 0) {
                        delarte = "Out Of Stock";
                    } else {
                        delarte = results[0].nbstockdelarte;
                    }
                    message.author.send('Stats Del Arte : ' + `${delarte}`)
                })
                // COUPE 1
                // ESPACE UP
                db.query(`SELECT count(*) as nbstockespaceup from genespaceup`, async (error, results) => {
                    if (error) throw error;
                    let espaceup;
                    if (results[0].nbstockespaceup === 0) {
                        espaceup = "Out Of Stock";
                    } else {
                        espaceup = results[0].nbstockespaceup;
                    }
                    message.author.send('Stats Space UP : ' + `${espaceup}`)
                })
                // FRICHTI
                db.query(`SELECT count(*) as nbstockfrichti from genfrichti`, async (error, results) => {
                    if (error) throw error;
                    let frichti;
                    if (results[0].nbstockfrichti === 0) {
                        frichti = "Out Of Stock";
                    } else {
                        frichti = results[0].nbstockfrichti;
                    }
                    message.author.send('Stats Frichti : ' + `${frichti}`)
                })
                // KFC
                db.query(`SELECT count(*) as nbstockkfc from genkfc`, async (error, results) => {
                    if (error) throw error;
                    let kfc;
                    if (results[0].nbstockkfc === 0) {
                        kfc = "Out Of Stock";
                    } else {
                        kfc = results[0].nbstockkfc;
                    }
                    message.author.send('Stats KFC : ' + `${kfc}`)
                })
                // KING 365
                db.query(`SELECT count(*) as nbstockking365 from genking365`, async (error, results) => {
                    if (error) throw error;
                    let king365;
                    if (results[0].nbstockking365 === 0) {
                        king365 = "Out Of Stock";
                    } else {
                        king365 = results[0].nbstockking365;
                    }
                    message.author.send('Stats King 365 : ' + `${king365}`)
                })
                // MOLOTOV
                db.query(`SELECT count(*) as nbstockmolov from genmolov`, async (error, results) => {
                    if (error) throw error;
                    let molov;
                    if (results[0].nbstockmolov === 0) {
                        molov = "Out Of Stock";
                    } else {
                        molov = results[0].nbstockmolov;
                    }
                    message.author.send('Stats Molotov TV : ' + `${molov}`)
                })
                // MYCANAL
                db.query(`SELECT count(*) as nbstockmycanal from genmycanal`, async (error, results) => {
                    if (error) throw error;
                    let mycanal;
                    if (results[0].nbstockmycanal === 0) {
                        mycanal = "Out Of Stock";
                    } else {
                        mycanal = results[0].nbstockmycanal;
                    }
                    message.author.send('Stats MyCanal : ' + `${mycanal}`)
                })
                // NORD VPN
                db.query(`SELECT count(*) as nbstocknordvpn from gennordvpn`, async (error, results) => {
                    if (error) throw error;
                    let nordvpn;
                    if (results[0].nbstocknordvpn === 0) {
                        nordvpn = "Out Of Stock";
                    } else {
                        nordvpn = results[0].nbstocknordvpn;
                    }
                    message.author.send('Stats Nord VPN : ' + `${nordvpn}`)
                })
                // ORANGE TV
                db.query(`SELECT count(*) as nbstockorangetv from genorangetv`, async (error, results) => {
                    if (error) throw error;
                    let orangetv;
                    if (results[0].nbstockorangetv === 0) {
                        orangetv = "Out Of Stock";
                    } else {
                        orangetv = results[0].nbstockorangetv;
                    }
                    message.author.send('Stats Orange TV : ' + `${orangetv}`)
                })
                // SALTO
                // COUPE3
                db.query(`SELECT count(*) as nbstocksalto from gensalto`, async (error, results) => {
                    if (error) throw error;
                    let salto;
                    if (results[0].nbstocksalto === 0) {
                        salto = "Out Of Stock";
                    } else {
                        salto = results[0].nbstocksalto;
                    }
                    message.author.send('Stats Salto : ' + `${salto}`)
                })
                // SUPER U
                db.query(`SELECT count(*) as nbstocksuperu from gensuperu`, async (error, results) => {
                    if (error) throw error;
                    let superu;
                    if (results[0].nbstocksuperu === 0) {
                        superu = "Out Of Stock";
                    } else {
                        superu = results[0].nbstocksuperu;
                    }
                    message.author.send('Stats Super U : ' + `${superu}`)
                })
                // UPTOBOX
                db.query(`SELECT count(*) as nbstockuptobox from genuptobox`, async (error, results) => {
                    if (error) throw error;
                    let uptobox;
                    if (results[0].nbstockuptobox === 0) {
                        uptobox = "Out Of Stock";
                    } else {
                        uptobox = results[0].nbstockuptobox;
                    }
                    message.author.send('Stats Uptobox : ' + `${uptobox}`)
                })
                // XSPLIT
                db.query(`SELECT count(*) as nbstockxsplit from genxsplit`, async (error, results) => {
                    if (error) throw error;
                    let xsplit;
                    if (results[0].nbstockxsplit === 0) {
                        xsplit = "Out Of Stock";
                    } else {
                        xsplit = results[0].nbstockxsplit;
                    }
                    message.author.send('Stats Xsplit : ' + `${xsplit}`)
                })
                db.query(`SELECT count(*) as nbstockyvesrocher from genyvesrocher`, async (error, results) => {
                    if (error) throw error;
                    let yvesrocher;
                    if (results[0].nbstockyvesrocher === 0) {
                        yvesrocher = "Out Of Stock";
                    } else {
                        yvesrocher = results[0].nbstockyvesrocher;
                    }
                    message.author.send('Stats YvesRocher : ' + `${yvesrocher}`)                    
                
                })
				//COUPE 4
				// AccordHotel 
                db.query(`SELECT count(*) as nbstockaccordhotel from genaccordhotel`, async (error, results) => {
                    if (error) throw error;
                    let accordhotel;
                    if (results[0].nbstockaccordhotel === 0) {
                        accordhotel = "Out Of Stock";
                    } else {
                        accordhotel = results[0].nbstockaccordhotel;
                    }
                    message.author.send('Stats Accord Hotel : ' + `${accordhotel}`)
                })

                // Brioche
                db.query(`SELECT count(*) as nbstockbrioche from genbrioche`, async (error, results) => {
                    if (error) throw error;
                    let brioche;
                    if (results[0].nbstockbrioche === 0) {
                        brioche = "Out Of Stock";
                    } else {
                        brioche = results[0].nbstockbrioche;
                    }
                    message.author.send('Stats Brioche : ' + `${brioche}`)
                })
                // CRUNCHYROLL
                db.query(`SELECT count(*) as nbstockcasino from gencasino`, async (error, results) => {
                    if (error) throw error;
                    let casino;
                    if (results[0].nbstockcasino === 0) {
                        casino = "Out Of Stock";
                    } else {
                        casino = results[0].nbstockcasino;
                    }
                    message.author.send('Stats Casino : ' + `${casino}`)
                })
                // GoSport
                db.query(`SELECT count(*) as nbstockgosport from gengosport`, async (error, results) => {
                    if (error) throw error;
                    let gosport;
                    if (results[0].nbstockgosport === 0) {
                        gosport = "Out Of Stock";
                    } else {
                        gosport = results[0].nbstockgosport;
                    }
                    message.author.send('Stats GoSport : ' + `${gosport}`)
                })
				//COUPE 5
				// HMA 
                db.query(`SELECT count(*) as nbstockhma from genhma`, async (error, results) => {
                    if (error) throw error;
                    let hma;
                    if (results[0].nbstockhma === 0) {
                        hma = "Out Of Stock";
                    } else {
                        hma = results[0].nbstockhma;
                    }
                    message.author.send('Stats HMA : ' + `${hma}`)
                })

                // Hulu
                db.query(`SELECT count(*) as nbstockhulu from genhulu`, async (error, results) => {
                    if (error) throw error;
                    let hulu;
                    if (results[0].nbstockhulu === 0) {
                        hulu = "Out Of Stock";
                    } else {
                        hulu = results[0].nbstockhulu;
                    }
                    message.author.send('Stats Hulu : ' + `${hulu}`)
                })
                // Iban
                db.query(`SELECT count(*) as nbstockiban from geniban`, async (error, results) => {
                    if (error) throw error;
                    let iban;
                    if (results[0].nbstockiban === 0) {
                        iban = "Out Of Stock";
                    } else {
                        iban = results[0].nbstockiban;
                    }
                    message.author.send('Stats Iban : ' + `${iban}`)
                })
                // Mega
                db.query(`SELECT count(*) as nbstockmega from genmega`, async (error, results) => {
                    if (error) throw error;
                    let mega;
                    if (results[0].nbstockmega === 0) {
                        mega = "Out Of Stock";
                    } else {
                        mega = results[0].nbstockmega;
                    }
                    message.author.send('Stats Mega : ' + `${mega}`)
                })
				//COUPE 6
				// Napster 
                db.query(`SELECT count(*) as nbstocknapster from gennapster`, async (error, results) => {
                    if (error) throw error;
                    let napster;
                    if (results[0].nbstocknapster === 0) {
                        napster = "Out Of Stock";
                    } else {
                        napster = results[0].nbstocknapster;
                    }
                    message.author.send('Stats Napster : ' + `${napster}`)
                })

                // Nitrado
                db.query(`SELECT count(*) as nbstocknitrado from gennitrado`, async (error, results) => {
                    if (error) throw error;
                    let nitrado;
                    if (results[0].nbstocknitrado === 0) {
                        nitrado = "Out Of Stock";
                    } else {
                        nitrado = results[0].nbstocknitrado;
                    }
                    message.author.send('Stats Nitrado : ' + `${nitrado}`)
                })
                // PornHub
                db.query(`SELECT count(*) as nbstockpornhub from genpornhub`, async (error, results) => {
                    if (error) throw error;
                    let pornhub;
                    if (results[0].nbstockpornhub === 0) {
                        pornhub = "Out Of Stock";
                    } else {
                        pornhub = results[0].nbstockpornhub;
                    }
                    message.author.send('Stats PornHub : ' + `${pornhub}`)
                })
                // PornPortal
                db.query(`SELECT count(*) as nbstockpornportal from genpornportal`, async (error, results) => {
                    if (error) throw error;
                    let pornportal;
                    if (results[0].nbstockpornportal === 0) {
                        pornportal = "Out Of Stock";
                    } else {
                        pornportal = results[0].nbstockpornportal;
                    }
                    message.author.send('Stats PornPortal : ' + `${pornportal}`)
                })
				//COUPE 7
				// Qobuz 
                db.query(`SELECT count(*) as nbstockqobuz from genqobuz`, async (error, results) => {
                    if (error) throw error;
                    let qobuz;
                    if (results[0].nbstockqobuz === 0) {
                        qobuz = "Out Of Stock";
                    } else {
                        qobuz = results[0].nbstockqobuz;
                    }
                    message.author.send('Stats Qobuz : ' + `${qobuz}`)
                })

                // Telefoot
                db.query(`SELECT count(*) as nbstocktelefoot from gentelefoot`, async (error, results) => {
                    if (error) throw error;
                    let telefoot;
                    if (results[0].nbstocktelefoot === 0) {
                        telefoot = "Out Of Stock";
                    } else {
                        telefoot = results[0].nbstocktelefoot;
                    }
                    message.author.send('Stats Telefoot : ' + `${telefoot}`)
					message.author.send('Version BETA des stats DB sorry du spam pas trouvé d\'autre solution pour l\'instant')
                })
                // COUPE 4 EN 1
            } else {
                return message.reply("Vous n'avez pas d'abonnement pour utilisé le Bot");
            }
        })
    }
}

