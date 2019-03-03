const express = require('express');
const config = require('../config');
// const router = require('./router');
const logger = require('./logging/logger');

class Server {
  constructor() {
    this.express = express();
    this.config = config;
    this.logger = logger;

    // this.express.use(router);
  }

  start() {
    return new Promise((resolve) => {
      const http = this.express.listen(this.config.web.port, () => {
        const { port } = http.address();
        logger.info(`[p ${process.pid}] Listening at port ${port}`);
      });
      resolve();
    });
  }
}

module.exports = new Server();
