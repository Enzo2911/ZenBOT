const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "adminhelp",
    aliases: ["admin"],
    description: "Affiche les differente commanque ADMIN",
    category: "Helpeur",
    description: "Panel qui retourne des informations admin sur les divers commandes du bot.",
    usage: "[]",
    run: async (Alexa, message, args, prefix, log, admin) => {
        // Commande HELP POUR LES ADMIN
    let adminauthorization = admin;
    if (!adminauthorization.includes(message.author.id)) return;
    const AlexaHelpA = new MessageEmbed();
    message.channel.send(AlexaHelpA
        .setColor('#0099ff')
        .setTitle('Panel Help Alexa')
        .addFields(
            { name: prefix + 'AdminHelp', value: 'Affiche ce panel HELP.', inline: true},
            { name: prefix + 'Eval', value: 'Only <Cable> de toute manière car trop **__dangereux__**.', inline: true},
            { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
            { name: prefix + 'Admin-add', value: 'Ajoute un utilisateur via son id dans la bdd en tant qu\'Ultimate ou Platinum ou AutoHits', inline: true },
            { name: prefix + 'Admin-remove', value: 'Enleve un utilisateur via sont id dans la bdd en tant qu\'Ultimate ou Platinum ou AutoHits', inline: true }, 
            { name: prefix + 'Admin-info', value: 'Affiche les statistiques de la table (registre) // Ou affichent les infos d\'un ID', inline: true },
            { name: '----------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
            { name: prefix + 'AlexaHelp <COMMAND>', value: 'Pour afficher plus d\'informations sur la commande que vous souhaitez.', inline: false }
        )
        .setTimestamp()
        .setThumbnail(Alexa.user.displayAvatarURL())
        .setFooter('Copyright @AlexaBot @2021')
    )
    }
}