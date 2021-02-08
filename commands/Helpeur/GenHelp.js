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
                { name: prefix + 'Gen-Molotov', value: 'Génère un compte MolotovTV LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-SuperU', value: 'Génère un compte Super-U LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-Auchan', value: 'Génère un compte Auchan LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: false },
                { name: prefix + 'Gen-King365', value: 'Génère un compte King-365LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-Frichti', value: 'Génère un compte Frichti LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: false },
                { name: prefix + 'Gen-KFC', value: 'Génère un compte KFC LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: true },
                // COUPE
                { name: prefix + 'Gen-DelArte', value: 'Génère un compte Del Arte LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-MyCanal', value: 'Génère un compte MyCanal LIMITE : 5/jours pour les Platiniums 3/jours pour les Ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-NordVPN', value: 'Génère un compte NordVPN LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: false },
		        { name: prefix + 'Gen-YvesRocher', value: 'Génère un compte YvesRoche LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: true },
		        { name: prefix + 'Gen-CrunchyRoll', value: 'Génère un compte CrunchyRoll LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: false },
		        // COUPE
                { name: prefix + 'Gen-Uptobox', value: 'Génère un compte Uptobox LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: true },
		        { name: prefix + 'Gen-ADN', value: 'Génère un compte Anime Digital Network LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: true },
		        { name: prefix + 'Gen-EspaceUP', value: 'Génère un compte Mon espace UP  LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: false },
		        { name: prefix + 'Gen-Xsplit', value: 'Génère un compte XspliLIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: true },
		        { name: prefix + 'Gen-Salto', value: 'Génère un compte Salto LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: false },
		        { name: prefix + 'Gen-Hulu', value: 'Génère un compte Hulu LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: true },
		         // COUPE
                { name: prefix + 'Gen-OrangeTV', value: 'Génère un compte OrangeTV LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-Surprise', value: 'Génère un compte Aléatoire (Surprise) LIMITE : 5/jours pour les Platiniums 3/joues pour les Ultimates 2/jours pour les autohits.', inline: true },
                { name: prefix + 'Gen-NordVPN', value: 'Génère un compte NordVPN Personnel', inline: true },
	            { name: prefix + 'AlexaHelp <COMMAND>', value: 'Pour afficher plus d\'information sur la commande que vous souhaité.', inline: false }
            )
            .setFooter("Copyright @AlexaBot @2021")
            .setTimestamp()
            .setThumbnail(Alexa.user.displayAvatarURL())
        )
    }
}

