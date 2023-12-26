import { Request, Response, response } from "express"
import {prisma} from '../../data/postgres';
import * as yup from 'yup';
const bcrypt = require('bcrypt');



export class RoutegeoController {

    constructor() {}

    
    getPolilineasSchema = yup.object({

        nrStand: yup.string().required(),
        nameEntrance: yup.string().required(),
        
    })

    public getPolilineas = async(req: Request, res: Response) => {

        
        try{
            const requestData = await req.body;
            const {  nrStand, nameEntrance} = await this.getPolilineasSchema.validate({
                ...requestData,
                
            });
            
            const polilineas = await prisma.routegeo.findMany({
                where: {
                    nrStand: nrStand,
                    nameEntrance: nameEntrance
                }
            });
           
            return res.status(200).json(polilineas);
        
            }catch(error){
                return res.status(400).json(error)
            }
        

    }


    



}