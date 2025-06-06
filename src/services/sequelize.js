const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const disconnectSequelize = async (sequelize) => {
  try {
    await sequelize.close();
    console.log('Connection has been closed.');
  } catch (error) {
    console.error('Unable to close the connection:', error);
  }
};

module.exports = {
  sequelize,
  disconnectSequelize,
};
