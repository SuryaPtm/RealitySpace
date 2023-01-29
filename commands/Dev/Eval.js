const Discord = require("discord.js");

module.exports = {
    config: {
        name: "eval",
        description: "Evaluasi kode pemrograman",
        category: "Dev",
        accessableby: "Owners"
    },
    run: async (client, message, args) => {
        const embed = new Discord.EmbedBuilder().setColor('Blue');
        
        try {
            const code = args.join(" ");
            if (!code) return message.channel.send("Please include the code.");
            
            var evaled = await eval(code);
            if (typeof evaled !== "string") evaled = await require("util").inspect(evaled, { depth: 0 });
            
            embed.setTitle("Proccesed ✅")
            .setDescription("```js\n" + clean(evaled) + "```");
            
            message.channel.send({ embeds: [embed] });

        }
        catch (error) {
            embed.setTitle("Error! ❌")
                .setDescription("```js\n" + error + "```")
                .setColor("Red");
                
            message.reply({ embeds: [embed] });
        }
    }
};

function clean(string) {
    if (typeof text === "string") {
        return string.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
    } else {
        return string;
    }
};
