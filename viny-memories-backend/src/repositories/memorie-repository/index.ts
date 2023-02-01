import { prisma } from "@/config";
import { CreateMemorieParams } from "@/services";

async function find() {
  return prisma.memories.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

//TODO pegar memories de quem sigo
async function findFollowed() {
  return prisma.memories.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function findByUserId(userId: number) {
  return prisma.memories.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function create({ userId, store, description, image, price }: CreateMemorieParams) {
  return prisma.memories.create({
    data: {
      userId,
      store,
      image,
      description,
      price,
    },
  });
}

async function remove(memorieId: number) {
  return prisma.memories.delete({
    where: {
      id: memorieId,
    },
  });
}

async function findMemorieById(memorieId: number) {
  return prisma.memories.findFirst({
    where: {
      id: memorieId,
    },
  });
}

const memorieRepository = {
  find,
  create,
  remove,
  findFollowed,
  findByUserId,
  findMemorieById,
};

export default memorieRepository;
