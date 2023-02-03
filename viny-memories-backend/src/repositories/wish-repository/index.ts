import { prisma } from "@/config";
import { CreateWishParams } from "@/services";

async function find(userId: number) {
  return prisma.wishlist.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function upsert(data: CreateWishParams) {
  return prisma.wishlist.upsert({
    where: {
      id: data.id,
    },
    create: {
      ...data,
    },
    update: {
      ...data,
    },
  });
}

async function remove(wishId: number) {
  return prisma.memories.delete({
    where: {
      id: wishId,
    },
  });
}

async function findById(wishId: number) {
  return prisma.wishlist.findFirst({
    where: {
      id: wishId,
    },
  });
}

const memorieRepository = {
  find,
  upsert,
  remove,
  findById,
};

export default memorieRepository;
