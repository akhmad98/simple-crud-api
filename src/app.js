const http = require('http');
const { findAllPeople } = require('./resources/person/person.controller');

const app = http.createServer((req, res) => {
    if (req.url === '/person' && req.method === 'GET') {
        findAllPeople(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found'}))
    }

})

module.exports = app;