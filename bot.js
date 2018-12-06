new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505125121896480780")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('NTAzMjIyMzg4MzYwNzQwODc0.DunaMw.j660S1qJj10Vp7LRpxNK_IWcF5Y');
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
