//Arrumar de onde ele está pegando (NOME CORRETO)
import { db } from './db.js'

export async function getUsers(req, res) {
  try {
    const result = await db.query('SELECT * FROM users')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function getUserById(req, res) {
  const { id } = req.params
  try {
    const result = await db.query('SELECT * FROM users WHERE id_us = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function createUser(req, res) {
  const { name_us, mail_us, password_us } = req.body
  try {
    const result = await db.query(
      'INSERT INTO users (name_us, mail_us, password_us) VALUES ($1, $2, $3) RETURNING *',
      [name_us, mail_us, password_us]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
