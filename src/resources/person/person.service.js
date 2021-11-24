const personRepo = require('./person.repo');

const findAll = async () => personRepo.findAll();

const findOne = async (id) => personRepo.findOne(id);

const createPerson = async (body) => personRepo.create(body);

const update = async (body, person) => {
    const personDTO = {
        name: body.name || person.name,
        age: body.age || person.age,
        hobbies: body.hobbies || person.hobbies
        }

    return personRepo.update(person.id, personDTO);
} 

const deleteIt = id => personRepo.deleteIt(id);

module.exports = {
    findAll,
    findOne,
    createPerson,
    update,
    deleteIt
}