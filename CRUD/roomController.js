//Arrumar de onde ele está pegando (NOME CORRETO)
import { db } from './db.js'

export async function getRooms(req, res) {
  try {
    const result = await db.query('SELECT * FROM room')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function getRoomById(req, res) {
  const { id } = req.params
  try {
    const result = await db.query('SELECT * FROM room WHERE id_ro = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sala não encontrada' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
