import { createBot, Intents, startBot, CreateSlashApplicationCommand, InteractionResponseTypes } from "./deps.ts"
import { Secret } from "./secret.ts"

const bot = createBot({
    token: Secret.DISCORD_TOKEN,
    intents:
        Intents.Guilds |
        Intents.GuildMessages |
        Intents.MessageContent,
    events: {
        ready: (_bot, payload) => {
            console.log("${payload.user.username} is ready!");
        },
    },
});

bot.events.messageCreate = (b, message) => {
    if (message.content === "!ping") {
        b.helpers.sendMessage(message.channelId, {
            content: "pong!",
        });
    };
};

await startBot(bot);