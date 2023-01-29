module.exports = {
    TOKEN: [ /// You can add token bot (unlimited) if you want!
      process.env.TOKEN || "V Music",
      process.env.TOKEN1 || "V Music (1)",
      process.env.TOKEN2 || "V Music (2)", 
      process.env.TOKEN3 || "V Music (3)",
    ],
    PREFIX: [ /// Prefix bot need same count with token
      "v", 
      "v1", 
      "v2",
      "v3",
    ],
    EMBED_COLOR: "#5865F2", //<= default is "#000001"
    OWNER_ID: "561170896480501790", //your owner discord id example: "515490955801919488"
    DEV_ID: ["656099976681750529","561170896480501790"], // if you want to use bot only as you, you can put your id here example: ["123456789", "123456789"]
    LEAVE_EMPTY: 180000, // 2 minutes
    DEFAULT_SEARCH: "ytsearch", // default search engine & "ytmsearch" / "ytsearch" / "scsearch" / "spsearch"
    NODES: [ /// Requirement 1 Nodes for this project!
      {
        identifier: "V Music",
        host: "lavalink-replit.devinofficial.repl.co",
        port: 443,
        password: "none",
        secure: true
      }
    ],
}