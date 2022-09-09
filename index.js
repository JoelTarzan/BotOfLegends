const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILDS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_WEBHOOKS", "GUILD_INTEGRATIONS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING"]
});
const CONFIG = require('./config.json');

const prefix = '<';

const help = `Manual de ayuda Bot Of Legends

-----------------Comandos--------------
>[champ] = Build del champion
>aram [champ] = Build del champion en ARAM
>sum [jugador] = Perfil en OPGG del jugador, solo EUW
>help = Manual de ayuda del bot

version: 1.0
author: PRECINTO`;

client.on('ready', () => {
    client.channels.cache.get('971894850670706719').send('Bot Of Legends ha sido invocado')
});

client.login(CONFIG.token).then(() => console.log(`${client.user.username} se ha conectado.`));

client.on('messageCreate', message => {

    if (!message.content.startsWith(prefix)) return;

    var mensaje = message.content;

    mensaje.toString;

    var frase = mensaje.slice(1);

    var comandos = frase.split(" ");

    if (comandos[0] == "help") {
        message.reply(help);

    } else if (comandos[0] == "aram") {
        message.reply('https://www.op.gg/modes/aram/' + comandos[1] + '/build');
        
    } else if (comandos[0] == "sum") {
        message.reply('https://euw.op.gg/summoners/euw/' + comandos[1]);

    } else if (comandos.length == 1) {
        message.reply('https://www.op.gg/champions/' + comandos[0])

    }


});
