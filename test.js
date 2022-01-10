
const {Intents, Client} = require("discord.js")
const { setup } = require("./index")
const client = new Client({
  intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MEMBERS,
				Intents.FLAGS.GUILD_MESSAGES,
				
			],
});

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
	wlcm_channel: '836870465078558740', //wlcm channel id
	leave_channel: '885113942903488534', //leave channel id
	wlcm_embedType: true,
	wlcm_embed: {
		color: 0x0099ff,
		title: 'Welcome!',
		url: '',
		author: {
			name: 'Welcome to {guildName}',
			icon_url: "{avatarDynamic}"
		},
		description: '{user} , {createdAt}',
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

client.on("messageCreate", (message) => {
  if(message.content === "!test"){
   client.emit("guildMemberAdd", message.member)
  }
})

client.login('//token');
