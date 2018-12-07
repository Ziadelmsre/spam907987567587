new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("519966478829879309")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login("NTAzMjIyMzg4MzYwNzQwODc0.Duqv9w.8JyRY9HkowQQ8cFCaOoKLX_mtA0");
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
