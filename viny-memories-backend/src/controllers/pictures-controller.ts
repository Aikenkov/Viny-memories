import pictureService from "@/services/picture-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function updatePicture(req: Request, res: Response) {
  try {
    const { userId } = res.locals;
    const { pictureUri } = req.body;

    await pictureService.updatePicture(userId, pictureUri);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
