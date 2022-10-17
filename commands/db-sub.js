const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('db-sub')
		.setDescription("🍂 subtract something on trollbot database")
		.addStringOption(option => option.setName('table').setDescription('Give Me Table').addChoices(
      { name: 'currency', value: 'currency' },
      { name: 'items', value: 'items' },
      { name: 'counts', value: 'counts' },
    )
.setRequired(true))
  .addStringOption(option => option.setName('string').setDescription('db string').setRequired(true))
.addNumberOption(option => option.setName('quantity').setDescription('Give quantity')),
	async execute(interaction, client) {

const db = require("./../database/connect.js");
    
const table = interaction.options.getString('table');

const string = interaction.options.getString('string');

const quantity = interaction.options.getNumber('quantity');
    
const currency = db.table('currency');

const items = db.table('items');


const counts = db.table('counts');
    
if (table === "currency") {
  
await currency.sub(`${string}`, quantity)

  return interaction.editReply(`Subtracted ${string} ${quantity} in currency table`)
}

if (table === "items") {
  
await items.sub(`${string}`, quantity)

  return interaction.editReply(`Subtracted ${string} ${quantity} in items table`)
}
    
if (table === "counts") {
  
await counts.sub(`${string}`, quantity)

  return interaction.editReply(`Subtracted ${string} ${quantity} in counts table`)
}

	},
}