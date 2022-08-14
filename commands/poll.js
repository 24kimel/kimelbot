const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Set a poll comprising of 2 options')
        .addStringOption(option =>
            option.setName('prompt')
                .setDescription('prompt for poll')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('option1')
                .setDescription('option for poll')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('option2')
                .setDescription('option for poll')
                .setRequired(true)),
    async execute(interaction) {
        let msg = `${interaction.options.getString('prompt')}\nReact to this message in order to vote`;

        let embed = new EmbedBuilder()
            .setColor(0x003366)
            .setTitle('poll')
            .setDescription(msg)
            .addFields(
                {name: `${interaction.options.getString('option1')}`, value: ':one:', inline: true},
                {name: `${interaction.options.getString('option2')}`, value: ':two:', inline: true}
            );
        await interaction.reply({embeds: [embed]});
    }
};