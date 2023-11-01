import { Request, Response } from 'express';
import Produto from '../models/agenda';

// GET


export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Produto.findAll()

    res.json(listProducts)
}

// SELECIONAR


export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Produto.findByPk(id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `Não existe um produto com este id ${id}`
        })
    }
}

// DELETE

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Produto.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `Não existe um produto com este id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'Produto eliminado com sucesso!'
        })
    }

}

// POST


export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Produto.create(body);

        res.json({
            msg: `O produto foi criado com sucesso!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ops ocorreu um erro, comunique-se com o suporte!`
        })
    }
}

// UPDATE

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product = await Produto.findByPk(id);

    if(product) {
        await product.update(body);
        res.json({
            msg: 'O produto foi atualizado com sucesso'
        })

    } else {
        res.status(404).json({
            msg: `Não existe um produto com este id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ops ocorreu um erro, comunique-se com o suporte!`
        })
    }

    
}