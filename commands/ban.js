const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription("🔨 ban someone from TrollBot")
		.addStringOption(option => option.setName('userid').setDescription('Give Me UserId To Ban').setRequired(true))
  .addStringOption(option => option.setName('reason').setDescription('reason of ban').setRequired(true)),
	async execute(interaction, client) {

const db = require("./../database/connect.js");
    
    const ban_id = interaction.options.getString('userid');
    const ban_reason = interaction.options.getString('reason');
    
  const ban = db.table("ban");

await ban.set(`${ban_id}.ban`, 'true')

await ban.set(`${ban_id}.reason`, ban_reason)

const embed = new EmbedBuilder()
    .setTitle(`TrollBot Suspension`)
.setDescription(`You Banned ${ban_id} For ${ban_reason}`);

return interaction.editReply({embeds: [embed]})
    
	},
}