import { Router } from "express";
import { RoutegeoController } from './controller';



export class RouteGeoRoutes {

    static get routes(): Router{

        const router = Router();
        
        const reoutegeoController = new RoutegeoController();

         //Personales
        router.post('/polilineas', reoutegeoController.getPolilineas);


       
        
        
        return router;
    }
}