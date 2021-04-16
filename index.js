const discord = require("discord.js")
const config = require("./config.json")
const client = new discord.Client({
  disableEveryone : true
})

client.on("ready", () => {
  client.user.setPresence({ activity : { name : "Estou sendo feita na repl.it", type : "LISTENING" }, status : "dnd" })
  console.log(`Logado com o bot ${client.user.tag}`)
})

client.login(config.token
