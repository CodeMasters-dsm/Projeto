const path = require('path');
const courseService = require('../services/courseService');

class courseController {
  static async getCourses(req, res) {
    try {
      const courses = await CourseService.getAllCourses();
      res.send(courses);
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async getCourseById(req, res) {
    const { id } = req.params;

    try {
      const course = await courseService.getCourseById(id);

      if (!course) {
        return res.send('<h3>Curso não encontrado. <a href="/courses">Voltar</a></h3>');
      }

      res.send(course);
    } catch (error) {
      console.error('Erro ao buscar curso por ID:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async createCourse(req, res) {
    const { pr_id, name_co, semester_co } = req.body;

    try {
      const course = await courseService.createCourse(pr_id, name_co, semester_co);
      res.redirect('/courses');
    } catch (error) {
      console.error('Erro ao criar curso:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async updateCourse(req, res) {
    const { id } = req.params;
    const { pr_id, name_co, semester_co } = req.body;

    try {
      const updated = await CourseService.updateCourse(id, pr_id, name_co, semester_co);

      if (!updated) {
        return res.send('<h3>Curso não encontrado para atualização. <a href="/courses">Voltar</a></h3>');
      }

      res.redirect('/courses');
    } catch (error) {
      console.error('Erro ao atualizar curso:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }

  static async deleteCourse(req, res) {
    const { id } = req.params;

    try {
      const deleted = await CourseService.deleteCourse(id);

      if (!deleted) {
        return res.send('<h3>Curso não encontrado para exclusão. <a href="/courses">Voltar</a></h3>');
      }

      res.redirect('/courses');
    } catch (error) {
      console.error('Erro ao deletar curso:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}

module.exports = courseController;