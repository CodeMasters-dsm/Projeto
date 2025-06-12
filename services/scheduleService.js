const { db } = require('../db/db');

class scheduleService {
  static async getScheduleByTurma(turmaId) {
    const query = `
      SELECT * FROM schedule
      WHERE turma_id = $1
      ORDER BY day, start_time
    `;
    const result = await db.query(query, [turmaId]);
    return result.rows;
  }

  static async getScheduleByProfessor(professorId) {
    const query = `
      SELECT * FROM schedule
      WHERE professor_id = $1
      ORDER BY day, start_time
    `;
    const result = await db.query(query, [professorId]);
    return result.rows;
  }
}

module.exports = scheduleService;
