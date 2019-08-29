const { Client } = require('klasa');

new Client({
    fetchAllMembers: false,
    prefix: '+',
    commandEditing: true,
    typing: true,
    readyMessage: (client) => 'OpenCollabBot has started successfully!'
}).login('your-bot-token');