import { Router } from "express";
import { UserRoutes } from "./users/routes";

import { MigrationRoutes } from "./migrations/routes";
import { AuthRoutes } from "./auth/routes";







export class AppRoutes {
    static get routes(): Router{

        const router = Router();

        router.use('/api/users', UserRoutes.routes);
        router.use('/api/auth', AuthRoutes.routes);
        

        //Migration
        router.use('/migration',MigrationRoutes.routes);

    

        return router;
    }
}