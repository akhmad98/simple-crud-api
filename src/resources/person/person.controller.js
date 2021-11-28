const personService = require('./person.service');
const { validate } = require('uuid');
const { getBody } = require('../../utils');
const persons = require('../../data/persons.json');

async function findAllPeople(req, res) {
    try {
        const people = await personService.findAll()
        
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(people))
    } catch (error) {
        console.log(error)
    }
}
async function findPerson(req, res, id) {
    try {
        const validator = await validate(id);
        if (validator) {
            const person = await personService.findOne(id)
            if (!person) {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: `The person with this ${id} not found`}))
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(person))
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `The ${id} you provided is not validated`}))
        }
    } catch (error) {
        console.log(error)
    }
}

async function createPerson(req, res) {
    try {
        const bodyNotParsed = await getBody(req);
        const body = JSON.parse(bodyNotParsed);
        if (!body.name || !body.age) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Both name and age are required` }))
        }

        const newPerson = await personService.createPerson(body)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(newPerson))
    } catch (error) {
        console.log(error)
    }
}

async function updatePerson(req, res, id) {
    try {
        const validator = await validate(id);
        if (validator) {
            const person = await personService.findOne(id)
            if (!person) {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: `The person with this ${id} not found`}))
            } else {
                const bodyNotParsed = await getBody(req);
                const body = JSON.parse(bodyNotParsed);
                

                const updPerson = await personService.update(body, person);
                // need to update it

                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(updPerson))
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `The ${id} you provided is not validated`}))
        }
    } catch (error) {
        
    }
}

async function deletePerson(req, res, id) {
    try {
        const validator = await validate(id);
        if (validator) {
            const person = await personService.findOne(id)
            if (!person) {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: `The person with this ${id} not found`}))
            } else {
                await personService.deleteIt(id);
                res.writeHead(204, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: `The ${id} deleted successfully`}))
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `The ${id} you provided is not validated`}))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    findAllPeople,
    findPerson,
    createPerson,
    updatePerson,
    deletePerson
}