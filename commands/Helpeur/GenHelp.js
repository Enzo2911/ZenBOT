const { MessageEmbed, Collection } = require("discord.js");

module.exports = {
    name: "genhelp",
    aliases: ["gen", "gen-help"],
    description: "Affiche les differente commanque parlant du Generateur",
    category: "Helpeur",
    description: "Panel qui retourne des informations sur les divers commandes du bot parlant du Generateur.",
    usage: "<'1 ou 2 Depend de la page'>",
    run: async (Alexa, message, args, prefix) => {
    
    const choix = args.join(" ")
    if (!choix) {
        message.reply("Veuillez choisir la page HELP 1 ou 2")
    }
   if (choix === "1") {
        page1()
        message.reply("Page 1 vous a été envoyé en PV")
    } else if (choix === "2") {
        page2()
        message.reply("Page 2 vous a été envoyé en PV")
    } else {
        message.reply("Veuillez Choisir correctement la page soit 1 ou 2")
    }
       function page1() {
            let helpEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Panel Help Generateur PAGE 1')
                .addFields(
                    { name: prefix + '**BETA** Gen-Stats', value: 'Montre les stats de tout les gen disponibles actuellement.', inline: true },
                    { name: '--------------------------------------------------------', value: 'SHOPPING', inline: false },
                    { name: prefix + 'Gen-SuperU', value: 'Super-U.', inline: true },
                    { name: prefix + 'Gen-EspaceUP', value: 'Mon espace UP.', inline: true },
                    { name: prefix + 'Gen-Frichti', value: 'Frichti.', inline: true },
                    { name: prefix + 'Gen-KFC', value: 'KFC.', inline: true },
                    { name: prefix + 'Gen-DelArte', value: 'Del Arte.', inline: true },
                    { name: prefix + 'Gen-Casino', value: 'Casino.', inline: true },
                    { name: prefix + 'Gen-AccordHotel', value: 'AccordHotel.', inline: true },
                    { name: prefix + 'Gen-GoSport', value: 'GoSport.', inline: true },
                    { name: prefix + 'Gen-YvesRocher', value: 'YvesRoche.', inline: true },
                    { name: prefix + 'Gen-CrunchyRoll', value: 'CrunchyRoll.', inline: true },
                    { name: prefix + 'Gen-Velib', value: 'Velib.', inline: true },
                    { name: prefix + 'Gen-BriocheDoree', value: 'BriocheDoree.', inline: true },
                    { name: prefix + 'Gen-Nitrado', value: 'Nitrado.', inline: true },
                    // COUPE
                    { name: '--------------------------------------------------------', value: 'STREAMING', inline: false },
                    { name: prefix + 'Gen-MyCanal', value: 'MyCanal.', inline: true },
                    { name: prefix + 'Gen-King365', value: 'King-365.', inline: true },
                    { name: prefix + 'Gen-Uptobox', value: 'Uptobox.', inline: true },
                    { name: prefix + 'Gen-ADN', value: 'Anime Digital Network.', inline: true },
                    { name: prefix + 'Gen-Molotov', value: 'MolotovTV.', inline: true },
                    { name: prefix + 'Gen-Xsplit', value: 'Xsplit.', inline: true },
                    // COUPE
                    { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
                    { name: prefix + 'Gen-Surprise', value: ' Aléatoire (Surprise) .', inline: true },
                    { name: prefix + 'AlexaHelp <COMMAND>', value: 'Pour afficher plus d\'information sur la commande que vous souhaité.', inline: false }
                )
                .setFooter("Copyright @AlexaBot @2021")
                .setTimestamp()
                .setThumbnail(Alexa.user.displayAvatarURL())
                message.author.send(helpEmbed).catch(() => message.reply("Active tes DM plz"));
        }
       function page2() {
            let helpEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Panel Help Generateur PAGE 2')
                .addFields(
                    { name: prefix + '**BETA** Gen-Stats', value: 'Montre les stats de tout les gen disponibles actuellement.', inline: true },
                    // COUPE
                    { name: '--------------------------------------------------------', value: 'SUITE STREAMING', inline: false },
                    { name: prefix + 'Gen-Salto', value: 'Salto.', inline: true },
                    { name: prefix + 'Gen-Hulu', value: 'Hulu.', inline: true },
                    { name: prefix + 'Gen-Telefoot', value: 'Telefoot.', inline: true },
                    { name: prefix + 'Gen-OrangeTV', value: 'OrangeTV.', inline: true },
                    { name: prefix + 'Gen-Lequipe', value: 'Lequipe.', inline: true },
                    //COUPE
                    { name: '--------------------------------------------------------', value: 'MUSIQUE', inline: false },
                    { name: prefix + 'Gen-Qobuz', value: 'Qobuz.', inline: true },
                    { name: prefix + 'Gen-Napster', value: 'Napster.', inline: true },
                    // COUPE
                    { name: '--------------------------------------------------------', value: 'AUTRES', inline: false },
                    { name: prefix + 'Gen-PornHub', value: 'PornHub.', inline: true },
                    { name: prefix + 'Gen-PornPortal', value: 'PornPortal.', inline: true },
                    { name: prefix + 'Gen-HMA', value: 'HMA .', inline: true },
                    { name: prefix + 'Gen-NordVPN', value: 'NordVPN.', inline: true },
                    { name: prefix + 'Gen-IBAN', value: 'Génère un IBAN.', inline: true },
                    { name: prefix + 'Gen-Mega', value: 'Mega.', inline: true },
                    // COUPE				                
                    { name: prefix + 'Gen-Surprise', value: ' Aléatoire (Surprise) .', inline: true },
                    { name: prefix + 'AlexaHelp <COMMAND>', value: 'Pour afficher plus d\'information sur la commande que vous souhaité.', inline: false }
                )
                .setFooter("Copyright @AlexaBot @2021")
                .setTimestamp()
                .setThumbnail(Alexa.user.displayAvatarURL())
               message.author.send(helpEmbed).catch(() => message.reply("Active tes DM plz"));
               
        }
    }
}

/*
    let maxpage = 2;
        let page = 0;
        // SPECIAL TY TO https://github.com/nmluci // 
        // Initial Embed Form
        let helpEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Main Help")
        // Caches the Embed Object
        let m = await message.channel.send(helpEmbed)
        async function getReaction (message, m) {
        try {
            await m.react('⬅')
            await m.react('🔴')
            await m.react('➡')
            // Reaction Filter
            const forwardFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id !== Alexa.user.id;
            const deleteFilter = (reaction, user) => reaction.emoji.name === '🔴' && user.id !== Alexa.user.id;
            const backwardFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id !== Alexa.user.id;
            // Reaction Responses
            const deletes = message.createReactionCollector(deleteFilter, { maxUsers: 2 })
            const forwards = message.createReactionCollector(forwardFilter, { maxUsers: 2 })
            const backwards = message.createReactionCollector(backwardFilter, { maxUsers: 2 })
            // Reaction Emit Event
            deletes.on('collect', async () => {
                console.log("test")
                await m.delete()
                deletes.stop()
            })
            forwards.on('collect', async () => {
                console.log("test")
                if (page === maxpage) return page = 0
                page += 1
                if (page === 1) {
                    page1()
                } else if (page === 2) {
                    page2()
                }
                forwards.stop()
                backwards.stop()
            })
            backwards.on('collect', async () => {
                console.log("test")
                if (page === 0) return page = maxpage
                page -= 1
                if (page === 1) {
                    page1()
                } else if (page === 2) {
                    page2()
                }
                forwards.stop()
                backwards.stop()
            })
        } catch (err) {
            return console.log(`[ERROR] ${err}`)
        }
    }

    */