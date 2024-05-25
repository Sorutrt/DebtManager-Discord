import { GatewayIntentBits, Partials, Message, Client, Events, CacheType, Interaction } from 'discord.js';
import dotenv from 'dotenv';
import { pingData, pingFunc } from "./commands/ping";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Message,
        Partials.Channel
    ]
});

client.once('ready', async () => {
    console.log('Ready!')
    console.log(client.user?.tag)
    if (client.user) {
        module.exports = client.user.tag;
    }
});

client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return
    if (message.content === '!ping') {
        message.channel.send('Pong!')
    }
    console.log(message.content);
});

// slash commands
client.on(Events.InteractionCreate, async (interaction: Interaction<CacheType>) => {
    //console.log(interaction); //test code
    
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;

    if ( commandName === pingData.name ) {
        try {
            await pingFunc(interaction);
        }
        catch(e) {
            console.log('main.ts error')
            console.error(e);
        }
    }
})


client.login(process.env.TOKEN)
