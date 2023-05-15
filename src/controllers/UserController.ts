import { Request, Response } from 'express';
import { User } from '../models/User';
import Joi from 'joi';

const schema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
  cpf: Joi.string(),
  telefone: Joi.string(),
  cep: Joi.string(),
  logradouro: Joi.string(),
  numero: Joi.string(),
  bairro: Joi.string(),
  cidade: Joi.string(),
  uf: Joi.string(),
  complemento: Joi.string(),
  ativo: Joi.boolean().required()
});

export class UserController {

  //create
  static async create(req: Request, res: Response) {
    //validations
    const { error, value } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      const {
        nome,
        email,
        senha,
        cpf,
        telefone,
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
        complemento,
        ativo
        } = req.body;
    };
  }

  static async findAll(req: Request, res: Response) {
    
  }

  static async delete(req: Request, res: Response) {
    
  }

  static async findOne(req: Request, res: Response) {
    
  }

  static async edit(req: Request, res: Response) {
    
  }
};