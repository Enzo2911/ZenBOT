/* Module FS */

const fs = require("fs");

/* END */

const loadCommands = (Alexa, Discord, Ascii, Chalk, commands, aliases, dirs = "./commands/") => {
    
    const table = new Ascii().setHeading("Catégorie", "Commands", "Stats"); // Special Thx to Depressedaf1800 for give this idea to make tableau with stats.
    table.setAlign(0, Ascii.CENTER)
    table.setAlign(1, Ascii.LEFT)
    fs.readdirSync(`${dirs}`).forEach(dir => {
        commands = fs.readdirSync(`${dirs}${dir}/`).filter(f => f.endsWith(".js"));
        for (let file of commands) {
            const pull = require(`../${dirs}${dir}/${file}`);
         
            if(pull.name) {
                Alexa.commands.set(pull.name, pull);
                table.addRow(dir, file, Chalk.green("On"));
            } else {
                table.addRow(dir, file, Chalk.red("Off"));
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => Alexa.aliases.set(alias, pull.name));
        }        
    })

console.log(`${table}`);
};

module.exports = {
    loadCommands
  }