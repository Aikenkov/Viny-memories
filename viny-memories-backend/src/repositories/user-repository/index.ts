import { prisma } from "@/config";
import { Prisma } from "@prisma/client";
import { pictureUri } from "@/utils/patternPicture";

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function findById(id: number) {
  return prisma.user.findFirst({
    where: {
      id,
    },
  });
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data,
    });

    await tx.pictures.create({
      data: {
        userId: user.id,
        pictureUri,
      },
    });

    return user;
  });
}

const userRepository = {
  findByEmail,
  create,
  findById,
};

export default userRepository;
