/* Module Discord */

const Discord = require('discord.js');
const Zen = new Discord.Client();
 
/* END */

/* LOGIN */

let config = require('./settings/config.json');

if(!config.token) {
    console.error("Token pas inserer. !!");
} else {
    Zen.login(config.token).catch(error => { 
       if (error.code == 'TOKEN_INVALID') {
            console.error("Invalide TOKEN");
       }
    })
}

/* END */

/* Console LAUNCH */

Zen.once('ready', () => {
    console.log("Bot Lancé.");
    Zen.user.setActivity("@JackRyan ProjectGuardiansV3SOONNN", {
        type: "STREAMING",
        url: "https://www.twitch.tv/Project/Guardians/V3SOON"
      })
});

Zen.on('message', message => {
    let msg = message.content;
    let embed = new Discord.MessageEmbed();

    if (message.mentions.has(Zen.user)) {
        message.reply('Pour connaitre mes commandes tapez \n**__' + config.prefix + "ZenHelp__**") 
    }

    if(msg.startsWith(config.prefix + "ZenHelp")) {
        const ZenHelp = embed
        .setColor('#0099ff')
	    .setTitle('Panel Help Discord & Forum Zen')
	    .setURL('https://zencommunity.xyz')
	    .addFields(
		    { name: config.prefix + ' + ZenPremium', value: 'Affice l\'URL du Site & QR Code.', inline: true},
            { name: config.prefix + ' + ZenCoins', value: 'Explication sur le ZenCoins.', inline: true},
            { name: '--------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
		    { name: config.prefix + ' + ZenUpgrade', value: 'Affiche les différents grades du site + les avantages.', inline: true },
            { name: config.prefix + ' + ZenPartenariat', value: 'Plus d\'info sur un Potentiel Partenariat.', inline: true },
            { name: '----------------------------------------------------------', value: '--------------------------------------------------------', inline: false },
            { name: config.prefix + ' + ZenShoutbox', value: 'Les règles de la shoutbox du Forum.', inline: true },
            { name: config.prefix + ' + ZenMarket', value: 'Les règles du Public Market du Forum.', inline: true },
            { name: config.prefix + ' + ZenPost', value: '**Important** Explication du HIDDEN (Pour partagé sur le site).', inline: false },
        )
	    .setImage('https://cdn.discordapp.com/attachments/804820404547354647/804850111921651732/zenzen.png')
	    .setTimestamp()
	    .setFooter('Copyright @ZenBot @2021')
        message.channel.send(ZenHelp)
    }

    if(msg.startsWith(config.prefix + "ZenPremium")) {
        const ZenPremium = embed
        .setAuthor("Notre Forum: ")
        .setFooter('Copyright @ZenBot @2021')
        .setImage('https://cdn.discordapp.com/attachments/804820404547354647/804829570544042004/qrcodeDiscordZen.png')
        .setDescription('Rejoignez notre forum dès maintenant si cela n\'est pas fais \;\) [Click Here](https://zencommunity.xyz/) Or scan QR Code.') 
        .setURL('https://zencommunity.xyz/')
        message.channel.send(ZenPremium)
    }

    if(msg.startsWith(config.prefix + "ZenCoins")) {
        message.channel.send (
            "**__ZenCoins :__** \n``` Le ZenCoins est la monnaie virtuel du Forum. \nEn aucun cas cette monnaie peut etre cashout, elle vous sert uniquement sur le forum. \nAvec cet argent vous pourrez acheter des items dans la boutique, obtenir un grade et encore plus à venir !!!! \nPour obtenir du ZenCoins c'est simple : Postez, Répondez aux Posts, ou bien Invitez vos amis via votre lien dans votre Panel utilisateur !!! \nPour bloquer un topic avec des ZenCoins utilisez la commande suivante : ``` \n**[hide cost=\"1000\"] Votre contenu [/hide]** \n```1000 étant le prix que vous avez fixé. Le prix du ZenCoins évoluera surement dans les prochaines semaines .... \nPour toute achat de crédit sur le forum veuillez me MP d'abord.```"
        )
    }

    if(msg.startsWith(config.prefix + "ZenUpgrade")) {
        message.channel.send (
            "**__Upgrade Account (deux type abo) :__** \n **Platinium - ** \n``` L'abonnement Platinium du forum est différent de celui que vous avez pu voir avant. \nCet abonnement débloque un accès exclusivement sur le forum. \nLes avantages : ByPass Hidden Content, Catégorie exclusive Platinium !!! Et plein d'autres !!``` \n __Prix :__ 24.99 € (LifeTime) \n\n **Ultimate - ** \n```L'abonnement Ultimate du forum est différent de celui que vous avez pu voir avant. \nCet abonnement débloque un accès exclusivement sur le forum. \nLes avantages : Augmentation radicale du nombre de thanks, Catégorie exclusive Ultimate !! et plein d'autres !! ``` \n __Prix :__ 50 € (LifeTime)" 
        )
    }

    if(msg.startsWith(config.prefix + "ZenPartenariat")) {
        message.channel.send (
            "**__ZenCommunity est ouvert à toute proposition pour des partenariats. Pour toute demande s'adressé uniquement a Akyna."
        )
    }

    if(msg.startsWith(config.prefix + "ZenShoutbox")) {
        message.channel.send (
            "**Les règles de la Shoutbox :** \n```Interdiction de spam, insulter, leak un dox, toutes formes de racisme sont prohibées. Tout non respect entrainera un bannissement de la shoutbox.```"
        )
    }

    if(msg.startsWith(config.prefix + "ZenMarket")) {
        const ZenMarket = embed
        .setAuthor("Public Market: ")
        .setFooter('Copyright @ZenBot @2021')
        .setDescription("[Topic en Question](https://zencommunity.xyz/showthread.php?tid=11) \n```Sachant que nous ne sommes pas responsables en cas de scam par d'autres membres ici \nEn revanche nous pouvons faire office d'escrow. \nService escrow : 5% du prix total ( à partir de 100€) pour moins c'est 5€ ```") 
        message.channel.send(ZenMarket)
    }

    if(msg.startsWith(config.prefix + "ZenPost")) {
        message.channel.send (
            "**__HIDDEN CONTENT__** : \n```La fonction Hidden Content (Thanks) vous permet de bloquer votre topic afin que les utilisateurs soient obligés de vous remercier pour voir le contenu.```\n**[hide] Votre Contenu [/hide]**"
        )
    }
});

/* END */
