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
        )
    }
}

