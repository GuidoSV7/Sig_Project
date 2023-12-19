import { Router } from "express";
import { SizeController } from './controller';



export class SizeRoutes {

    static get routes(): Router {

        const router = Router();
        
        const sizeController = new SizeController();

        router.get('/', sizeController.getSizes);
        router.get('/:id', sizeController.getSizesById);
        router.post('/', sizeController.createSizes);
        router.put('/:id', sizeController.updateSizes);
        router.delete('/:id', sizeController.deleteSizes);
        
        return router;
    }
}