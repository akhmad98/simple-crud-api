const personRepo = require('./person.repo');

const findAll = async () => personRepo.findAll();

const findOne = async (id) => personRepo.findOne(id);

module.exports = {
    findAll,
    findOne
}