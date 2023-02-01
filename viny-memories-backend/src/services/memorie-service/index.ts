import memorieRepository from "@/repositories/memorie-repository";
import { Memories } from "@prisma/client";
import { unauthorizedError } from "@/errors";

export async function getMemories(): Promise<Memories[]> {
  const memories = await memorieRepository.find();
  return memories;
}

export async function getUserMemories(userId: number): Promise<Memories[]> {
  const memories = await memorieRepository.findByUserId(userId);
  return memories;
}

export async function postMemorie({
  userId,
  store,
  description,
  image,
  price,
}: CreateMemorieParams): Promise<Memories> {
  const memories = await memorieRepository.create({ userId, store, description, image, price });
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
};

export default memorieService;
