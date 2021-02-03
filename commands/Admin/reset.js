const ServerName = "ErinaBot Officiel"

module.exports = {
    aliases: ["reset", "rs"],
    name: "backup",
    descriptif: "Backup du discord si ban",
    category: "AdminForum",
    usage: "Confirmation ON []",
    run : async(message, args) => {
                message.channel.send("Etes vous sur?").then(message => {
                    message.react(client.emojis.get("123123123123"))
    .then(reaction => {
        message.reply('ok')
    })
    //console.log(typeof reaction));message.createReactionCollector((reaction, user) => reaction.emoji.name === '👍' && user.id === '805933660729638913', { time: 5000 }).on('collect', (reaction, collector) => {      
                  //      message.reply('ok')
                  //  })
                })
            }
        }
                       
                       
                       
                       
                       
                       
                       
                       
                        /*
                
                        var AllChannels = message.guild.channels
                              message.guild.createChannel('TEXTUEL', 'category', null, "Reinitialisation du serveur").then(cat => {
                                      message.guild.createChannel('accueil', 'text', null, "Reinitialisation du serveur").then(chan => {chan.setParent(cat, "Reinitialisation du serveur");});
                                                                      
                    message.guild.createChannel('annonces', 'text', [{id: message.guild.id,deny: ['SEND_MESSAGES']}], ).then(chan => {
                                        chan.setParent(cat, "Reinitialisation du serveur");
                                        chan.send(`Pour ajouté le bot : https://discordapp.com/oauth2/authorize?client_id=461243335420411926&permissions=-2&scope=bot  `)
                                    });
                                     message.guild.createChannel('général', 'text', null, "Reinitialisation du serveur").then(chan => {
                                        chan.setParent(cat, "Reinitialisation du serveur");
                                        chan.send(`Par fois le discord se fait reinitialisater cela est entierrement normal. `)
                                    });
                                     message.guild.createChannel('spam-bot', 'text', null, "Reinitialisation du serveur").then(chan => {chan.setParent(cat, "Reinitialisation du serveur");});
                                    
                                     message.guild.createChannel('vcs-erina', 'text', null, "Reinitialisation du serveur").then(chan => {
                                        chan.setParent(cat, "Reinitialisation du serveur");
                                        chan.send(`Le vcs de ErinaBot, Pour parler dedans faite ,vcs + le message que vous voulez faire passer `)
                                    });
                                    message.guild.createChannel('logs-erina', 'text', null).then(chan => {
                                        chan.setParent(cat, "Reinitialisation du serveur");
                                        chan.send(`Salon Logs`)
                                    });
                              });
                                message.guild.createChannel('Salons vocaux', 'category', null, "Reinitialisation du serveur").then(cat => {
                                    message.guild.createChannel('Général', 'voice', null, "Reinitialisation du serveur").then(chan => {
                                           message.guild.createChannel('╔════ஜ۩۞۩ஜ════╗', 'voice', null, "Reinitialisation du serveur")
                                      message.guild.createChannel('► ══   BIENVENUE  ══ ◄', 'voice', null, "Reinitialisation du serveur")
                                      message.guild.createChannel('► ════     SUR     ════ ◄', 'voice', null, "Reinitialisation du serveur")
                                     message.guild.createChannel('► ═    ErinaBot Officiel     ═  ◄', 'voice', null, "Reinitialisation du serveur")
                                      message.guild.createChannel('╚════ஜ۩۞۩ஜ════╝', 'voice', null, "Reinitialisation du serveur")
                                   
                                        chan.setParent(cat, "Reinitialisation du serveur");
                                        message.guild.setAFKChannel(chan, "Reinitialisation du serveur")
                                    });
                                });
                                
                                
                                AllChannels.forEach(function(value){
                                  value.delete();
                                });
                                
                                message.guild.setName(ServerName);
                                message.guild.setRegion("eu-central");
                                message.guild.setAFKTimeout(300);
                                message.guild.setIcon("./bot.png");
                                message.guild.setVerificationLevel(1);
                                
                                var emojilist = message.guild.emojis
                                emojilist.forEach(function(value){
                                  message.guild.deleteEmoji(value);
                                });
                                
                                var rolelist = message.guild.roles
                                rolelist.forEach(function(value){
                                    if (value.id != "462752507165278208" && value.id != "462752527981740033" && value.id != "462752539461550081" && value.id != "462752546386345985" && value.id != "462752552614625281" && value.id != "462752564207943700"){
                                        value.delete();
                                    };
                                });
                                
                            });
                            message.react('👍');
                        });  
                }// else {
                 //   message.reply('nop')
                //}
                */
            