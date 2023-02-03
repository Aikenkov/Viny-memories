import { Router } from "express";

import { authenticateToken, validateBody } from "@/middlewares";
import { updatePicture } from "@/controllers";
import { updatePictureSchema } from "@/schemas";

const picturesRouter = Router();
picturesRouter.all("/*", authenticateToken).put("/", validateBody(updatePictureSchema), updatePicture);

export { picturesRouter };
