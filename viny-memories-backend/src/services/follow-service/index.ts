import userRepository from "@/repositories/user-repository";
import followRepository from "@/repositories/follow-repository";
import { notFoundError, unauthorizedError } from "@/errors";

async function verify(id: number) {
  const user = await userRepository.findById(id);

  if (!user) {
    throw notFoundError();
  }
}

export async function getUserFollows(userId: number) {
  const follows = await followRepository.findFollows(userId);
  return follows;
}
export async function getUserFollowers(userId: number) {
  const followers = await followRepository.findFollowers(userId);
  return followers;
}

export async function postFollow(userId: number, followedId: number) {
  await verify(followedId);

  return followRepository.create(userId, followedId);
}

export async function deleteFollow(userId: number, followedId: number) {
  await verify(followedId);

  return followRepository.remove(userId, followedId);
}

const likeService = {
  getUserFollows,
  getUserFollowers,
  postFollow,
  deleteFollow,
};

export default likeService;
