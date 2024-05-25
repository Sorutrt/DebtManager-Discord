import { SlashCommandBuilder } from "discord.js";

export const pingData = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("return pong")
;

export async function pingFunc(interaction: any) {
    try {
        await interaction.reply("pong!");
    }
    catch (e) {
        console.log("ping.ts error");
        console.error(e);
    }
}