const { Command } = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("TEST_DESCRIPTION"),
            extendedHelp: language => language.get("TEST_EXTENDEDHELP"),
            name: 'test',
            runIn: ['text', 'dm']
        });
    }

    async run(msg) {
        return msg.sendMessage('Test completed.');
    }
}