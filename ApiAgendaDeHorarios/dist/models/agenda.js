"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cadastro = connection_1.default.define('Agenda', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeProfessor: {
        type: sequelize_1.DataTypes.STRING
    },
    nomeDisciplina: {
        type: sequelize_1.DataTypes.STRING
    },
    nomeTurma: {
        type: sequelize_1.DataTypes.STRING
    },
    numeroDias: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'agenda',
    createdAt: false,
    updatedAt: false
});
exports.default = Cadastro;
