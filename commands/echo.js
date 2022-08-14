const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('replies with your input')
        .addStringOption( option => 
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString("input"))
    },
};