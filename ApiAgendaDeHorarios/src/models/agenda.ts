import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cadastro = db.define('Agenda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeProfessor: {
        type: DataTypes.STRING
    },
    nomeDisciplina: {
        type: DataTypes.STRING
    },
    nomeTurma: {
        type: DataTypes.STRING
    },
    numeroDias: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'agenda', 
    createdAt: false,
    updatedAt: false
});

export default Cadastro;
