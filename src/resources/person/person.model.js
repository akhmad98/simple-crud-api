const uuid = require('uuid');

class Person {
    constructor({
        id = uuid.v4(),
        name = 'Ahmad',
        age = 23,
        hobbies
    } = {}) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.hobbies = hobbies || []
    }
}

module.exports = Person;