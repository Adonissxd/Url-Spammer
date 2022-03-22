const {Client} = require("discord.js"),
client = new Client();
client2 = new Client();
client3 = new Client();
client4 = new Client();


const request = require("request");
const fetch = require("node-fetch")
const ayar = require("./adonis.json")

client.on("ready", () => {
let guild = client.guilds.cache.get(ayar.sunucuid);
setInterval(() => {

if(guild.vanityURLCode == ayar.alıncakurl) return;
 fetch(`https://discord.com/api/guilds/${guild.id}/vanity-url`,{
        method: "PATCH",
        headers: { 'Authorization': 'Bot ' + client.token, 'Content-Type': 'application/json'},
        body: JSON.stringify({code:ayar.alıncakurl})

    }).then(res => res.json())
     .then(json => { console.log(json)})
     .catch(err => console.log(err))

console.log("Başarılı şekilde düzeltdi");
}, ayar.spamsaniyebot1);
    

})

client.on('ready', () => {
    client.user.setPresence({
        game: {  
            name: ayar.durum,
            type: ayar.durumtype,
        },
            status: ayar.durumstat
    })
})
client.login(ayar.token1).then(console.log("Bot başarıyla giriş yaptı."));
/////////////////////////////2.////////////////////////////////////


const fetch2 = require("node-fetch")
const ayar2 = require("./adonis.json")

client2.on("ready", () => {
let guild = client2.guilds.cache.get(ayar2.sunucuid);
setInterval(() => {

if(guild.vanityURLCode == ayar2.alıncakurl) return;
 fetch2(`https://discord.com/api/guilds/${guild.id}/vanity-url`,{
        method: "PATCH",
        headers: { 'Authorization': 'Bot ' + client2.token, 'Content-Type': 'application/json'},
        body: JSON.stringify({code:ayar2.alıncakurl})

    }).then(res => res.json())
     .then(json => { console.log(json)})
     .catch(err => console.log(err))

console.log("Başarılı şekilde düzeltdi");
}, ayar2.spamsaniyebot2);
    

})

client2.on('ready', () => {
    client2.user.setPresence({
        game: {  
            name: ayar2.durum,
            type: ayar2.durumtype,
        },
            status: ayar2.durumstat
    })
})
client2.login(ayar2.token2).then(console.log("Bot başarıyla giriş yaptı."));

///////////////////////////////////////////
const fetch3 = require("node-fetch")
const ayar3 = require("./adonis.json")

client3.on("ready", () => {
let guild = client3.guilds.cache.get(ayar3.sunucuid);
setInterval(() => {

if(guild.vanityURLCode == ayar3.alıncakurl) return;
 fetch3(`https://discord.com/api/guilds/${guild.id}/vanity-url`,{
        method: "PATCH",
        headers: { 'Authorization': 'Bot ' + client3.token, 'Content-Type': 'application/json'},
        body: JSON.stringify({code:ayar3.alıncakurl})

    }).then(res => res.json())
     .then(json => { console.log(json)})
     .catch(err => console.log(err))

console.log("Başarılı şekilde düzeltdi");
}, ayar3.spamsaniyebot3);
    

})

client3.on('ready', () => {
    client3.user.setPresence({
        game: {  
            name: ayar3.durum,
            type: ayar3.durumtype,
        },
            status: ayar3.durumstat
    })
})
client3.login(ayar3.token3).then(console.log("Bot başarıyla giriş yaptı."));

///////////////////////////////////////////
const fetch4 = require("node-fetch")
const ayar4 = require("./adonis.json")

client4.on("ready", () => {
let guild = client4.guilds.cache.get(ayar4.sunucuid);
setInterval(() => {

if(guild.vanityURLCode == ayar4.alıncakurl) return;
 fetch4(`https://discord.com/api/guilds/${guild.id}/vanity-url`,{
        method: "PATCH",
        headers: { 'Authorization': 'Bot ' + client4.token, 'Content-Type': 'application/json'},
        body: JSON.stringify({code:ayar4.alıncakurl})

    }).then(res => res.json())
     .then(json => { console.log(json)})
     .catch(err => console.log(err))

console.log("Başarılı şekilde düzeltdi");
}, ayar4.spamsaniyebot4);
    

})

client4.on('ready', () => {
    client4.user.setPresence({
        game: {  
            name: ayar4.durum,
            type: ayar4.durumtype,
        },
            status: ayar4.durumstat
    })
})
client4.login(ayar4.token4).then(console.log("Bot başarıyla giriş yaptı."));

