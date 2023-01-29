require('http').createServer((req, res) => res.end('200')).listen(process.env.PORT ?? 3000);

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { Manager } = require("erela.js");

const { TOKEN, PREFIX, EMBED_COLOR } = require("./settings/config.js");

let _client = [];

for (let i = 0; i < TOKEN.length ; i++) {
      const client = new Client({
          shards: "auto",
          intents: [
              GatewayIntentBits.Guilds,
              GatewayIntentBits.GuildMembers,
              GatewayIntentBits.GuildMessages,
              GatewayIntentBits.GuildVoiceStates,
              GatewayIntentBits.MessageContent,
          ],
          allowedMentions: { parse: ["users", "roles"], repliedUser: false },
      });

      _client.push(client);
      client.vmusic = _client;

      client.config = require('./settings/config.js');
      client.prefix = PREFIX[i];
      client.token = TOKEN[i];
      client.color = EMBED_COLOR[i];
      
      client.owner = client.config.OWNER_ID;
      client.dev = client.config.DEV_ID;

      process.on('unhandledRejection', error => console.log(error));
      process.on('uncaughtException', error => console.log(error));

      client.manager = new Manager({
        nodes: client.config.NODES,
        autoPlay: true,
        forceSearchLinkQueries: true,
        defaultSearchPlatform: client.config.DEFAULT_SEARCH,
        allowedLinksRegexes: Object.values(Manager.regex),
        shards: client.ws.totalShards || 1,
        clientName: client.user?.username,
        clientId: client.user?.id || client.id,
        send(id, payload) {
          const guild = client.guilds.cache.get(id);
          if (guild) guild.shard.send(payload);
        },
      });

      ["aliases", "commands"].forEach(x => client[x] = new Collection());
      ["loadCommand", "loadEvent", "loadPlayer", "loadDatabase"].forEach(x => require(`./handlers/${x}`)(client));

      client.login(client.token);
}