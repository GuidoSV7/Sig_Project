import { Request, Response, response } from "express"
import {prisma} from '../../data/postgres';
import * as yup from 'yup';
const bcrypt = require('bcrypt');



export class StandController {

    constructor() {}

    public  getStand = async (req: Request, res: Response) =>{
        const stands = await prisma.stand.findMany();
        return res.status(200).json(stands);
    }

    public  getStandById = async (req: Request, res: Response) =>{
        const { id } = req.params;
        const stand = await prisma.stand.findUnique({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(stand);
    }

    createSchema = yup.object({
        name: yup.string().required(),
        owner: yup.string().required(),
        image: yup.string().required(),
        direction: yup.string().required(),
        longitude: yup.number().required(),
        latitude: yup.number().required(),
        nr: yup.string().required(),
        phone: yup.string().required(),
        urlPage  : yup.string().required(),      
        
            

        
    })

    public  createStand = async(req: Request, res: Response)=> {

        
        try{
   
            const {  name, owner, image, direction, longitude, latitude,nr, phone,urlPage} = await this.createSchema.validate( await req.body );
            
           
            
            const product = await prisma.stand.create({
                data: { name, owner, image, direction, longitude, latitude, nr, phone,urlPage} 
                
            });
           
            return res.status(200).json(product);
        
            }catch(error){
                return res.status(400).json(error)
            }
        

    }

    public  updateStand = async (req: Request, res: Response) =>{
        const { id } = req.params;
        const { name, owner, image, direction, longitude, latitude, nr, phone, urlPage} = req.body;

        const stand = await prisma.stand.update({
            where: {
                id: Number(id)
            },
            data: {
                name, owner, image, direction, longitude, latitude, nr, phone, urlPage
            }
        });

        return res.status(200).json(stand);
    }

    public  deleteStand = async (req: Request, res: Response)=> {
        const { id } = req.params;
        const stand = await prisma.stand.delete({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(stand);
    }






}