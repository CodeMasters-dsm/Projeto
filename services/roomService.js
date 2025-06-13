const pool = require('../db/db');

class roomService {
  static async getRoomsByLevel(level) {
    const result = await pool.query(
      "SELECT id_ro, number_ro, description_ro FROM room WHERE level_ro = $1 ORDER BY number_ro",
      [level]
    );
    return result.rows;
  }

  static async getRoomItinerary(roomId) {
    const result = await pool.query(`
    SELECT 
  c.name_co AS disciplina,
  p.name_pr AS professor,
  rhc.day_of_week_rc AS dia,
  TO_CHAR(rhc.begin_rc, 'HH24:MI') AS inicio,
  TO_CHAR(rhc.end_rc, 'HH24:MI') AS fim
FROM room_has_course rhc
JOIN course c ON rhc.co_id = c.id_co
JOIN professor p ON c.pr_id = p.id_pr   -- professor vem do curso
WHERE rhc.ro_id = $1
ORDER BY 
  CASE rhc.day_of_week_rc
    WHEN 'segunda-feira' THEN 1
    WHEN 'terça-feira' THEN 2
    WHEN 'quarta-feira' THEN 3
    WHEN 'quinta-feira' THEN 4
    WHEN 'sexta-feira' THEN 5
    ELSE 6
  END,
  rhc.begin_rc;
  `, [roomId]);

    return result.rows;
  }
}

module.exports = roomService;
