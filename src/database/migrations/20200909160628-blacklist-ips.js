'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.createTable('blacklist_ips', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      host: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      accept: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      x_real_ip: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      connection: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_agent: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      x_forwarded_for: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      x_forwarded_photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface) =>
  {
    return queryInterface.dropTable('blacklist_ips');
  },
};
