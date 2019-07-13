const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    
    },
    password : {
        type: String,
        required: true,
    },
    name : String,
    salt: {
        type: String,
        required: true
    }, 
}, {
    collection: 'users',
    timestamps: true,
});

module.exports = mongoose.model('Users',schema);