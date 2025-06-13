const path = require('path');
const roomService = require('../services/roomService');

class roomController {
static async getRoomsByLevel(req, res) {
  const level = parseInt(req.params.level);

  if (isNaN(level)) {
    return res.status(400).json({ error: 'Nível inválido' });
  }

  try {
    const rooms = await roomService.getRoomsByLevel(level);
    res.json(rooms);
  } catch (err) {
    console.error('Erro ao buscar salas:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

static async getRoomItinerary(req, res) {
  const roomId = parseInt(req.params.id);

  if (isNaN(roomId)) {
    return res.status(400).json({ error: 'ID da sala inválido' });
  }

  try {
    const itinerary = await roomService.getRoomItinerary(roomId);
    res.json(itinerary);
  } catch (err) {
    console.error('Erro ao buscar itinerário da sala:', err);
    res.status(500).json({ error: 'Erro ao buscar itinerário' });
  }
}

}
module.exports = roomController;