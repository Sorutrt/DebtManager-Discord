import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import { pingData } from './commands/ping';

dotenv.config();

const commands: any[] = [
    pingData.toJSON()
];

const rest = new REST().setToken(process.env.TOKEN!); // TOKENがundifinedの可能性はないとして!をつける

async function main() {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!),
            { body: commands }
        );

        console.log("コマンドは正常にデプロイされました。");
    }
    catch (e) {
        console.error("エラーが発生しました。");
        console.error(e);
    }
}

main().catch(err => console.log(err));