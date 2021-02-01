module.exports = {
    aliases: ["zs"],
    name: "zenshoutbox",
    description: "**Important** Explication du HIDDEN (Pour partagé sur le site).",
    category: "Forum",
    usage: "[]",
    run : async (message) => {
        message.channel.send (
            "**Les règles de la Shoutbox :** \n```Interdiction de spam, insulter, leak un dox, toutes formes de racisme sont prohibées. Tout non respect entrainera un bannissement de la shoutbox.```"
        )
    }
}