<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="http://forum.narutorpgonline.com/public/style_images/23_raposinha.png" width="546" alt="discord.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="NPM version" /></a>
  </p>

</div>

## Sobre
Bot para discord escrito com a _discord.js_  que prove metodos simples de API rest. Mais detalhes em [Discord API](https://discordapp.com/developers/docs/intro).

## Instalação
**Node.js 8.0.0 ou mais recente (estavel) requerido.**  
Ignorar avisos sobre depedencias, são todas opcionais.

Sem suporte de voz: `npm install discord.js`  
Com suporte de voz: ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install discord.js node-opus`  
Com suporte de voz: ([opusscript](https://www.npmjs.com/package/opusscript)): `npm install discord.js opusscript`


### Pacotes opcionais
- [zlib-sync](https://www.npmjs.com/package/zlib-sync)WebSocket data inflation (`npm install zlib-sync`)
- [erlpack](https://github.com/discordapp/erlpack) faster WebSocket data (de)serialisation (`npm install discordapp/erlpack`)
- Faster voice packet encryption and decryption:
    - [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium`)
    - [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers`)
- [uws](https://www.npmjs.com/package/uws)  faster WebSocket connection (`npm install uws`)
- [bufferutil](https://www.npmjs.com/package/bufferutil)  faster WebSocket connection when *not* using uws (`npm install bufferutil`)

## Exemplo de uso
```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');
```

## Links
* [Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
* [Documentation](https://discord.js.org/#/docs)
* [Guide](https://discordjs.guide/) ([source](https://github.com/discordjs/guide))
* [Discord.js Discord server](https://discord.gg/bRCvFy9)
* [Discord API Discord server](https://discord.gg/discord-api)
* [GitHub](https://github.com/discordjs/discord.js)
* [NPM](https://www.npmjs.com/package/discord.js)
* [Related libraries](https://discordapi.com/unofficial/libs.html)

### Extensions
* [RPC](https://www.npmjs.com/package/discord-rpc) ([source](https://github.com/discordjs/RPC))

