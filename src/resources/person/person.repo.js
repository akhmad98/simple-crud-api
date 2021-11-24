const people = require('../../data/persons.json');
const Person = require('./person.model');
const { writeDataToFile } = require('../../utils');

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

function update(id, person) {
    return new Promise((resolve, reject) => {
        const ind = people.findIndex((el) => el.id === id)
        people[ind] = {id, ...person};
        writeDataToFile('./data/persons.json', people);
        resolve(people[ind])
    })
}
module.exports = {
    findAll,
    findOne,
    create,
    update
}