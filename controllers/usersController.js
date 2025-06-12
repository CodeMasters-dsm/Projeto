const usersService = require('../services/usersService');

class usersController {
  static async getUsers(req, res) {
    try {
      const users = await usersService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await usersService.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createUser(req, res) {
    const { name_us, mail_us, password_us } = req.body;
    try {
      const user = await usersService.createUser(name_us, mail_us, password_us);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const { name_us, mail_us, password_us } = req.body;
    try {
      const updatedUser = await usersService.updateUser(id, name_us, mail_us, password_us);
      if (!updatedUser) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deleted = await usersService.deleteUser(id);
      if (!deleted) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = usersController;