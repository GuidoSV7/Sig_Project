import { Request, Response, response } from "express"
import {prisma} from '../../data/postgres';
import * as yup from 'yup';
const bcrypt = require('bcrypt');



export class PointgeoController {

    constructor() {}

    public getPointGeosById = async(req: Request, res: Response) => {
        const { id } = req.params;
        const pointegos = await prisma.pointgeo.findMany({
            where: {
                stand_id: Number(id)
            }
        });
        return res.status(200).json(pointegos);

    }   

    



}