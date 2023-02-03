import commentService from "@/services/comment-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function createComment(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { memorieId, text } = req.body;

    await commentService.postComment({ userId, memorieId, text });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function deleteComment(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { memorieId } = req.params;

    await commentService.deleteComment(userId, Number(memorieId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}
