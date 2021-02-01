const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "zenhelp",
    aliases: ["zh", "command", "info"],
    description: "Affice l\'URL du Site & QR Code.",
    category: "Forum",
    description: "Panel qui retourne des informations sur les divers commandes du bot.",
    usage: "[Commande Name]",
    run: async (Alexa, message, args, prefix) => {
        const AlexaHelp = new MessageEmbed();
    if(args[0]) {
        const cmd = Alexa.commands.get(args.join(" ").toLowerCase()) || Alexa.commands.get(Alexa.aliases.get(args.join(" ").toLowerCase()));

        if(!cmd) {
            message.reply("Commande inexistante.")
        }

        if (cmd.name) {
            AlexaHelp.addField(`**Name : \n**`, `${cmd.name.charAt(0).toUpperCase() + cmd.name.slice(1)}`)
        }
        if (cmd.aliases) {
            AlexaHelp.addField(`**Alias : \n**`, `${cmd.aliases.map(a => `\`${a}\``).join(",")}`)
        }
        if (cmd.usage) {
            AlexaHelp.addField(`**Usage : \n**`, `${cmd.usage}`)
                     .setFooter(`Syntaxe syntax: [] = optionnel, "" = Required`)
        }
        if (cmd.description) {
            AlexaHelp.addField(`**Description : \n**`, `${cmd.description}`)
        }
        if (cmd.category) {
            AlexaHelp.addField(`**Categorie : \n**`,  `${cmd.category}`)
        }
        message.channel.send(AlexaHelp
            .setThumbnail(Alexa.user.displayAvatarURL())
            .setColor('#0099ff')
            .setURL('https://zencommunity.xyz/')
            .setTitle('Panel Help Discord & Forum Zen')
            .setFooter('Copyright @AlexaBot @2021')
        );
    } else {
        message.channel.send(AlexaHelp
            .setColor('#0099ff')
            .setTitle('Panel Help Discord & Forum Zen')
            .setURL('https://Zencommunity.xyz')
            .addFields(
                { name: prefix + 'ZenForum', value: 'Affice l\'URL du Site & QR Code.', inline: true},
                { name: prefix + 'ZenCoins', value: 'Explication sur le ZenCoins.', inline: true},
                { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
                { name: prefix + 'ZenUpgrade', value: 'Affiche les différents grades du site+ les avantages.', inline: true },
                { name: prefix + 'ZenPartenariat', value: 'Plus d\'info sur un Potentiel Partenariat.', inline: true },
                { name: '----------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
                { name: prefix + 'ZenShoutbox', value: 'Les règles de la shoutbox du Forum.', inline: true },
                { name: prefix + 'ZenMarket', value: 'Les règles du Public Market du Forum.', inline: true },
                { name: prefix + 'ZenPost', value: '**Important** Explication du HIDDEN (Pour partagé sur le site).', inline: false },
            )
            .setImage('https://cdn.discordapp.com/attachments/804820404547354647/804850111921651732/ZenZen.png')
            .setTimestamp()
            .setURL('https://zencommunity.xyz/')
            .setThumbnail(Alexa.user.displayAvatarURL())
            .setFooter('Use help with \"commande\" name for specific description... Copyright @AlexaBot @2021')
        )
           /*
        message.channel.send(AlexaHelp
        .setColor('#0099ff')
	    .setTitle('Panel Help Discord & Forum Zen')
	    .setURL('https://Zencommunity.xyz')
	    .addFields(
		    { name: prefix + ' ZenForum', value: 'Affice l\'URL du Site & QR Code.', inline: true},
            { name: prefix + ' ZenCoins', value: 'Explication sur le ZenCoins.', inline: true},
            { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
		    { name: prefix + ' ZenUpgrade', value: 'Affiche les différents grades du site+ les avantages.', inline: true },
            { name: prefix + ' ZenPartenariat', value: 'Plus d\'info sur un Potentiel Partenariat.', inline: true },
            { name: '----------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
            { name: prefix + ' ZenShoutbox', value: 'Les règles de la shoutbox du Forum.', inline: true },
            { name: prefix + ' ZenMarket', value: 'Les règles du Public Market du Forum.', inline: true },
            { name: prefix + ' ZenPost', value: '**Important** Explication du HIDDEN (Pour partagé sur le site).', inline: false },
        )
	    .setImage('https://cdn.discordapp.com/attachments/804820404547354647/804850111921651732/ZenZen.png')
        .setTimestamp()
        .setThumbnail(Alexa.user.displayAvatarURL())
        .setFooter('Copyright @AlexaBot @2021')
        );
        */
        /*
        const cmd = Alexa.commands.get();
        const namee = (name) => {
            return cat.commands
                        .filter(cmd => cmd.name === name)
                        .map(cmd => `- \`${cmd.name}\``)
                        .join("\n");
        }
         //get command files after categories
        const categories = cmd.category
         .map(cate => `**${cate[0].toUpperCase() + cate.slice(1)}** \n${commands(cate)}`)
         
           
          message.channel.send(AlexaHelp
                .setThumbnail(Alexa.user.displayAvatarURL())
                .setColor('#0099ff')
	            .setTitle('Panel Help Discord & Forum Zen')
                .setColor('#0099ff')
                .addField(
                    { name: 'Name : ', value : `\`${namee}}\``, inline: true },
                    { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
                    { name: `Catégorie : `, value : `\`${categories}\``, inline: true },
                )
                .setFooter("use help with \"commande\" name for specific description.. // Copyright @AlexaBot @2021")
            );
        }
        */
        }
    }
}