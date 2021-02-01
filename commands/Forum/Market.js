module.exports = {
    aliases: ["zm"],
    name: "zenmarket",
    description: "Les règles du Public Market du Forum.",
    category: "Forum",
    usage: "[]",
    run: async (message) => {
        const AlexaMarket = new Discord.MessageEmbed()
        .setAuthor("Public Market: ")
        .setFooter('Copyright @AlexaBot @2021')
        .setDescription("[Thread en Question](https://Zencommunity.xyz/showthread.php?tid=11) \n```Sachant que nous ne sommes pas responsables en cas de scam par d'autres membres ici \nEn revanche nous pouvons faire office d'escrow. \nService escrow : 5% du prix total ( à partir de 100€) pour moins c'est 5€ ```") 
        message.channel.send(AlexaMarket)
    }
}