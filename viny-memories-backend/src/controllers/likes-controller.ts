import likeService from "@/services/like-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listUserLikes(req: Request, res: Response) {
  try {
    const { userId } = res.locals;

    const likedMemories = await likeService.getLikedMemories(userId);
    return res.status(httpStatus.OK).json(likedMemories);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function createLike(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { memorieId } = req.params;

    await likeService.postLike(userId, Number(memorieId));
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function deleteLike(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { memorieId } = req.params;

    await likeService.deleteLike(userId, Number(memorieId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
