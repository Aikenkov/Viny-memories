import { prisma } from "@/config";

async function findFollows(userId: number) {
  return prisma.follows.findMany({
    where: {
      follower: userId,
    },
  });
}

async function findFollowers(userId: number) {
  return prisma.follows.findMany({
    where: {
      followed: userId,
    },
  });
}

async function create(userId: number, followedId: number) {
  return prisma.follows.create({
    data: {
      follower: userId,
      followed: followedId,
    },
  });
}

async function remove(userId: number, followedId: number) {
  return prisma.follows.deleteMany({
    where: {
      follower: userId,
      followed: followedId,
    },
  });
}

const likeRepository = {
  findFollows,
  findFollowers,
  create,
  remove,
};

export default likeRepository;
