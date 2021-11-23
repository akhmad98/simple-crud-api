const { classBody } = require('babel-types');
const people = require('../../data/persons.json');
const Person = require('./person.model');

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
    })
}
module.exports = {
    findAll,
    findOne,
    create
}