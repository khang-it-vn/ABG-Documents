const express = require('express');
const Binance = require('binance-api-node').default;
const app = express();

const client = Binance({
apiKey: 'your-api-key',
apiSecret: 'your-api-secret'
});

app.post('/createAccount', async function(req, res) {
    const userId = req.body.userId; // Get the user ID from the request body
    const wallet = await client.createMarginWallet(userId); // Create a new electronic wallet for the user
    res.send(wallet); // Send the wallet information back to the client
});

app.listen(3000, function() {
console.log('Server started on port 3000');
});