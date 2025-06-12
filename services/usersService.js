const { db } = require('../db/db');

class usersService {
  static async getAllUsers() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  }

  static async getUserById(id) {
    const result = await db.query('SELECT * FROM users WHERE id_us = $1', [id]);
    return result.rows[0];
  }

  static async createUser(name_us, mail_us, password_us) {
    const result = await db.query(
      'INSERT INTO users (name_us, mail_us, password_us) VALUES ($1, $2, $3) RETURNING *',
      [name_us, mail_us, password_us]
    );
    return result.rows[0];
  }

  static async updateUser(id, name_us, mail_us, password_us) {
    const result = await db.query(
      'UPDATE users SET name_us = $1, mail_us = $2, password_us = $3 WHERE id_us = $4 RETURNING *',
      [name_us, mail_us, password_us, id]
    );
    return result.rows[0];
  }

  static async deleteUser(id) {
    const result = await db.query('DELETE FROM users WHERE id_us = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = usersService;
