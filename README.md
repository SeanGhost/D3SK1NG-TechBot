**To Propose Changes** 
(If the file is already in the repo)

1. Go to the file you want me to change
2. Do the changes & scroll down.
3. You will see Propose File Change & Click it 


**Structure**

`const Discord = require('discord.js');` is for RichEmbeds

```
const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;




}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'xxxxx',
    description: 'xxxxxxxx',
    usage: 'xxxx'
};
```
