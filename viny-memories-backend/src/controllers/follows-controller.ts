import followService from "@/services/follow-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listUserFollows(req: Request, res: Response) {
  try {
    const { userId } = res.locals;

    const userFollows = await followService.getUserFollows(userId);
    return res.status(httpStatus.OK).json(userFollows);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function listUserFollowers(req: Request, res: Response) {
  try {
    const { userId } = res.locals;

    const userFollowers = await followService.getUserFollowers(userId);
    return res.status(httpStatus.OK).json(userFollowers);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function createFollow(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { followedId } = req.params;

    await followService.postFollow(userId, Number(followedId));
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function deleteFollow(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { followedId } = req.params;

    await followService.deleteFollow(userId, Number(followedId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}
