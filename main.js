const Discord = require('discord.js');
const client = new Discord.Client();
const usedCommand = new Set();
const prefix = ';'; 

client.once('ready', () => {
console.log('VBot Is online.')
});


client.on('ready', () => {
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'This Server',
            type: 'WATCHING',
        }
    })
    
    });

    client.on('guildMemberAdd', (member)  =>{
let channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome👋");
if(!channel) return;
const embed = new Discord.MessageEmbed()

.setTitle('New Member')
.setDescription(`Welcome to ${member.guild.name} !`)
.setColor('#00FF00')
member.guild.channels.cache.get('718849959574896801').send(embed);
member.guild.channels.cache.get('718849959574896801').send(`${member}`);
});

client.on('message' ,message => {
if(!message.content.startsWith(prefix)|| message.author.bot ) return;
message.delete();
if(!message.member.roles.cache.find(r => r.name === "VBot Perms")) return message.reply('You Do Not Have Permissions, Rip').then((message) => {setTimeout(function(){message.delete()},5000) }); 

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'say') {

let botmessage = args.join(" ");

message.channel.send(botmessage); 
};

});

client.on('message' ,message => {
if(!message.content.startsWith(prefix)|| message.author.bot ) return
if (command === 'ping'){
    message.channel.send('pong');
}
});

client.login(process.env.token);