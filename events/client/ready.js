const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */
module.exports = async (client) => {
    await client.manager.init(client.user.id);
    console.log(`[INFO] - ${client.user.username} (${client.user.id}) is Ready!`);

    const activity = {
        name: `${client.prefix}play`,
        type: 2,
    };

    client.user.setPresence({ 
        activities: [activity], 
        status: 'online', 
        afk: true,
    });
};
