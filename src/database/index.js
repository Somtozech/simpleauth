const config = require('../../config');

class Database {
  constructor(orm) {
    this.config = config;
    this.orm = orm;
  }

  async authenticate() {
    const { db } = this.config;
    const mongoURI = `mongodb://${db.host}:${db.port}/${db.database}`;

    // if NODE_ENV = production
    if (config.production) {
      await this.orm.connect(db, {
        useNewUrlParser: true,
      });
      return;
    }

    await this.orm.connect(mongoURI, {
      useNewUrlParser: true,
    });
  }
}

module.exports = Database;
