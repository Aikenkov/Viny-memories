import memorieRepository from "@/repositories/memorie-repository";
import likeRepository from "@/repositories/like-repository";
import { notFoundError, unauthorizedError } from "@/errors";

export async function getLikedMemories(userId: number) {
  const likedMemories = await likeRepository.findLiked(userId);
  return likedMemories;
}

export async function postLike(userId: number, memorieId: number) {
  const like = await likeRepository.create(userId, memorieId);
  return like;
}

export async function deleteLike(userId: number, memorieId: number) {
  const memorie = await memorieRepository.findMemorieById(memorieId);

  if (!memorie) {
    throw notFoundError();
  }

  return likeRepository.remove(userId, memorieId);
}

const likeService = {
  getLikedMemories,
  postLike,
  deleteLike,
};

export default likeService;
