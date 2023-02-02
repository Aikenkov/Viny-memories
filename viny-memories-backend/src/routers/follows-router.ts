import { Router } from "express";

import { authenticateToken } from "@/middlewares";
import { listUserFollows, createFollow, deleteFollow, listUserFollowers } from "@/controllers";

const followsRouter = Router();

followsRouter
  .all("/*", authenticateToken)
  .get("/follows", listUserFollows)
  .get("/followers", listUserFollowers)
  .post("/:userId", createFollow)
  .delete("/:userId", deleteFollow);

export { followsRouter };
