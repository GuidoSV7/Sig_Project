import { Request, Response } from "express"
import {prisma} from '../../data/postgres';
import * as yup from 'yup';
const bcrypt = require('bcrypt');



export class ProductController {

    constructor() {}

    public getProducts = async (req: Request, res: Response) => {
        const products = await prisma.product.findMany();
        return res.status(200).json(products);
    }

    public getProductById = async (req: Request, res: Response)=> {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(product);
    }


    createSchema = yup.object({
        name: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().required()
        
    })

    public  createProduct = async(req: Request, res: Response) => {

        
        try{
            const requestData = await req.body;
            const {  name, description, price} = await this.createSchema.validate({
                ...requestData,
                
            });
            
           
            
            const product = await prisma.product.create({
                data: { name, description, price} 
                
            });
           
            return res.status(200).json(product);
        
            }catch(error){
                return res.status(400).json(error)
            }
        

    }

    public updateProduct = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const product = await prisma.product.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                description,
                price
            }
        });
        return res.status(200).json(product);
    }

    public deleteProduct = async (req: Request, res: Response) => {
        const { id } = req.params;
        const product = await prisma.product.delete({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(product);
    }

    

}