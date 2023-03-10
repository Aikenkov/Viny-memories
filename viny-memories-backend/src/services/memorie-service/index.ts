import memorieRepository from "@/repositories/memorie-repository";
import { Memories } from "@prisma/client";
import { unauthorizedError } from "@/errors";
import { number } from "joi";

export async function getMemories() {
  const memories = await memorieRepository.find();
  return memories;
}

export async function getFollowedUsersMemories(userId: number) {
  const memories = await memorieRepository.findFollowed(userId);
  return memories;
}

export async function getUserMemories(userId: number) {
  const memories = await memorieRepository.findByUserId(userId);
  return memories;
}

export async function getPrivateUserMemories(userId: number) {
  const memories = await memorieRepository.findPrivateByUserId(userId);
  return memories;
}

export async function postMemorie({
  userId,
  store,
  description,
  image,
  price,
  isPrivate,
}: CreateMemorieParams): Promise<Memories> {
  const memories = await memorieRepository.create({ userId, store, description, image, price, isPrivate });
  return memories;
}

export async function deleteMemorie(userId: number, memorieId: number): Promise<Memories> {
  const memorie = await memorieRepository.findMemorieById(memorieId);

  if (memorie.userId !== userId) {
    throw unauthorizedError();
  }

  return memorieRepository.remove(memorieId);
}

export type CreateMemorieParams = Omit<Memories, "id" | "createdAt" | "updatedAt">;

const memorieService = {
  getMemories,
  getUserMemories,
  postMemorie,
  deleteMemorie,
  getPrivateUserMemories,
  getFollowedUsersMemories,
};

export default memorieService;
