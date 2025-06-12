const db = require('../db/db'); 

const professorService = {
  getAllProfessors: async () => {
    const [rows] = await db.query('SELECT * FROM professor');
    return rows;
  },

  getProfessorById: async (id) => {
    const [rows] = await db.query('SELECT * FROM professor WHERE id = ?', [id]);
    return rows[0] || null;
  },

  createProfessor: async (name_pr) => {
    const [result] = await db.query('INSERT INTO professor (name_pr) VALUES (?)', [name_pr]);
    return result.insertId;
  },

  updateProfessor: async (id, name_pr) => {
    const [result] = await db.query('UPDATE professors SET name_pr = ? WHERE id = ?', [name_pr, id]);
    return result.affectedRows > 0;
  },

  deleteProfessor: async (id) => {
    const [result] = await db.query('DELETE FROM professors WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = professorService;
