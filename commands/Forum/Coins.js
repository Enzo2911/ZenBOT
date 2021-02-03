
module.exports = {
    aliases: ["zc"],
    name: "zencoins",
    descriptif: "Explication sur le ZenCoins.",
    category: "Forum",
    usage: "[]",
    run : async (Alexa, message) => {
        message.channel.send (
            "**__ZenCoins :__** \n``` Le ZenCoins est la monnaie virtuel du Forum. \nEn aucun cas cette monnaie peut etre cashout, elle vous sert uniquement sur le forum. \nAvec cet argent vous pourrez acheter des items dans la boutique, obtenir un grade et encore plus à venir !!!! \nPour obtenir du AlexaCoins c'est simple : Postez, Répondez aux Posts, ou bien Invitez vos amis via votre lien dans votre Panel utilisateur !!! \nPour bloquer un topic avec des AlexaCoins utilisez la commande suivante : ``` \n**[hide cost=\"1000\"] Votre contenu [/hide]** \n```1000 étant le prix que vous avez fixé. Le prix du AlexaCoins évoluera surement dans les prochaines semaines .... \nPour toute achat de crédit sur le forum veuillez me MP d'abord.```"
        )
    }
}