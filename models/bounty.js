const mongoose = require('mongoose');
const { Schema } = mongoose;

const hunterSchema = new Schema ({
    name: String,
    origin: String
});

const bountySchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    client: String,
    lastSeen: String,
    wantedFor: {
        type: String,
        minlength: 10,
        maxlength: 200
    },
    reward: {
        type: Number,
        min: 1000,
        max: 1_000_000
    },
    captured: {
        type: Boolean,
        default: false
    },
    ship: String,
    hunters: [hunterSchema]

});

const Bounty = mongoose.model('Bounty', bountySchema);

module.exports = Bounty;