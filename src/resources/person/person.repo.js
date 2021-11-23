const people = require('../../data/persons.json');

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


module.exports = {
    findAll,
    findOne
}