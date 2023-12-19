import { Request, Response, response } from "express";
import { prisma } from "../../data/postgres";
import { createSchema } from "./sizeValidator";

export class SizeController {
  public getSizes = async (req: Request, res: Response) => {
    const sizes = await prisma.sizes.findMany();
    return res.status(200).json(sizes);
  };

  public getSizesById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const sizes = await prisma.sizes.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!sizes) {
        return res.status(404).json({ error: "sizes not found" });
      }

      return res.status(200).json(sizes);
    } catch (error) {
      console.error("Error in getSizesById: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public createSizes = async (req: Request, res: Response) => {
    try {
      const requestData = await req.body;
      const { name } = await createSchema.validate({
        ...requestData,
      });

      const sizes = await prisma.sizes.create({
        data: { name },
      });

      return res.status(200).json(sizes);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  public updateSizes = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const sizes = await prisma.sizes.update({
        where: {
          id: Number(id),
        },
        data: { name },
      });

      if (!sizes) {
        return res.status(404).json({ error: "Size not found" });
      }

      return res.status(200).json(sizes);
    } catch (error) {
      console.error("Error in updateSizes: ", error);
      return res.status(500).json(error);
    }
  };

  public deleteSizes = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const size = await prisma.sizes.delete({
        where: {
          id: Number(id),
        },
      });

      if (!size) {
        return res.status(404).json({ error: "Size not found" });
      }

      return res.status(200).json(size);
    } catch (error) {
      console.error("Error in deleteSize: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
