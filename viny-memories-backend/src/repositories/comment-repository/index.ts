import { prisma } from "@/config";
import { CreateCommentParams } from "@/services";

async function create({ userId, memorieId, text }: CreateCommentParams) {
  return prisma.comments.create({
    data: {
      userId,
      memorieId,
      text,
    },
  });
}

async function remove(userId: number, memorieId: number) {
  return prisma.comments.deleteMany({
    where: {
      userId,
      memorieId,
    },
  });
}

const likeRepository = {
  create,
  remove,
};

export default likeRepository;
