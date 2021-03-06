const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default:false      
    },
}, 
{   
  timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;