module.exports = {
    aliases: ["zp"],
    name: "zenpost",
    category: "Forum",
    description: "Affice l\'URL du Site & QR Code.",
    usage: "[]",
    run : async (message) => {
        message.channel.send (
            "**__HIDDEN CONTENT__** : \n```La fonction Hidden Content (Thanks) vous permet de bloquer votre topic afin que les utilisateurs soient obligés de vous remercier pour voir le contenu.```\n**[hide] Votre Contenu [/hide]**"
        )
    }
}