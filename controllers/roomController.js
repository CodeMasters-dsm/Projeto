const { db } = require('../db/db');

class RoomService {
  static async getAllRooms() {
    const result = await db.query('SELECT * FROM room');
    return result.rows;
  }

  static async getRoomById(id) {
    const result = await db.query('SELECT * FROM room WHERE id_ro = $1', [id]);
    return result.rows[0];
  }

  static async createRoom(number_ro, level_ro, type_ro, description_ro) {
    const result = await db.query(
      'INSERT INTO room (number_ro, level_ro, type_ro, description_ro) VALUES ($1, $2, $3, $4) RETURNING *',
      [number_ro, level_ro, type_ro, description_ro]
    );
    return result.rows[0];
  }

  static async updateRoom(id, number_ro, level_ro, type_ro, description_ro) {
    const result = await db.query(
      'UPDATE room SET number_ro = $1, level_ro = $2, type_ro = $3, description_ro = $4 WHERE id_ro = $5 RETURNING *',
      [number_ro, level_ro, type_ro, description_ro, id]
    );
    return result.rows[0];
  }

  static async deleteRoom(id) {
    const result = await db.query('DELETE FROM room WHERE id_ro = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = RoomService;
