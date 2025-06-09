const scheduleServices = require('../services/scheduleService');

async function listByTurma(req, res) {
    try {
        const schedules = await scheduleServices.getScheduleByTurma(req.params.id);
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listByProfessor(req, res) {
    try {
        const schedules = await scheduleServices.getScheduleByProfessor(req.params.id);
      res.json(schedules);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { listByTurma, listByProfessor };