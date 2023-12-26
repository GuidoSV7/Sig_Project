import { Router } from "express";
import { PointgeoController } from './controller';



export class PointGeoRoutes {

    static get routes(): Router{

        const router = Router();
        
        const pointgeoController = new PointgeoController();

         //Personales
        router.get('/pointgeosbyid/:id', pointgeoController.getPointGeosById);


       
        
        
        return router;
    }
}