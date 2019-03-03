module.exports = {
  production: {
    web: {
      port: process.env.PORT,
    },
  },
  development: {
    web: {
      port: 3000,
    },
  },
  test: {
    web: {
      port: 8080,
    },
  },
};
