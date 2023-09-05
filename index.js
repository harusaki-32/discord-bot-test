const heyFile = require('./commands/hey.js');

const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === heyFile.data.name) {
        await heyFile.execute(interaction);
    }
});

client.login(token);