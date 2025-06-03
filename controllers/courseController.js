//Arrumar de onde ele está pegando (NOME CORRETO)
const { db } = require( '../db/db' );

 async function getCourses(req, res) {
  try {
    const result = await db.query('SELECT * FROM course')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

 async function getCourseById(req, res) {
  const { id } = req.params
  try {
    const result = await db.query('SELECT * FROM course WHERE id_co = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Curso não encontrado' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

 async function createCourse(req, res) {
  const { pr_id, name_co, semester_co } = req.body
  try {
    const result = await db.query(
      'INSERT INTO course (pr_id, name_co, semester_co) VALUES ($1, $2, $3) RETURNING *',
      [pr_id, name_co, semester_co]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

 async function updateCourse(req, res) {
  const { id } = req.params
  const { pr_id, name_co, semester_co } = req.body
  try {
    const result = await db.query(
      'UPDATE course SET pr_id = $1, name_co = $2, semester_co = $3 WHERE id_co = $4 RETURNING *',
      [pr_id, name_co, semester_co, id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Curso não encontrado' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

 async function deleteCourse(req, res) {
  const { id } = req.params
  try {
    const result = await db.query('DELETE FROM course WHERE id_co = $1 RETURNING *', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Curso não encontrado' })
    }
    res.json({ message: 'Curso deletado com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};
