const fs = require("fs");
let config = require('../../settings/config.json');

module.exports = {
   // aliases: ["admin-pf"],
   // name: "admin-prefix",
    category: "AdminBot",
    description: "Permet de changé le prefix du bot",
    usage: '"<NVPREFIX>"',
    run : async(Alexa, message, args) => {

        let nvprefix = args.join(" ")
        
        if (!args[0]) {
            message.channel.send("Usage : " + config.prefix + " <NVPREFIX>")
        } else {
            config.prefix = nvprefix;
            fs.writeFile("../../settings/config.json", JSON.stringify(config), (console.error()));
            message.reply("**Prefix Changé // Nouveau Prefix : **"  + config.prefix)
        }
    }
}
    