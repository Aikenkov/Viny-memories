import { CreateUserParams } from "@/services/users-service";
import Joi from "joi";

export const createUserSchema = Joi.object<CreateUserParams>({
  username: Joi.string().required().min(4),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
