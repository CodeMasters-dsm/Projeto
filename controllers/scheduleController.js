const path = require('path');
const scheduleService = require('../services/scheduleService');

class scheduleController {
  static async listByTurma(req, res) {
    const { id } = req.params;

    try {
      const schedules = await scheduleService.getScheduleByTurma(id);

      if (!schedules || schedules.length === 0) {
        return res.send('<h3>Horários da turma não encontrados. <a href="/homePage">Voltar</a></h3>');
      }

      res.json(schedules);
    } catch (error) {
      console.error('Erro ao buscar horários por turma:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async listByProfessor(req, res) {
    const { id } = req.params;

    try {
      const schedules = await ScheduleService.getScheduleByProfessor(id);

      if (!schedules || schedules.length === 0) {
        return res.send('<h3>Horários do professor não encontrados. <a href="/homePage">Voltar</a></h3>');
      }

      res.json(schedules);
    } catch (error) {
      console.error('Erro ao buscar horários por professor:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async getAulas(req, res) {
    const { curso, turno, semestre } = req.query;

    try {
      const aulas = await scheduleService.buscarAulas(curso, turno, semestre);
      res.json(aulas);
    } catch (err) {
      console.error('Erro ao buscar aulas:', err);
      res.status(500).json({ erro: 'Erro ao buscar aulas' });
    }
  }
}

module.exports = scheduleController;