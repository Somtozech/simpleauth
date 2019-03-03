const mongoose = require('mongoose');
const server = require('./src/server');
const Database = require('./src/database');
const logger = require('./src/logging/logger');

class Application {
  constructor() {
    this.server = server;
    this.database = new Database(mongoose);
    this.logger = logger;
  }

  async start() {
    try {
      if (this.database) {
        await this.database.authenticate().then(() => {
          this.logger.info('Database connection was successful');
        });
      }
      await this.server.start();
    } catch (error) {
      this.logger.error(error);
    }
  }
}

module.exports = new Application();
