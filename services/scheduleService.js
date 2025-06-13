const pool = require('../db/db');

class scheduleService {
  static async getScheduleByTurma(turmaId) {
    const query = `
      SELECT * FROM schedule
      WHERE turma_id = $1
      ORDER BY day, start_time
    `;
    const result = await pool.query(query, [turmaId]);
    return result.rows;
  }

  static async getScheduleByProfessor(professorId) {
    const query = `
      SELECT * FROM schedule
      WHERE professor_id = $1
      ORDER BY day, start_time
    `;
    const result = await pool.query(query, [professorId]);
    return result.rows;
  }

  static async buscarAulas(curso, turno, semestre) {
    const result = await pool.query(`
      SELECT 
        co.name_co AS disciplina_nome,
        rc.day_of_week_rc AS dia_da_semana,
        TO_CHAR(rc.begin_rc, 'HH24:MI') AS horario_inicio,
        TO_CHAR(rc.end_rc, 'HH24:MI') AS horario_fim,
        pr.name_pr AS professor,
        r.number_ro AS sala
      FROM course co
      JOIN degree de ON co.de_id = de.id_de
      LEFT JOIN professor pr ON co.pr_id = pr.id_pr
      LEFT JOIN room_has_course rc ON rc.co_id = co.id_co
      LEFT JOIN room r ON r.id_ro = rc.ro_id
      WHERE de.name_de = $1 AND de.period_de = $2 AND co.semester_co = $3
      ORDER BY 
        CASE 
          WHEN rc.day_of_week_rc = 'Segunda' THEN 1
          WHEN rc.day_of_week_rc = 'Terça' THEN 2
          WHEN rc.day_of_week_rc = 'Quarta' THEN 3
          WHEN rc.day_of_week_rc = 'Quinta' THEN 4
          WHEN rc.day_of_week_rc = 'Sexta' THEN 5
          ELSE 6
        END,
        rc.begin_rc
    `, [curso, turno, parseInt(semestre)]);

    return result.rows;
  }
}

module.exports = scheduleService;
