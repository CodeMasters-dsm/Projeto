import express from 'express'
import {
  getRoom,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
} from '../controllers/roomController.js'

const router = express.Router()
