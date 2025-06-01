import express from 'express';
import {
  createProfessor,
  getProfessors,
  getProfessorById,
  updateProfessor,
  deleteProfessor
} from '../controllers/professorController.js';

const router = express.Router();

router.post('/', createProfessor);
router.get('/', getProfessors);
router.get('/:id', getProfessorById);
router.put('/:id', updateProfessor);
router.delete('/:id', deleteProfessor);

export default router;
