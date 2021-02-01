module.exports = {
    aliases: ["zu"],
    name: "zenupgrade",
    description: "Affiche les différents grades du site+ les avantages.",
    category: "Forum",
    usage: "[]",
    run : async (message) => {
        message.channel.send (
            "**__Upgrade Account (deux type abo) :__** \n **Platinium - ** \n``` L'abonnement Platinium du forum est différent de celui que vous avez pu voir avant. \nCet abonnement débloque un accès exclusivement sur le forum. \nLes avantages : ByPass Hidden Content, Catégorie exclusive Platinium !!! Et plein d'autres !!``` \n __Prix :__ 24.99 € (LifeTime) \n\n **Ultimate - ** \n```L'abonnement Ultimate du forum est différent de celui que vous avez pu voir avant. \nCet abonnement débloque un accès exclusivement sur le forum. \nLes avantages : Augmentation radicale du nombre de thanks, Catégorie exclusive Ultimate !! et plein d'autres !! ``` \n __Prix :__ 50 € (LifeTime)" 
        )
    }
}