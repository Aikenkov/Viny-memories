import pictureRepository from "@/repositories/picture-repository";
import { notFoundError, unauthorizedError } from "@/errors";

async function verify(id: number) {
  const picture = await pictureRepository.findByUserId(id);
  if (!picture) throw notFoundError();
  if (picture.userId !== id) throw unauthorizedError();

  return picture.id;
}

export async function updatePicture(userId: number, pictureUri: string) {
  const id = await verify(userId);
  return await pictureRepository.update(pictureUri, id);
}

const pictureService = {
  updatePicture,
};

export default pictureService;
