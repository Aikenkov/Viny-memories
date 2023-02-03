import { Router } from "express";

import { authenticateToken } from "@/middlewares";
import { createWishSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { upsertWish, listWishes, deleteWish } from "@/controllers";

const wishesRouter = Router();

wishesRouter
  .all("/*", authenticateToken)
  .get("/", listWishes)
  .post("/", validateBody(createWishSchema), upsertWish)
  .delete("/:memorieId", deleteWish);

export { wishesRouter };
