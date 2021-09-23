const dotenv = require('dotenv');
dotenv.config();
const { Bounty } = require('./models');

// IIFE -> immediately invoked function expression
( async function makeNewBounty() {
    let newBounty = await Bounty.create({
        name: 'Yosemite Sam',
        wantedFor: 'Rootin and Tootin',
        client: 'Warner Brothers',
        reward: 1000,
        ship: 'Bubba Gump Shrimp Ship',
        hunters: [
            { name: 'Elmer Fude', origin: 'Looney Tunes' }
        ],
        captured: false,
        lastSeen: '1902'
    });

    console.log(newBounty);
}() );