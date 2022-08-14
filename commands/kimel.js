const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kimel')
        .setDescription('Checks if Kimelbot is online'),
    async execute(interaction) {

        await interaction.reply('Online!');
    }
};