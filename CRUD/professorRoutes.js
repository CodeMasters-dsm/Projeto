import express from 'express';
import {
  createProfessor,
  getProfessors,
  getProfessorById,
  updateProfessor,
  deleteProfessor
} from '../controllers/professorController.js';

const router = express.Router();
