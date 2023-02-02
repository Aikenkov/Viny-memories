import { Router } from "express";

import { authenticateToken } from "@/middlewares";
import { createMemorieSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { listMemories, listUserMemories, createMemorie, deleteMemorie } from "@/controllers";

const memoriesRouter = Router();

memoriesRouter
  .all("/*", authenticateToken)
  .get("/", listMemories)
  .get("/user", listUserMemories)
  .post("/", validateBody(createMemorieSchema), createMemorie)
  .delete("/:memorieId", deleteMemorie);

export { memoriesRouter };
