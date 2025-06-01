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

// Criar professor (CREATE)
export async function createProfessor(req, res) {
  const { name_pr } = req.body
  try {
    const result = await db.query('INSERT INTO professor (name_pr) VALUES ($1) RETURNING *', [name_pr])
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Atualizar professor (UPDATE)
export async function updateProfessor(req, res) {
  const { id } = req.params
  const { name_pr } = req.body
  try {
    const result = await db.query(
      'UPDATE professor SET name_pr = $1 WHERE id_pr = $2 RETURNING *',
      [name_pr, id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Professor não encontrado' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
