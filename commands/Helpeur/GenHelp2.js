const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "genhelp2",
    description: "Affiche les differente commanque parlant du Generateur",
    category: "Helpeur",
    description: "Panel qui retourne des informations sur les divers commandes du bot parlant du Generateur.",
    usage: "[]",
    run: async (Alexa, message, args, prefix) => {
        const GenHelp = new MessageEmbed();
        message.channel.send(GenHelp
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
        )
    }
}