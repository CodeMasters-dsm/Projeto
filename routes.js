const express = require('express');
const router = express.Router();
const path = require('path');
const roomController = require('./controllers/roomController');
const scheduleController = require('./controllers/scheduleController');

// //Room
router.get('/room/:level', roomController.getRoomsByLevel); 
router.get('/room-schedule/:id', roomController.getRoomItinerary); 

// //Schedule
router.get('/aulas', scheduleController.getAulas);

router.get('/:page', (req, res) => {
  const page = req.params.page;

  const filePath = path.join(__dirname, 'views', page, 'index.html');

  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).send('Página não encontrada');
    }
  });
});

router.get('/', (req, res) => {
  res.redirect('/homePage');
});

module.exports = router;
