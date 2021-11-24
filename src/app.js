const http = require('http');
const { findAllPeople, findPerson, createPerson, updatePerson } = require('./resources/person/person.controller');

const app = http.createServer((req, res) => {
    if (req.url === '/person' && req.method === 'GET') {
        findAllPeople(req, res);
    } else if (req.url.match(/\/person\/(\w+\d)/) && req.method === 'GET') {
        const id = req.url.split('/')[2]
        findPerson(req, res, id);
    } else if (req.url === '/person' && req.method === 'POST') {
        createPerson(req, res)
    } else if (req.url.match(/\/person\/(\w+\d)/) && req.method === 'PUT') {
        const id = req.url.split('/')[2]
        updatePerson(req, res, id);
    } else {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found'}))
    }

})

module.exports = app;