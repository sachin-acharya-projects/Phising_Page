const process = require('process');

const EMAIL = process.env.USER_EMAIL;
const PASSWORD = process.env.USER_PASSWORD;

const CONFIG_TRANSPORT = {
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
}


module.exports = {
    EMAIL,
    PASSWORD,
    CONFIG_TRANSPORT
}