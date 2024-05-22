import {
    createBot,
    Intents,
    startBot,
    InteractionResponseTypes
} from "./deps.ts"
import { Secret } from "./secret.ts"
import { testCommand } from "./src/commands.ts"

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

        async interactionCreate(client, interaction) {
            if(interaction.data?.name === "test") {
                return await client.helpers.sendInteractionResponse(
                    interaction.id,
                    interaction.token,
                    {
                        type: InteractionResponseTypes.ChannelMessageWithSource,
                        data: {
                            content: "test command run",
                        }
                    }
                )
            } // end of "test"
        }
    },
});

bot.events.messageCreate = (b, message) => {
    if (message.content === "!ping") {
        b.helpers.sendMessage(message.channelId, {
            content: "pong!",
        });
    };
};

await bot.helpers.upsertGuildApplicationCommands(Secret.GUILD_ID, [ testCommand ]); // ここでエラー

await startBot(bot);