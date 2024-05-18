import { Command } from "./src/commands/mod.ts";

export const nyan: Command = {
    global: true,
    execute: function (payload) {
        return {
            console.log("command nyan");
        }
    }
} 