import wishService from "@/services/wish-service";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateWishParams } from "@/services/wish-service";

export async function upsertWish(req: Request, res: Response) {
  try {
    const data = req.body as CreateWishParams;

    const wish = await wishService.upsertWish(data);
    return res.status(httpStatus.CREATED).json(wish);
  } catch (error) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
  }
}

export async function listWishes(req: Request, res: Response) {
  try {
    const { userId } = res.locals;

    const wishes = await wishService.getWishes(userId);
    return res.status(httpStatus.OK).send(wishes);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send(error);
  }
}

export async function deleteWish(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { wishId } = req.params;
    const memories = await wishService.deleteWish(userId, Number(wishId));
    return res.status(httpStatus.OK).json(memories);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send(error);
  }
}
