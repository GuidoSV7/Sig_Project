import { Request, Response, response } from "express";
import { prisma } from "../../data/postgres";
import { createSchema } from "./categoryValidation";

export class CategoryController {
  public getCategories = async (req: Request, res: Response) => {
    const categories = await prisma.category.findMany();
    return res.status(200).json(categories);
  };

  public getCategoryById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const category = await prisma.category.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      return res.status(200).json(category);
    } catch (error) {
      console.error("Error in getCategoryById: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public createCategory = async (req: Request, res: Response) => {
    try {
      const requestData = await req.body;
      const { title } = await createSchema.validate({
        ...requestData,
      });

      const category = await prisma.category.create({
        data: { title },
      });

      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  public updateCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const category = await prisma.category.update({
        where: {
          id: Number(id),
        },
        data: { title },
      });

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      return res.status(200).json(category);
    } catch (error) {
      console.error("Error in updateCategory: ", error);
      return res.status(500).json(error);
    }
  };

  public deleteCategory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const category = await prisma.category.delete({
        where: {
          id: Number(id),
        },
      });

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      return res.status(200).json(category);
    } catch (error) {
      console.error("Error in deleteCategory: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
