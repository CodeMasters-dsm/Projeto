//Arrumar de onde ele está pegando (NOME CORRETO)
const { db } = require( '../db/db' );

 async function getRooms(req, res) {
  try {
    const result = await db.query('SELECT * FROM room')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

 async function getRoomById(req, res) {
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
};

 async function createRoom(req, res) {
  const { number_ro, level_ro, type_ro, description_ro } = req.body
  try {
    const result = await db.query(
      'INSERT INTO room (number_ro, level_ro, type_ro, description_ro) VALUES ($1, $2, $3, $4) RETURNING *',
      [number_ro, level_ro, type_ro, description_ro]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

 async function updateRoom(req, res) {
  const { id } = req.params
  const { number_ro, level_ro, type_ro, description_ro } = req.body
  try {
    const result = await db.query(
      'UPDATE room SET number_ro = $1, level_ro = $2, type_ro = $3, description_ro = $4 WHERE id_ro = $5 RETURNING *',
      [number_ro, level_ro, type_ro, description_ro, id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sala não encontrada' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

 async function deleteRoom(req, res) {
  const { id } = req.params
  try {
    const result = await db.query('DELETE FROM room WHERE id_ro = $1 RETURNING *', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sala não encontrada' })
    }
    res.json({ message: 'Sala deletada com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};
