const personRepo = require('./person.repo');

const findAll = async () => personRepo.findAll();

module.exports = {
    findAll
}