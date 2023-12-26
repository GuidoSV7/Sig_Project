import { Router } from "express";
import { StandController } from './controller';



export class StandRoutes {

    static get routes(): Router{

        const router = Router();
        
        const standController = new StandController();

        router.get('/', standController.getStand);
        router.get('/:id', standController.getStandById);
        router.post('/', standController.createStand);
        router.put('/:id', standController.updateStand);
        router.delete('/:id', standController.deleteStand);

        //Personales
        
        
        return router;
    }
}