const roomService = require('../db/db');

class roomController {
  static async getRooms(req, res) {
    try {
      const rooms = await roomService.getAllRooms();
      res.json(rooms);
    } catch (error) {
      console.error('Erro ao listar salas:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async getRoomById(req, res) {
    const { id } = req.params;
    try {
      const room = await roomService.getRoomById(id);
      if (!room) {
        return res.status(404).send('Sala não encontrada');
      }
      res.json(room);
    } catch (error) {
      console.error('Erro ao buscar sala:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async createRoom(req, res) {
    const { number_ro, level_ro, type_ro, description_ro } = req.body;
    try {
      const newRoom = await roomService.createRoom(number_ro, level_ro, type_ro, description_ro);
      res.status(201).json(newRoom);
    } catch (error) {
      console.error('Erro ao criar sala:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async updateRoom(req, res) {
    const { id } = req.params;
    const { number_ro, level_ro, type_ro, description_ro } = req.body;

    try {
      const updatedRoom = await roomService.updateRoom(id, number_ro, level_ro, type_ro, description_ro);
      if (!updatedRoom) {
        return res.status(404).send('Sala não encontrada para atualização');
      }
      res.json(updatedRoom);
    } catch (error) {
      console.error('Erro ao atualizar sala:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async deleteRoom(req, res) {
    const { id } = req.params;
    try {
      const deletedRoom = await roomService.deleteRoom(id);
      if (!deletedRoom) {
        return res.status(404).send('Sala não encontrada para exclusão');
      }
      res.json(deletedRoom);
    } catch (error) {
      console.error('Erro ao deletar sala:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}

module.exports = roomController;