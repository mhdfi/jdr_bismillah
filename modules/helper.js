const crypto = require('crypto');

exports.encrypt = (password,salt) =>
    crypto 
        .createHmac('sha256',salt)
        .update(password)
        .digest('hex');