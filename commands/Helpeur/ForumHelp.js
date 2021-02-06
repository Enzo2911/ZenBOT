const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "forumhelp",
    description: "Affiche les differente commanque parlant du FORUM",
    category: "Helpeur",
    description: "Panel qui retourne des informations sur les divers commandes du bot parlant du forum.",
    usage: "[]",
    run: async (Alexa, message, args, prefix) => {
        const ForumHelp = new MessageEmbed();
        message.channel.send(ForumHelp
            .setColor('#0099ff')
            .setTitle('Panel Help Forum')
            .addFields(
                { name: prefix + 'ZenForum', value: 'Affice l\'URL du Site & QR Code.', inline: true },
                { name: prefix + 'ZenCoins', value: 'Explication sur le ZenCoins.', inline: true },
                { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
                { name: prefix + 'ZenUpgrade', value: 'Affiche les différents grades du site + les avantages.', inline: true },
                { name: prefix + 'ZenPartenariat', value: 'Plus d\'info sur un potentiel partenariat.', inline: true },
                { name: '----------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
                { name: prefix + 'ZenShoutbox', value: 'Les règles de la Shoutbox du Forum.', inline: true },
                { name: prefix + 'ZenMarket', value: 'Les règles du Public Market du Forum.', inline: true },
                { name: prefix + 'ZenPost', value: '**Important** Explication du HIDDEN (pour partager sur le site).', inline: false },
                { name: '----------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
                { name: prefix + 'AlexaHelp <COMMAND>', value: 'Pour afficher plus d\'information sur la commande que vous souhaité.', inline: false }
            )
            .setTimestamp()
            .setURL('https://zencommunity.xyz/')
            .setThumbnail(Alexa.user.displayAvatarURL())
        )
    }
}
