const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "genhelp",
    description: "Affiche les differente commanque parlant du Generateur",
    category: "Helpeur",
    description: "Panel qui retourne des informations sur les divers commandes du bot parlant du Generateur.",
    usage: "[]",
    run: async (Alexa, message, args, prefix) => {
        const GenHelp = new MessageEmbed();
        message.channel.send(GenHelp
            .setColor('#0099ff')
            .setTitle('Panel Help Generateur')
            .addFields(
                { name: prefix + 'Gen-Molotov', value: 'Genere un compte MolotovTV LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-SuperU', value: 'Genere un compte Super-U LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-Auchan', value: 'Genere un compte Auchan LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-King365', value: 'Genere un compte King-365LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-Frichti', value: 'Genere un compte Frichti LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-KFC', value: 'Genere un compte KFC LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-DelArte', value: 'Genere un compte Del Arte LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-MyCanal', value: 'Genere un compte MyCanal LIMITE : 5/jours pour les platinium 3/jours pour les ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'AlexaHelp <COMMAND>', value: 'Pour afficher plus d\'information sur la commande que vous souhaité.', inline: false }
            )
            .setFooter("Copyright @AlexaBot @2021")
            .setTimestamp()
            .setThumbnail(Alexa.user.displayAvatarURL())
        )
    }
}

