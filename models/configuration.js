const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const configSchema = new Schema({
    id: String,
    data: Array,
    remark: String
});


module.exports = mongoose.model('configuration', configSchema);