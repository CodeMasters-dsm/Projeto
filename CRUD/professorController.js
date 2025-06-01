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
