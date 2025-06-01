//Arrumar de onde ele está pegando (NOME CORRETO)
import { db } from './db.js'

// Listar todos os professores (READ)
export async function getProfessors(req, res) {
  try {
    const result = await db.query('SELECT * FROM professor')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Buscar professor por ID (READ)
export async function getProfessorById(req, res) {
  const { id } = req.params
  try {
    const result = await db.query('SELECT * FROM professor WHERE id_pr = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Professor não encontrado' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
