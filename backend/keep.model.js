const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Keep = new Schema({
    keepDescription:{
        type: String
    },
    keepResponsible:{
        type: String
    },
    keepPriority: {
        type: String
    },
    keepCompleted : {
        type: Boolean
    }
});
module.exports = mongoose.model('Keep',Keep);