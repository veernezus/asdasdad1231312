const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = ';'; 

client.once('ready', () => {
console.log('VBot Is online.')
});


client.on('ready', () => {
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'Veernezus Scripting',
            type: 'WATCHING',
        }
    })
    
    });

    client.on('guildMemberAdd', member =>{
const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome👋");
if(!channel) return;
channel.send(`Welcome ${member} To ${member.guild.name} !`);

});

client.on('message' ,message => {
if(!message.content.startsWith(prefix)|| message.author.bot ) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'ping'){
    message.channel.send('pong');
}

else if (command == 'say') {
if(!message.member.roles.cache.find(r => r.name === "Staff")) return message.reply('You Do Not Have Permissions, Rip').then((message) => {setTimeout(function(){message.delete().catch()},5000) }); message.delete().catch()
let botmessage = args.join(" ");

message.delete().catch();
message.channel.send(botmessage); 
}

});




client.login(process.env.token);