const {MessageEmbed} = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: "alexahelp",
    aliases: ["command", "info"],
    description: "Affiche les differente pannel help que le bot propose + <COMMANDE> affiche les détails de la commande en question.",
    category: "Helpeur",
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
                     .setFooter(`Syntaxe : [] = optionnel, "<>" = Required`)
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
            .setTitle('Panel Help AlexaBot')
            .setFooter('Copyright @AlexaBot @2021')
        );
    } else {
        message.channel.send(AlexaHelp
            .setColor('#0099ff')
            .setTitle('Panel Help Alexa')
            .addFields(
                { name: prefix + 'AlexaHelp', value: 'Affiche le panel actuel + si une commande est mentionnée affiche les détails et usages de la commande mentionnée', inline: false },
                { name: prefix + 'AdminHelp', value: 'Affice le panel Help Admin.', inline: false},
                { name: prefix + 'ForumHelp', value: 'Affiche le panel Help du Forum.', inline: false},
                { name: prefix + 'GenHelp', value: 'Affiche le panel Help du Generateur.', inline: false},
            )
            .setTimestamp()
            .setThumbnail(Alexa.user.displayAvatarURL())
            .setFooter('Use AlexaHelp with \"commande\" name for specific description ... Copyright @AlexaBot @2021')
        )
        
/*
        AlexaHelp
            .setColor('#0099ff')
            .setTitle('Panel Help Alexa')
            .setFooter('Copyright @AlexaBot @2021')
        const categoryList = readdirSync(`./commands/`)
        for (let category of categoryList) {

            try {
                const commande = Alexa.commands.filter(cat => cat.category === category).map(cmd => cmd.name.charAt(0).toUpperCase() + cmd.name.slice(1)).join(' / ')
                /* if (Alexa.commands.filter(cat => cat.category === category.toLowerCase()).map(cmd => cmd.name.charAt(0).toUpperCase() + cmd.name.slice(1)) == "") {
                     commande = "None";
                 }*/
                 /*
                AlexaHelp.addField(
                    `${category}`,
                    `Commande : ${commande}`
                );
                // console.log(`${Alexa.commands.filter(cat => cat.category === category).map(cmd => cmd.name.charAt(0).toUpperCase() + cmd.name.slice(1)).join(' / ')}`)
            } catch (error) {
                console.error(error);
            }
        }


        return message.channel.send(AlexaHelp);*/
        /*
        for (const category of categoryList) {
            let commandefile = Alexa.commands.filter(cat => cat.category === category.toLowerCase()).map(cmd => cmd.name.charAt(0).toUpperCase() + cmd.name.slice(1)).join('/ ');
            AlexaHelp.addField(
                `${category}`,
                `t${commandefile}`
            );
        };    
           
        return message.channel.send(AlexaHelp);
*/

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
    }}
}
        
