/* eslint no-underscore-dangle: "off" */
const { NODE_ENV = "development", PORT } = process.env;

const DEV = NODE_ENV !== "production";

global.config = {
  NODE_ENV,
  PORT: parseInt(PORT, 10),
  DEV
};

module.exports = global.config;
