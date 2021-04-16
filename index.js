const discord = require("discord.js")
const config = require("./config.json")
const client = new discord.Client({
  disableEveryone : true
})

client.on("ready", () => {
  client.user.setPresence({ activity : { name : "Estou sendo feita na repl.it", type : "LISTENING" }, status : "dnd" })
  console.log(`Logado com o bot ${client.user.tag}`)
})

client.on("message", msg => {
  if(msg.content === `<@${client.user.id}>` || msg.content === `<@!${client.user.id}>`) return message.channel.send(`quem me chamou?`)
})

client.login(config.token
