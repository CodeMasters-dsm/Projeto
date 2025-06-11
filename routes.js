const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');

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


router.post('/login', loginController.postLogin);
router.get('/logout', loginController.logout);

router.post('/createUser', userController.create);
router.post('/listUsers', userController.listUsers);

// //Course
router.get('/course', courseController.getCourses);
router.get('/course/:id', courseController.getCourseById);
router.post('/course', courseController.createCourse);
router.put('/course/:id', courseController.updateCourse);
router.delete('/course/:id', courseController.deleteCourse);

// //Professor
router.get('/professors', professorController.getProfessors);
router.get('/professors/:id', professorController.getProfessorById);
router.post('/professors', professorController.createProfessor);
router.put('/professors/:id', professorController.updateProfessor);
router.delete('/professors/:id', professorController.deleteProfessor);

// //Room
router.get('/rooms', roomController.getRooms);
router.get('/rooms/:id', roomController.getRoomById);
router.post('/rooms', roomController.createRoom);
router.put('/rooms/:id', roomController.updateRoom);
router.delete('/rooms/:id', roomController.deleteRoom);

// //Users
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// //Schedule
router.get('/schedule/turma/:id', scheduleController.listByTurma);
router.get('/schedule/professor/:id', scheduleController.listByProfessor);

module.exports = router;
