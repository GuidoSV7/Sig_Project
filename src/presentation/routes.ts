import { Router } from "express";


import { MigrationRoutes } from "./migrations/routes";
import { AuthRoutes } from "./auth/routes";
import { ProductRoutes } from "./products/routes";
import { StandRoutes } from "./stands/routes";
import { InventoryRoutes } from "./inventories/routes";
import { CategoryRoutes } from "./categories/routes";

import { ProductHasCategoryRoutes } from "./productHasCategories/routes";
import { PointGeoRoutes } from "./pointgeo/routes";
import { RouteGeoRoutes } from "./routegeo/routes";

export class AppRoutes {
    static get routes(): Router {

        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/inventories', InventoryRoutes.routes);
        router.use('/api/products', ProductRoutes.routes);
        router.use('/api/stands', StandRoutes.routes);
        router.use('/api/categories', CategoryRoutes.routes);
        router.use('/api/pointgeos', PointGeoRoutes.routes);
        router.use('/api/routegeo', RouteGeoRoutes.routes);
        

        router.use('.api/productHasCategory', ProductHasCategoryRoutes.routes);

        //Migration
        router.use('/api/migration',MigrationRoutes.routes);



    

        return router;
    }
}