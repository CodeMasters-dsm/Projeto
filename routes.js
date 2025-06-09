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
  res.redirect('/login');
});


router.post('/login', loginController.postLogin);
router.get('/logout', loginController.logout);

router.post('/createUser', userController.create);
router.post('/listUsers', userController.listUsers);

// //Course
// const {
//   getCourse,
//   getCourseById,
//   createCourse,
//   updateCourse,
//   deleteCourse
// } = require('./controllers/courseController');


// router.get('/', getCourse);
// router.get('/:id', getCourseById);
// router.post('/', createCourse);
// router.put('/:id', updateCourse);
// router.delete('/:id', deleteCourse);

// //Professor
// const {
//   createProfessor,
//   getProfessors,
//   getProfessorById,
//   updateProfessor,
//   deleteProfessor
// } = require('./controllers/professorController');

// router.post('/', createProfessor);
// router.get('/', getProfessors);
// router.get('/:id', getProfessorById);
// router.put('/:id', updateProfessor);
// router.delete('/:id', deleteProfessor);

// //Room
// const {
//   getRoom,
//   getRoomById,
//   createRoom,
//   updateRoom,
//   deleteRoom
// } = require('./controllers/roomController');

// router.get('/', getRoom);
// router.get('/:id', getRoomById);
// router.post('/', createRoom);
// router.put('/:id', updateRoom);
// router.delete('/:id', deleteRoom);

// //Users
// const {
//   getUsers,
//   getUsersById,
//   createUsers,
//   updateUsers,
//   deleteUsers
// } = require('./controllers/usersController');

// router.get('/', getUsers);
// router.get('/:id', getUsersById);
// router.post('/', createUsers);
// router.put('/:id', updateUsers);
// router.delete('/:id', deleteUsers);

module.exports = router;