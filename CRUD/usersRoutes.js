Users
import express from 'express'
import {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers
} from '../controllers/usersController.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUsersById)
router.post('/', createUsers)
router.put('/:id', updateUsers)
router.delete('/:id', deleteUsers)

export default router
