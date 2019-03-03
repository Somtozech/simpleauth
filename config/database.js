module.exports = {
  production: process.env.DATABASE_URL,
  development: {
    host: '127.0.0.1',
    port: 27017,
    database: 'simpleauth',
  },
  test: {
    host: '127.0.0.1',
    port: 27017,
    database: 'simpleauth_test',
  },
};
