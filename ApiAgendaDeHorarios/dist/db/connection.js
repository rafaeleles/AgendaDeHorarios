"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('dbname', 'db user', 'password', {
    host: 'db host',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});
exports.default = sequelize;
