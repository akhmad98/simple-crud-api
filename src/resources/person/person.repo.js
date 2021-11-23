const people = require('../../data/persons.json');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(people);
    })
};

module.exports = {
    findAll
}