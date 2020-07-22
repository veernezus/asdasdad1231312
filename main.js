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
channel.send(`Welcome ${member} To BeST AuToFArM ;} !`);

});

client.on('message' ,message => {
if(!message.content.startsWith(prefix)|| message.author.bot ) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'ping'){
    message.channel.send('pong');
}


});




client.login(process.env.token);