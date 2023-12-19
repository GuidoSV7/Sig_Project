import { Request, Response, response } from "express";
import { prisma } from "../../data/postgres";
import { createSchema } from "./productHasCategoriesValidator";

export class ProductHasCategoriesController {
  public getProductCategory = async (req: Request, res: Response) => {
    const productCategory = await prisma.productHasCategories.findMany();
    return res.status(200).json(productCategory);
  };

  public getProductCategoryById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const productCategory = await prisma.productHasCategories.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!productCategory) {
        return res.status(404).json({ error: "Not found" });
      }

      return res.status(200).json(productCategory);
    } catch (error) {
      console.error("Error in getProductCategoryById: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public createProductCategory = async (req: Request, res: Response) => {
    try {
      const requestData = await req.body;
      const { idcategory, idproduct } = await createSchema.validate({
        ...requestData,
      });

      const productCategory = await prisma.productHasCategories.create({
        data: { idcategory, idproduct },
      });

      return res.status(200).json(productCategory);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  public updateProductCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { idcategory, idproduct } = req.body;
      const productCategory = await prisma.productHasCategories.update({
        where: {
          id: Number(id),
        },
        data: { idcategory, idproduct },
      });

      if (!productCategory) {
        return res.status(404).json({ error: "Not found" });
      }

      return res.status(200).json(productCategory);
    } catch (error) {
      console.error("Error in updateProductCategory: ", error);
      return res.status(500).json(error);
    }
  };

  public deleteProductCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const productCategory = await prisma.productHasCategories.delete({
        where: {
          id: Number(id),
        },
      });

      if (!productCategory) {
        return res.status(404).json({ error: "Not found" });
      }

      return res.status(200).json(productCategory);
    } catch (error) {
      console.error("Error in deleteProductCategory: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
