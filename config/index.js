const ENV = process.env.NODE_ENV || 'development';

const envConfig = require('./enviroments')[ENV];
const dbConfig = require('./database')[ENV];

const config = Object.assign(
  {
    [ENV]: true,
    env: ENV,
    db: dbConfig,
  },
  envConfig,
);

module.exports = config;
