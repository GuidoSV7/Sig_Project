import { Router } from "express";
import { InventorieController } from './controller';



export class InventoryRoutes {

    static get routes(): Router{

        const router = Router();
        
        const inventorieController = new InventorieController();

        router.get('/', inventorieController.getInventories);
        router.get('/:id', inventorieController.getInventoryById);
        router.post('/', inventorieController.createInventory);
        router.put('/:id', inventorieController.updateInventory);
        router.delete('/:id', inventorieController.deleteInventory);
        
        return router;
    }
}