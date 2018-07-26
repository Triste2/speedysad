const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});

const adminprefix = ".";
const devs = ['413685264565927967'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'sgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلايينق البوت الى **`)
} else 
  if (message.content.startsWith(adminprefix + 'sname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير اسم البوت الى`)
return message.reply("**يجب عليك الإنتظار ساعتين لتغير الاسم مرة اخرى**");
} else
  if (message.content.startsWith(adminprefix + 'savatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغيير أفتآر البوت الي`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغير تويتش البوت الى  ${argresult}**`)
}

});



client.login(process.env.BOT_TOKEN);
