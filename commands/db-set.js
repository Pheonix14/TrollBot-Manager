const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('db-set')
		.setDescription("🍂 set something on trollbot database")
		.addStringOption(option => option.setName('table').setDescription('Give Me Table').addChoices(
      { name: 'settings', value: 'settings' },
      { name: 'guild_settings', value: 'guild_settings' },
      { name: 'times', value: 'times' },
    )
.setRequired(true))
  .addStringOption(option => option.setName('string').setDescription('db string').setRequired(true))
.addStringOption(option => option.setName('set').setDescription('give something to set')),
	async execute(interaction, client) {

const db = require("./../database/connect.js");
    
const table = interaction.options.getString('table');

const string = interaction.options.getString('string');

const set = interaction.options.getString('set');
    
const settings = db.table('settings');

const guild_settings = db.table('guild_settings');

const times = db.table('times');
    
if (table === "settings") {
  
await settings.set(`${string}`, set)

  return interaction.editReply(`Set ${set} on ${string} in settings table sucessfully`)
}

if (table === "guild_settings") {
  
await guild_settings.set(`${string}`, set)

  return interaction.editReply(`Set ${set} on ${string} in guild_settings table sucessfully`)
}
    
if (table === "times") {
  
await times.set(`${string}`, set)

  return interaction.editReply(`Set ${set} on ${string} in times table sucessfully`)
}

	},
}