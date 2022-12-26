const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    category : {
        type: String,
        required: true
    },
    power : {
        type : Number,
        required: true,
    },
    limited : {
        type:Boolean,
        required:true
    }
}, {timestamps:false});

module.exports = mongoose.model('Item', itemSchema);