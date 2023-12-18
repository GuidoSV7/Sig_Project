import { Request, Response, response } from "express"
import {prisma} from '../../data/postgres';
import * as yup from 'yup';
const bcrypt = require('bcrypt');



export class InventorieController {
    
        constructor() {}  

    public getInventories = async(req: Request, res: Response) => {
        const inventories = await prisma.inventory.findMany();
        return res.status(200).json(inventories);
    }

    public getInventoryById = async(req: Request, res: Response) => {
        const { id } = req.params;
        const inventory = await prisma.inventory.findUnique({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(inventory);
    }

    createSchema = yup.object({
        idstand: yup.number().required(),
        idproduct: yup.number().required(),
        amount: yup.number().required(),

        
    })

    public createInventory = async(req: Request, res: Response) => {

        
        try{
            const requestData = await req.body;
            const {  idstand, idproduct, amount} = await this.createSchema.validate({
                ...requestData,
                
            });
            
            const inventory = await prisma.inventory.create({
                data: { idstand, idproduct, amount} 
                
            });
           
            return res.status(200).json(inventory);
        
            }catch(error){
                return res.status(400).json(error)
            }
        

    }

    public updateInventory = async(req: Request, res: Response) => {
        const { id } = req.params;
        const { idstand, idproduct, amount} = req.body;
        const inventory = await prisma.inventory.update({
            where: {
                id: Number(id)
            },
            data: { idstand, idproduct, amount}
        });
        return res.status(200).json(inventory);
    }

    public deleteInventory = async(req: Request, res: Response) => {
        const { id } = req.params;
        const inventory = await prisma.inventory.delete({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(inventory);
    }
        
        

       

}