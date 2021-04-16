const discord = require("discord.js")
const config = require("./config.json")
const client = new discord.Client({
  disableEveryone : true
})

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(h => {
  require(`./handlers/${h}`)(client)
})

client.on("ready", () => {
  client.user.setPresence({ activity : { name : "Estou sendo feita na repl.it", type : "LISTENING" }, status : "dnd" })
  console.log(`Logado com o bot ${client.user.tag}`)
})

client.on("message", message => {
  if(!message.guild) return;
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  if(cmd === 0) return;
  
  let command = client.commands.get(cmd);
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client, message, args);
})

client.on("message", msg => {
  if(msg.content === `<@${client.user.id}>` || msg.content === `<@!${client.user.id}>`) return message.channel.send(`quem me chamou?`)
})

client.login(config.token)
