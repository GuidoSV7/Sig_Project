import { Request, Response } from "express";
import {prisma} from '../../data/postgres';
const bcrypt = require('bcrypt');




export class MigrationController {
    constructor() {}

    public migration = async (req: Request, res: Response) => {

        await prisma.rol.createMany({
            data: [
                {
                    name: "Administrador",
               },
                {
                    name: "Usuario",
                },
    
            ]
         })
    
    
    await prisma.user.createMany({
        data: [
            {
                name: "Guido Salazar",
                email: "GuidoSalazar@gmail.com",
                password: await bcrypt.hash("123456",10),
                idrol: 1,
    
            },
    
            {
                name: "Alejandro Sahonero",
                email: "AlejandroSahonero@gmail.com",
                password: await bcrypt.hash("123456",10),
                idrol: 1,
            },
    
            {
                name: "Ronald Camino",
                email: "RonaldCamino@gmail.com",
                password: await bcrypt.hash("123456",10),
                idrol: 1,
            },
                {
                  name: "John Doe",
                  email: "johndoe@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 1,
                   },
                {
                  name: "Jane Smith",
                  email: "janesmith@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 2,
                  
                },
                {
                  name: "Michael Johnson",
                  email: "michaeljohnson@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 2,
                   },
                {
                  name: "Emily Davis",
                  email: "emilydavis@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 1,
                  
                },
                {
                  name: "Robert Wilson",
                  email: "robertwilson@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 2,
                   },
                {
                  name: "Sarah Taylor",
                  email: "sarahtaylor@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 2,
                  
                },
                {
                  name: "David Anderson",
                  email: "davidanderson@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 1,
                   },
                {
                  name: "Jessica Brown",
                  email: "jessicabrown@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 2,
                  
                },
                {
                  name: "Christopher Martinez",
                  email: "christophermartinez@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 2,
                   },
                {
                  name: "Amanda Rodriguez",
                  email: "amandarodriguez@gmail.com",
                  password: await bcrypt.hash("123456",10),
                  idrol: 1,
                  
                }
              ]
    
    
        })
    


        
        

       
    return res.status(200).json({message: 'Base de Datos Poblada'});

    }



}
