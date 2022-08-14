const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows all commands or information about a certain command')
        .addStringOption(option =>
            option.setName('cmd')
            .setDescription('the command you want to learn about')
            .setRequired(false)),
    async execute(interaction) {
        const commands = []
        const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
	        const filePath = path.join(__dirname, file);
	        const command = require(filePath);
	        commands.push(command.data.toJSON());
        }

        //console.log(commands);
        //console.log(interaction.options.getString("cmd"))
        const cmd = interaction.options.getString("cmd");
        if(!cmd) {
            let response  = '';

            for (const cmd of commands) {
                response += `/${cmd.name}:  ${cmd.description}\n`;
            }

            await interaction.reply(response);
            return;
        }
        else {
            for(const c of commands) {
                if(c.name === cmd) {
                    interaction.reply(`/${c.name}:  ${c.description}`);
                    return;
                }
            }
            interaction.reply(`Error: no such command.`);
        }
    }
};