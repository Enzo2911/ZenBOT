const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "adminhelp",
    aliases: ["admin"],
    description: "Affiche les differente commanque ADMIN",
    category: "Helpeur",
    description: "Panel qui retourne des informations admin sur les divers commandes du bot.",
    usage: "[]",
    run: async (Alexa, message, args, prefix) => {
    let adminauthorization = ["805933660729638913", "799168976668065852", "701480495690547351", "734358014227906632"]
    if (!adminauthorization.includes(message.author.id)) return;
    const AlexaHelpA = new MessageEmbed();
    message.channel.send(AlexaHelpA
        .setColor('#0099ff')
        .setTitle('Panel Help Alexa')
        .addFields(
            { name: prefix + 'AdminHelp', value: 'Affiche ce panel HELP.', inline: true},
            { name: prefix + 'Eval', value: 'Only Cable de toute manière.', inline: true},
            { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
            { name: prefix + 'Admin-add', value: 'Ajoute un utilisateur via sont id dans la bdd en tant que ultimate ou platinium', inline: true },
            { name: prefix + 'Admin-remove', value: 'Enleve un utilisateur via sont id dans la bdd en tant que ultimate ou platinium', inline: true }, 
            { name: prefix + 'Admin-info', value: 'Affiche les statistiques de la db (registre) // Ou affiche les Infos d\in ID', inline: true },
            { name: '----------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
            { name: prefix + 'AlexaHelp <COMMAND>', value: 'Pour afficher plus d\'information sur la commande que vous souhaité.', inline: false }
        )
        .setTimestamp()
        .setThumbnail(Alexa.user.displayAvatarURL())
        .setFooter('Copyright @AlexaBot @2021')
    )
    }
}