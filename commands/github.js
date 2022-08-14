const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const ghLink = new EmbedBuilder()
    .setColor(0x003366)
    .setTitle('Link to the source code of the bot')
    .setURL('https://github.com/24kimel/kimelbot')
    .setDescription('Take a look at the implementation of Kimelbot');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('get link to github repo'),
    async execute(interaction) {
        await interaction.reply({content: '', embeds: [ghLink]});
    }
};