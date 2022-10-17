const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription("🔨 unban someone from TrollBot")
		.addStringOption(option => option.setName('userid').setDescription('Give Me UserId To Ban').setRequired(true)),
	async execute(interaction, client) {

const db = require("./../database/connect.js");
    
    const ban_id = interaction.options.getString('userid');
    const ban_reason = interaction.options.getString('reason');
    
  const ban = db.table("ban");

await ban.set(`${ban_id}.ban`, 'false')

await ban.set(`${ban_id}.reason`, 'none')

const embed = new EmbedBuilder()
    .setTitle(`TrollBot Suspension`)
.setDescription(`You Unbanned ${ban_id}`);

return interaction.editReply({embeds: [embed]})
    
	},
}