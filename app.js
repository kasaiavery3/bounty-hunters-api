// import express from 'express';
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.use( express.urlencoded({ extended: false }) );
app.use( express.json() );

const { Bounty } = require('./models');

// home route
app.get('/', async ( req, res ) => {
    res.json({ 
        api: 'Bounty Hunters API',
        message: 'Welcome to our API'
    });
});

app.get('/bounties', async (req, res) => {
    const fetchBounties = await Bounty.find({});
    res.json(fetchBounties)
})

app.listen(PORT, () => {
    console.log( `API running on ${PORT}` );
});

// export default app;