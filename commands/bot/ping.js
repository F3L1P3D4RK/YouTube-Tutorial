module.exports = {
  name:"ping",
  aliases:['fps'],
  run: async (client, message, args) => {

    message.reply(client.ws.ping + "ms!")
  }
}
