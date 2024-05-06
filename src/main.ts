import { GatewayIntentBits, Partials, Message, Client } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Message,
        Partials.Channel
    ]
})

client.once('ready', () => {
    console.log('Ready!')
    console.log(client.user?.tag)
})

client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return
    if (message.content === '!ping') {
        message.channel.send('Pong!')
    }
    console.log(message.content);
})

client.login(process.env.TOKEN)
