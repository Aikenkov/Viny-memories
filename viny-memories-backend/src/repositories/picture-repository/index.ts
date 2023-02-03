import { prisma } from "@/config";

async function update(pictureUri: string, id: number) {
  return prisma.pictures.update({
    where: {
      id,
    },
    data: {
      pictureUri,
    },
  });
}

async function findByUserId(userId: number) {
  return prisma.pictures.findFirst({
    where: {
      userId,
    },
  });
}

const pictureRepository = {
  update,
  findByUserId,
};

export default pictureRepository;
