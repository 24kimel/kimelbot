const { MessageCollector, SlashCommandBuilder } = require("discord.js");
const { execute } = require("./poll");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('deletes messages')
        .addNumberOption(option =>
            option.setName('n')
                .setDescription('the number of messages you want to delete. Will delete 1 message if you don\'t enter a number'))
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The command will delete only string containing input, if you enter an input')),
    async execute(interaction) {
        const n = interaction.options.getNumber('n');
        const input = interaction.options.getString('input');
        if(n != null) {
            if(!(Number.isInteger(n) && n >= 1)) {
                await interaction.reply('Enter a valid input for n. Should be a natural number');
                return;
            }
        }
        let filter;
        if (input) {
            filter = msg => msg.content.includes(input);
        } else filter = msg => true;
        const collector = interaction.channel.createMessageCollector({filter, time: 15000, max: n});
        collector.on('collect', msg => {
            console.log(`collected ${msg.content}`);
        });

        collector.on('end', () => {
            console.log(collector.recieved);
        });
    }
};