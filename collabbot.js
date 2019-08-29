const { Client } = require('klasa');

new Client({
    fetchAllMembers: false,
    prefix: '+',
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login('your-bot-token');