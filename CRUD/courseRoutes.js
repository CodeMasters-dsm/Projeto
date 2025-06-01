Course
import express from 'express'
import {
  getCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from '../controllers/courseController.js'

const router = express.Router()
