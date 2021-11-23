const personService = require('./person.service');

async function findAllPeople(req, res) {
    try {
        const people = await personService.findAll()
        
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(people))
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    findAllPeople
}