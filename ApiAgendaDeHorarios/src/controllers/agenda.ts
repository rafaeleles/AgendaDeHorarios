import { Request, Response } from 'express';
import Cadastro from '../models/agenda';

// GET


export const getAgendas = async (req: Request, res: Response) => {
    const listAgendas = await Cadastro.findAll()

    res.json(listAgendas)
}

// SELECIONAR


export const getAgenda = async (req: Request, res: Response) => {
    const { id } = req.params;
    const register = await Cadastro.findByPk(id);

    if (register) {
        res.json(register)
    } else {
        res.status(404).json({
            msg: `Não existe um cadastro com este id ${id}`
        })
    }
}

// DELETE

export const deleteAgenda = async (req: Request, res: Response) => {
    const { id } = req.params;
    const register = await Cadastro.findByPk(id);

    if (!register) {
        res.status(404).json({
            msg: `Não existe um cadastro com este id ${id}`
        })
    } else {
        await register.destroy();
        res.json({
            msg: 'Cadastro eliminado com sucesso!'
        })
    }

}

// POST


export const postAgenda = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Cadastro.create(body);

        res.json({
            msg: `O cadastro foi criado com sucesso!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ops ocorreu um erro, comunique-se com o suporte!`
        })
    }
}

// UPDATE

export const updateAgenda = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const register = await Cadastro.findByPk(id);

    if(register) {
        await register.update(body);
        res.json({
            msg: 'O cadastro foi atualizado com sucesso'
        })

    } else {
        res.status(404).json({
            msg: `Não existe um cadastro com este id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ops ocorreu um erro, comunique-se com o suporte!`
        })
    }

    
}