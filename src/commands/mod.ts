import { ApplicationCommandOption, Interaction, InteractionResponse, InteractionCallbackData } from "./deps.ts";
import { nyan } from "./src/commands/general/nyan.ts";

export const commands: Record<string, Command | undefined> = {
    nyan,
};

export interface Command {
    permissionLevels?:
        | ((payload: Interaction, command: Command) => boolean | Promise<boolean>)
        | (keyof typeof PermissionLevels)[];
    
    discription?: string;
    enabled?: boolean;
    guild?: boolean;
    global?: boolean;
    advanced?: boolean;
    options?: ApplicationCommandOption[];
    execute: (payload: Interaction) =>
        | InteractionResponse
        | InteractionCallbackData
        | Promise<InteractionResponse | InteractionCallbackData>;
}