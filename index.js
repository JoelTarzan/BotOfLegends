const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILDS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_WEBHOOKS", "GUILD_INTEGRATIONS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING"]
});
const CONFIG = require('./config.json');

// Prefijo del bot
const prefix = '<';

// Mensaje de ayuda
const help = `Manual de ayuda Bot Of Legends

-----------------Comandos--------------
>[champ] = Build del champion
>aram [champ] = Build del champion en ARAM
>sum [jugador] = Perfil en OPGG del jugador, solo EUW
>help = Manual de ayuda del bot

version: 1.0
author: PRECINTO`;

// Mensaje en el canal al encender el bot.
client.on('ready', () => {
    client.channels.cache.get('971894850670706719').send('Bot Of Legends ha sido invocado')
});

// Aviso por consola cuando se enciende el bot
client.login(CONFIG.token).then(() => console.log(`${client.user.username} se ha conectado.`));

// Comandos
client.on('messageCreate', message => {

    // Me aseguro de que el mensaje empieza por el prefijo
    if (!message.content.startsWith(prefix)) return;

    // Copio el contenido del mensaje
    var mensaje = message.content;

    // Cambio el contenido a String
    mensaje.toString;

    // Le quito el prefijo
    var frase = mensaje.slice(1);

    // Separo el comando de los argumentos
    var comandos = frase.split(" ");

    // Si el comando es help
    if (comandos[0] == "help") {
        message.reply(help);

        // Si el comando es aram
    } else if (comandos[0] == "aram") {
        message.reply('https://www.op.gg/modes/aram/' + comandos[1] + '/build');

        // Si el comando es sum
    } else if (comandos[0] == "sum") {
        message.reply('https://euw.op.gg/summoners/euw/' + comandos[1]);

        // Si no es ninguno de esos comandos, y la array solo contiene una palabra, será el champion
    } else if (comandos.length == 1) {
        message.reply('https://www.op.gg/champions/' + comandos[0])

    }


});