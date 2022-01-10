<p ="center">
   <img src="https://img.shields.io/npm/dt/discord-welcome-bot?style=for-the-badge">
   <img src="https://img.shields.io/npm/v/discord-welcome-bot?style=for-the-badge">
   <a href = "https://discord.gg/7UQaVPBQka" > <img src="https://img.shields.io/badge/Server-Invite-brightgreen" href = "">
   </a>
</p>

# Description 
Hello!
this npm package will allow you to create a welcome or leave bot without any code!
package supports embed too!

this package needs discord.js v13.

example:
```js
const {Intents, Client} = require("discord.js")

const client = new Client({
  intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MEMBERS,
				Intents.FLAGS.GUILD_MESSAGES,
			],
});
const { setup } = require('discord-welcome-bot');

setup({
	client: client,
	prefix: '!!',
	commands: [
		{
			name: 'hlo',
			reply: 'Hloooooo!',
			type: 'reply'
		},
		{
			name: 'boo',
			reply: 'booo!'
		}
	],
	triggers: [
		{
			name: 'hlo',
			answer: 'Hloooo',
			type: 'reply'
		}
	],
	wlcm_channel: '', //wlcm channel id
	leaveChannel: '', //leave channel id
	wlcm_embedType: true,
	wlcm_embed: {
		color: 0x0099ff,
		title: 'Welcome!',
		url: '',
		author: {
			name: 'Welcome to {guildName}',
			icon_url: "{avatarDynamic}"
		},
		description: '{user}',
		thumbnail: {
			url: '{avatarDynamic}'
		},
		image: {
			url: '{avatarDynamic}'
		},
		timestamp: new Date(),
		footer: {
			text: 'welcome {user}',
			icon_url: "{guildIcon}"
		}
	},
	wlcm_msg: 'Hlo {user}',
	leave_embedType: true,
	leave_embed: {
		title: 'byeeee {username}'
	},
	leave_msg: 'byeeeee {username}'
});
client.on('ready', () => {
	console.log('hlo ' + client.user.username);
});

client.login('//Token');


///////////////////
custom: 
{avatar} => user avatar.
{avatarDynamic} => user dynamic avatar.
{channelCount} =>  server's total channel count.
{categoryChannelCount} => server's category count.
{textChannelCount} => server's total text channel count.
{voiceChannelCount} => server's total voice channel count.
{createdAt} => user created date.
{discriminator} => user discriminator/tag.
{displayColor} => user role color.
{displayName} => user name.
{guildIcon} => guild Icon.
{guildIconDynamic} => dynamic guild  icon.
{guildName} => guild name.
{guildOwner} => guild owner's username.
{guildOwnerNickname} => guild owner's nickname.
{guildOwnerTag} => guild owner's tag.
{joinedAt} => user joined date.
{joinedAtMDY} => user joined date in mdy form.
{memberCount} => member count of a guild.
{user} => user username.
{tag} => user tag.
{userNickname} => user nickname.
{userTag} => user username + tag
{usermention} => mention the user.
{memberJoinRank} => join rank of user.
{memberJoinRankOrdinalized} => ordanalized like 3rd.
```
Easy Config

any problem?
Dm or pm me on discord.
:D