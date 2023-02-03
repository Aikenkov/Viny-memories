import { Router } from "express";

import { authenticateToken } from "@/middlewares";
import { createCommentSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { createComment, deleteComment } from "@/controllers";

const commentsRouter = Router();

commentsRouter
  .all("/*", authenticateToken)
  .post("/", validateBody(createCommentSchema), createComment)
  .delete("/:commentId", deleteComment);

export { commentsRouter };
