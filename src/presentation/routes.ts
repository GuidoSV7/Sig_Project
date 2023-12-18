import { Router } from "express";


import { MigrationRoutes } from "./migrations/routes";
import { AuthRoutes } from "./auth/routes";
import { ProductRoutes } from "./products/routes";
import { StandRoutes } from "./stands/routes";
import { InventoryRoutes } from "./inventories/routes";







export class AppRoutes {
    static get routes(): Router{

        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);

        router.use('/api/inventories', InventoryRoutes.routes);
        router.use('/api/products', ProductRoutes.routes);
        router.use('/api/stands', StandRoutes.routes);

        
        

        //Migration
        router.use('/migration',MigrationRoutes.routes);

    

        return router;
    }
}