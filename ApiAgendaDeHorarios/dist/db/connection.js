"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('ormcrud', 'devrafael', 'zd!dh54WSA2', {
    host: 'ormcrud.mysql.database.azure.com',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});
exports.default = sequelize;
