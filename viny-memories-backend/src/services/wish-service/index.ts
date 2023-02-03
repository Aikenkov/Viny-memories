import wishRepository from "@/repositories/wish-repository";
import { unauthorizedError } from "@/errors";
import { CreateMemorieParams } from "..";

export async function getWishes(userId: number) {
  const wishes = await wishRepository.find(userId);
  return wishes;
}

export async function postWish(data: CreateWishParams) {
  const wishes = await wishRepository.upsert(data);
  return wishes;
}

export async function deleteWish(userId: number, wishId: number) {
  const wish = await wishRepository.findById(wishId);

  if (wish.userId !== userId) {
    throw unauthorizedError();
  }

  return wishRepository.remove(wishId);
}

export type CreateWishParams = CreateMemorieParams & {
  id?: number;
};

const wishService = {
  getWishes,
  postWish,
  deleteWish,
};

export default wishService;
