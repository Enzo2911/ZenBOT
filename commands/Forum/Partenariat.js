module.exports = {
    aliases: ["zp"],
    name: "zenpartenariat",
    description: "Plus d\'info sur un Potentiel Partenariat.",
    category: "Forum",
    usage: "[]",
    run : async (Alexa, message) => {
        message.channel.send (
            "**__ZenCommunity est ouvert à toute proposition pour des partenariats. Pour toute demande s'adressé uniquement a Akyna."
        )
    }
}