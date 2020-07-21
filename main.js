const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';'; 

client.once('ready', () => {
console.log('VBot Is online.')
});


client.on('ready', () => {
    bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'Veernezus Scripting',
            type: 'WATCHING',
        }
    })
    
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