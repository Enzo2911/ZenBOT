const {MessageEmbed} = require("discord.js");

module.exports = {
    aliases: ["ev"],
    name: "eval",
    category: "AdminBot",
    description: "Entre un code js & execute celui-ci & retorne le resultat",
    usage: '"<CODE>" [Catch Erreur]',
    run : async (Alexa, message, args, prefix) => {
        
        function clean(text) {
            if (typeof text === "string") 
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            return text;
        }

        //console.log(message.author.id)
        if (!message.author.id === "805933660729638913") return;
          
        const Code = args.join(" ");


        try {
            if(!args[0]) {
                message.channel.send("Usage : " + prefix + "Eval <CODE>")
            } else {
            clean(eval(Code))
            message.channel.send("Le code était : " + Code, { code: "js" })
            }
        } catch (err) {
            const AlexaEval = new MessageEmbed();
            message.channel.send(AlexaEval
                .setAuthor("Erreur Eval")
                .setColor(`#FFC0CB`)
                .addField(
                    "Une erreur a ete detecte sur le code ",
                    "**Le code etait : **" +
                      Code +
                      "**  L'erreur est :**" +
                      ` --${err}-- !`
                )
                .setFooter("Copyright @AlexaBot @2021")
                .setTimestamp()
                // Si Une erreur a ete detecte sur le code
              ).catch(console.error)
            
        }
    }
}
/*
        function clean(text) {
            if (typeof text === "string") 
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            return text;
        }

            //console.log(message.author.id)
      //  if (!message.author.id === "805933660729638913") return;
          
        const Code = args.join(" ");
    message.channel.send("et")
        try {
            message.channel.send(clean(eval(Code)), { code: "js" })
        } catch (err) {
            const AlexaEval = new MessageEmbed();
            message.channel.send(AlexaEval
                .setAuthor("Erreur Eval")
                .setColor(`#FFC0CB`)
                .addField(
                    "Une erreur a ete detecte sur le code ",
                    "**Le code etait : **" +
                      " --" +
                      Code +
                      "-- " +
                      "**  L'erreur est :**" +
                      ` --${err}-- !`
                )
                .setFooter("Copyright @AlexaBot @2021")
                .setTimestamp()
                // Si Une erreur a ete detecte sur le code
              ).catch(console.error)   
        }
    }
}
*/