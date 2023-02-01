import memorieService from "@/services/memorie-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listMemories(req: Request, res: Response) {
  try {
    const memories = await memorieService.getMemories();
    return res.status(httpStatus.OK).json(memories);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function listUserMemories(req: Request, res: Response) {
  try {
    const { userId } = res.locals;

    const memories = await memorieService.getUserMemories(userId);
    return res.status(httpStatus.OK).json(memories);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function createMemorie(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { store, description, image, price } = req.body;

    const memories = await memorieService.postMemorie({ userId, store, description, image, price });
    return res.status(httpStatus.OK).json(memories);
  } catch (error) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
  }
}
export async function deleteMemorie(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { memorieId } = req.params;
    const memories = await memorieService.deleteMemorie(userId, Number(memorieId));
    return res.status(httpStatus.OK).json(memories);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send(error);
  }
}