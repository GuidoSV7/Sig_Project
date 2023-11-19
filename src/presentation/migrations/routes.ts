import { MigrationController } from './migrations';
import { Router } from "express";




export class MigrationRoutes {

    static get routes(): Router{

        const router = Router();
        
        const migrationController = new MigrationController();

        router.get('/', migrationController.migration);



        
        return router;
    }
}