const pool = require('../db/db');
const bcrypt = require('bcrypt');

async function getScheduleByTurma(turmaid) {
    return await Schedule.find({ turma: turmaId })
    .populate('materia')
    .populate('professor');
}

async function getScheduleByProfessor(professorid) {
    return await Schedule.find({ professor: professorId })
    .populate('materia')
    .populate('turma');
}

module.exports = { getScheduleByTurma, getScheduleByProfessor };