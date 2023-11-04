"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAgenda = exports.postAgenda = exports.deleteAgenda = exports.getAgenda = exports.getAgendas = void 0;
const agenda_1 = __importDefault(require("../models/agenda"));
// GET
const getAgendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAgendas = yield agenda_1.default.findAll();
    res.json(listAgendas);
});
exports.getAgendas = getAgendas;
// SELECIONAR
const getAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const register = yield agenda_1.default.findByPk(id);
    if (register) {
        res.json(register);
    }
    else {
        res.status(404).json({
            msg: `Não existe um cadastro com este id ${id}`
        });
    }
});
exports.getAgenda = getAgenda;
// DELETE
const deleteAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const register = yield agenda_1.default.findByPk(id);
    if (!register) {
        res.status(404).json({
            msg: `Não existe um cadastro com este id ${id}`
        });
    }
    else {
        yield register.destroy();
        res.json({
            msg: 'Cadastro eliminado com sucesso!'
        });
    }
});
exports.deleteAgenda = deleteAgenda;
// POST
const postAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield agenda_1.default.create(body);
        res.json({
            msg: `O cadastro foi criado com sucesso!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ops ocorreu um erro, comunique-se com o suporte!`
        });
    }
});
exports.postAgenda = postAgenda;
// UPDATE
const updateAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const register = yield agenda_1.default.findByPk(id);
        if (register) {
            yield register.update(body);
            res.json({
                msg: 'O cadastro foi atualizado com sucesso'
            });
        }
        else {
            res.status(404).json({
                msg: `Não existe um cadastro com este id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ops ocorreu um erro, comunique-se com o suporte!`
        });
    }
});
exports.updateAgenda = updateAgenda;
