const Discord = require('discord.js');
const chalk = require('chalk');
const { modify } = require('./modify');
function setup(options) {
	this.options = options || {};

	if (!this.options.client) {
		throw new Error(chalk.red('[wlcm-bot] client is not provided'));
	}

	this.options.client.on('message', async message => {
		if (message.content === '!!test') {
			this.options.client.emit('guildMemberAdd', message.member);
		}
		if (this.options.commands) {
			if (!this.options.prefix) {
				throw new Error(
					chalk.red(
						'[wlcm-bot] commands will not work bcz prefix is not defined!'
					)
				);
			}

			this.options.commands.map(c => {
				if (c.name && !c.reply) {
					throw new Error(
						chalk.red('[wlcm-bot] ' + c.name + "'s reply is not defined!")
					);
				}
				if (!c.name && c.reply) {
					throw new Error(
						chalk.red('[wlcm-bot] ' + c.reply + "'s name is not defined!")
					);
				}
				if (message.content === this.options.prefix + c.name) {
					if (c.type === 'reply') {
						message.reply(c.reply);
					} else {
						message.channel.send(c.reply);
					}
				}
			});
		}

		if (this.options.triggers) {
			this.options.triggers.map(t => {
				if (t.name && !t.answer) {
					throw new Error(
						chalk.red('[wlcm-bot] ' + t.name + "'s answer is not provided!")
					);
				}
				if (!t.name && t.answer) {
					throw new Error(
						chalk.red('[wlcm-bot] ' + t.answer + "'s name is not provided!")
					);
				}
				if (message.content === t.name) {
					if (t.type === 'reply') {
						message.reply(t.answer);
					} else {
						message.channel.send(t.answer);
					}
				}
			});
		}
	});

	this.options.client.on('guildMemberAdd', async member => {
		if (this.options.wlcm_channel) {
			if (!this.options.wlcm_embedType) {
				member.guild.channels.cache
					.get(this.options.wlcm_channel)
					.send(await modify(this.options.wlcm_msg, member));
			} else {
				member.guild.channels.cache.get(this.options.wlcm_channel).send({
					embed: {
						description: await modify(
							this.options.wlcm_embed.description,
							member
						),
						image: {
							url: await modify(this.options.wlcm_embed.image.url, member)
						},
						title: await modify(this.options.wlcm_embed.title, member),
						color: this.options.wlcm_embed.color || '#ffffff',
						fields: this.options.wlcm_embed.fields,
						author: {
							name: await modify(this.options.wlcm_embed.author.name, member),
							icon_url: await modify(
								this.options.wlcm_embed.author.icon_url,
								member
							)
						},
						footer: {
							text: await modify(this.options.wlcm_embed.footer.text, member),

							icon_url: await modify(
								this.options.wlcm_embed.footer.icon_url,
								member
							)
						},
						thumbnail: {
							url: await modify(this.options.wlcm_embed.thumbnail.url, member)
						}
					}
				});
			}
		}
	});
  this.options.client.on("guildMemberRemove", async member => {
    if (this.options.leave_channel) {
			if (!this.options.leave_embedType) {
				member.guild.channels.cache
					.get(this.options.leave_channel)
					.send(await modify(this.options.leave_msg, member));
			} else {
				member.guild.channels.cache.get(this.options.leave_channel).send({
					embed: {
						description: await modify(
							this.options.leave_embed.description,
							member
						),
						image: {
							url: await modify(this.options.leave_embed.image.url, member)
						},
						title: await modify(this.options.leave_embed.title, member),
						color: this.options.leave_embed.color || '#ffffff',
						fields: this.options.leave_embed.fields,
						author: {
							name: await modify(this.options.leave_embed.author.name, member),
							icon_url: await modify(
								this.options.leave_embed.author.icon_url,
								member
							)
						},
						footer: {
							text: await modify(this.options.leave_embed.footer.text, member),

							icon_url: await modify(
								this.options.leave_embed.footer.icon_url,
								member
							)
						},
						thumbnail: {
							url: await modify(this.options.leave_embed.thumbnail.url, member)
						}
					}
				});
			}
		}
  })
}
module.exports.setup = setup;
