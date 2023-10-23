'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addTodos = [
      {
        title: "Breakfast",
        is_check: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Do the Dish",
        is_check: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Lunch",
        is_check: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('todo_list', addTodos, {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todo_list', null, {})
  }
};
