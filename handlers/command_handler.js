const fs = require('fs')

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        const command_files = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'))

        for (const file of command_files) {
            const command = require(`../commands/${dirs}/${file}`)
            if (command.name) {
                client.commands.set(command.name, command)
                console.log(`✔️ Command Loaded - ${command.name} `);
            
            }
        }
    }
    ['economy', 'fun', 'levels', 'mod', 'reactionroles', 'roleplay', 'utility'].forEach(e => load_dir(e))
}
