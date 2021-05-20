const database = require('../../database/database')

module.exports = () => {
    console.log('PandaBot is online!')
    database.then(() => console.log("Connected to DB.")).catch(err => console.log(err));
}