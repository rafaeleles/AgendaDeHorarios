import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dbname', 'db user', 'password', {
  host: 'db host',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
