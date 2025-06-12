const path = require('path');
const professorService = require('../services/professorService');

class professorController {
  static async getProfessors(req, res) {
    try {
      const professors = await professorService.getAllProfessors();
      res.send(professors);
    } catch (error) {
      console.error('Erro ao listar professores:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async getProfessorById(req, res) {
    const { id } = req.params;

    try {
      const professor = await professorService.getProfessorById(id);

      if (!professor) {
        return res.send('<h3>Professor não encontrado. <a href="/professors">Voltar</a></h3>');
      }

      res.send(professor);
    } catch (error) {
      console.error('Erro ao buscar professor por ID:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async createProfessor(req, res) {
    const { name_pr } = req.body;

    try {
      await professorService.createProfessor(name_pr);
      res.redirect('/professors');
    } catch (error) {
      console.error('Erro ao criar professor:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async updateProfessor(req, res) {
    const { id } = req.params;
    const { name_pr } = req.body;

    try {
      const updated = await professorService.updateProfessor(id, name_pr);

      if (!updated) {
        return res.send('<h3>Professor não encontrado para atualização. <a href="/professors">Voltar</a></h3>');
      }

      res.redirect('/professors');
    } catch (error) {
      console.error('Erro ao atualizar professor:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async deleteProfessor(req, res) {
    const { id } = req.params;

    try {
      const deleted = await professorService.deleteProfessor(id);

      if (!deleted) {
        return res.send('<h3>Professor não encontrado para exclusão. <a href="/professors">Voltar</a></h3>');
      }

      res.redirect('/professors');
    } catch (error) {
      console.error('Erro ao deletar professor:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}

module.exports = professorController;
