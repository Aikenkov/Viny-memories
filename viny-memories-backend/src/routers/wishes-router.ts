import { Router } from "express";

import { authenticateToken } from "@/middlewares";
import { createWishSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { createWish, listWishes, deleteWish } from "@/controllers";

const wishesRouter = Router();

wishesRouter
  .all("/*", authenticateToken)
  .get("/", listWishes)
  .post("/", validateBody(createWishSchema), createWish)
  .delete("/:memorieId", deleteWish);

export { wishesRouter };
