const app = require('./Application');

app.start().catch((error) => {
  app.logger.error(error);
  process.exit();
});
