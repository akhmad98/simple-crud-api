const people = require('../../data/persons.json');
const Person = require('./person.model');
const { writeDataToFile } = require('../../utils');
const path = require('path');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(people);
    })
};

function findOne(id) {
    return new Promise((resolve, reject) => {
        const person = people.find((el) => el.id === id);
        resolve(person)
    })
};

function create(body) {
    return new Promise((resolve, reject) => {
        const newPerson = new Person({
            name: body.name,
            age: body.age,
            hobbies: body.hobbies
        });
        people.push(newPerson);
        writeDataToFile('./data/persons.json', people)
        resolve(newPerson);
    })
}
module.exports = {
    findAll,
    findOne,
    create
}