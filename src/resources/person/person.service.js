const personRepo = require('./person.repo');

const findAll = async () => personRepo.findAll();

const findOne = async (id) => personRepo.findOne(id);

const createPerson = async (body) => personRepo.create(body);

module.exports = {
    findAll,
    findOne,
    createPerson
}