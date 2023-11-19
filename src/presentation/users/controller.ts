import { Request, Response, response } from "express"
import {prisma} from '../../data/postgres';
import * as yup from 'yup';
const bcrypt = require('bcrypt');



export class UserController {

    constructor() {}


    public getUsers = async (req:Request, res:Response) => {

        const users = await prisma.user.findMany();

         
        return res.status(200).json(users);
    
    
    }



    public getUserById = async (req:Request, res:Response) => {
        const id = +req.params.id;
        const user = await prisma.user.findFirst({where: {id}});
    
        if(!user){
            return res.status(400).json({message: `User con id ${id} no existe`});
        }
        
    
        return res.status(200).json(user);
    }


    createSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        idrol: yup.number().required(),
    })

    public createUser = async (req:Request, res:Response) => {


        try{
   
            const { name, email, password, idrol} = await this.createSchema.validate( await req.body );
            
            const hashedPassword = await bcrypt.hash(password, 10); // El segundo argumento es el número de rondas de hash
            
            const user = await prisma.user.create({
                data: { name, email, password: hashedPassword,idrol} // Guarda la contraseña encriptada
            });
            //Prueba
            return res.status(200).json(user);
        
            }catch(error){
                return res.status(400).json(error)
            }
    }


   updateSchema = yup.object().shape({
        name: yup.string(),
        email: yup.string().email(),
        password: yup.string(),
        idrol: yup.number(),

    });

    

    public updateUser = async (req:Request, res:Response) => {

        const id = +req.params.id;
        const user = await prisma.user.findFirst({where: {id}});
    
        if(!user){
            return res.status(400).json({message: `User con id ${id} no existe`});
        }
    
        try{
            const { name, email, password, idrol , ...rest} = await req.body;
    
            const updatedUser = await prisma.user.update({
                where:{id}, 
                data:{ name, email, password,idrol }
            });
    
            return res.json(updatedUser);
    
        } catch (error){
            return res.status(400).json(error)
        }
    }



    public deleteUser = async (req:Request, res:Response) => {
        const id = +req.params.id;

        const user = await prisma.user.findFirst({where: {id}});
        if (!user){
            return res.status(400).json({message: `User con id ${id} no existe`});
        }
        try{
            const deletedUser = await prisma.user.delete({where:{id}});
            return res.status(200).json(deletedUser);
        }
        catch(error){
            return res.status(400).json(error)
        }
    }




}