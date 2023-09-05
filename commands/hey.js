const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hey')
        .setDescription('Replies with "Hey!"'),
    execute: async interaction => {
        await interaction.reply('Hey!');
    },
};