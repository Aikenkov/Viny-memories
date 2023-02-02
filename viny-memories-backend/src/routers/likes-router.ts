import { Router } from "express";

import { authenticateToken } from "@/middlewares";
import { createMemorieSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { listMemories, listUserMemories, createMemorie, deleteMemorie, listPrivateUserMemories } from "@/controllers";

const memoriesRouter = Router();

memoriesRouter
  .all("/*", authenticateToken)
  .get("/", listMemories)
  .get("/user/private", listPrivateUserMemories)
  .get("/user", listUserMemories)
  .post("/", validateBody(createMemorieSchema), createMemorie)
  .delete("/:memorieId", deleteMemorie);

export { memoriesRouter };
