const express = require('express');

const app = express();
const port = 3000;

// localhost:3000
app.get('/', (request, response) => {
    response.send('Hello, World! Good Morning');
});

// localhost:3000/pokemon/ditto
app.get('/pokemon/:name', (request, response) => {
    const pokemonName = request.params.name;

    const result = {
        name: pokemonName,
        status: 'OK',
    }


    response.json(result);
});

// localhost:3000/pokemon
// localhost:3000/pokemon?offset=30%limit=10
app.get('/pokemon', (request, response) => {
    const offset = request.query.offset || 0;
    const limit = request.query.limit || 20;
    response.send(`Offset: ${offset}; Limit: ${limit}`);
});

// Start server
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});