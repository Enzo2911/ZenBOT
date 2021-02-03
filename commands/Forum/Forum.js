const {MessageEmbed} = require("discord.js");

module.exports = {
    aliases: ["zf"],
    name: "zenforum",
    category: "Forum",
    description: "Affice l\'URL du Site & QR Code.",
    usage: "[]",
    run: async (Alexa, message) => {
        const AlexaForum = new Discord.MessageEmbed();
        message.channel.send(AlexaForum
        .setAuthor("Notre Forum: ")
        .setFooter('Copyright @AlexaBot @2021')
        .setImage('https://cdn.discordapp.com/attachments/804820404547354647/804829570544042004/qrcodeDiscordZen.png')
        .setDescription('Rejoignez notre forum dès maintenant si cela n\'est pas fais \;\) [Click Here](https://Zencommunity.xyz/) Or scan QR Code.') 
        .setURL('https://zencommunity.xyz/')
        );
    }
}
