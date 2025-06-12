const db = require('../db/db');

const courseService = {
  getAllCourses: async () => {
    return await db.query('SELECT * FROM course');
  },

  getCourseById: async (id) => {
    return await db.query('SELECT * FROM courses WHERE id = ?', [id]);
  },

  createCourse: async (courseData) => {
    const { name, description } = courseData;
    return await db.query('INSERT INTO courses (name, description) VALUES (?, ?)', [name, description]);
  },

  updateCourse: async (id, courseData) => {
    const { name, description } = courseData;
    return await db.query('UPDATE courses SET name = ?, description = ? WHERE id = ?', [name, description, id]);
  },

  deleteCourse: async (id) => {
    return await db.query('DELETE FROM courses WHERE id = ?', [id]);
  }
};

module.exports = courseService;