import { Router } from "express";
import { ProductHasCategoriesController } from './Controller';

export class ProductHasCategoryRoutes {

    static get routes(): Router {

        const router = Router();
        
        const productHasCategoriesController = new ProductHasCategoriesController();

        router.get('/', productHasCategoriesController.getProductCategory);
        router.get('/:id', productHasCategoriesController.getProductCategoryById);
        router.post('/', productHasCategoriesController.createProductCategory);
        router.put('/:id', productHasCategoriesController.updateProductCategory);
        router.delete('/:id', productHasCategoriesController.deleteProductCategory);
        
        return router;
    }
}