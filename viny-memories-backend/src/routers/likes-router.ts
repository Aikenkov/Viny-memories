import { Router } from "express";

import { authenticateToken } from "@/middlewares";
import { listUserLikes, createLike, deleteLike } from "@/controllers";

const likesRouter = Router();

likesRouter
  .all("/*", authenticateToken)
  .get("/", listUserLikes)
  .post("/:memorieId", createLike)
  .delete("/:memorieId", deleteLike);

export { likesRouter };
