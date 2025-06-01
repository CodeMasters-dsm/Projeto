//Arrumar de onde ele está pegando (NOME CORRETO)
import { db } from './db.js'

export async function getCourses(req, res) {
  try {
    const result = await db.query('SELECT * FROM course')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function getCourseById(req, res) {
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
}
