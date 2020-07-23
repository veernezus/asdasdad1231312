

module.exports = {
    name : 'say',
    description : 'say command',
    execute(message,args){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no");
    let botmessage = args.join(" ");

message.delete().catch();
message.channel.send(botmessage)
    }
}