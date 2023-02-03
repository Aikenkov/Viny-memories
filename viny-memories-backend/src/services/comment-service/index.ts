import { Comments } from "@prisma/client";
import memorieRepository from "@/repositories/memorie-repository";
import CommentRepository from "@/repositories/comment-repository";
import { notFoundError } from "@/errors";

async function verify(id: number) {
  const memorie = await memorieRepository.findMemorieById(id);

  if (!memorie) {
    throw notFoundError();
  }
}

export async function postComment({ userId, memorieId, text }: CreateCommentParams) {
  await verify(memorieId);

  return CommentRepository.create({ userId, memorieId, text });
}

export async function deleteComment(userId: number, memorieId: number) {
  await verify(memorieId);

  return CommentRepository.remove(userId, memorieId);
}

export type CreateCommentParams = Omit<Comments, "id" | "createdAt" | "updatedAt">;

const CommentService = {
  postComment,
  deleteComment,
};

export default CommentService;
