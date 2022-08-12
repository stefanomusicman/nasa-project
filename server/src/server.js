const http = require('http');

const { mongoConnect } = require('./services/mongo');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

async function startServer() {
    await mongoConnect();

    await loadPlanetsData();
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();