module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} (${interaction.user.id}) Triggered ${interaction.commandName} In ${interaction.guild.name} (${interaction.guild.id})`);
	},
};