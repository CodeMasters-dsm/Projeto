const pool = require('../db/db');
const bcrypt = require('bcrypt');

class loginService {
  static async authenticateUser(username, password) {


    const teste = await bcrypt.hash(password, 10);

    const result = await pool.query('SELECT * FROM users WHERE mail_us = $1', [username]);
    if (result.rows.length === 0) return null;

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password_us);
    if (!match) return null;

    return user;
  }
}

module.exports = loginService;