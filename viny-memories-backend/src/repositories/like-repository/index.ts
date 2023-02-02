import { prisma } from "@/config";

async function findLiked(userId: number) {
  return prisma.memories.findMany({
    where: {
      likes: {
        some: {
          userId,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function create(userId: number, memorieId: number) {
  return prisma.likes.create({
    data: {
      userId,
      memorieId,
    },
  });
}

async function remove(userId: number, memorieId: number) {
  return prisma.likes.deleteMany({
    where: {
      userId,
      memorieId,
    },
  });
}

const likeRepository = {
  findLiked,
  create,
  remove,
};

export default likeRepository;
