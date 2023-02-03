import { CreateWishParams } from "@/services";
import Joi from "joi";

export const createWishSchema = Joi.object<CreateWishParams>({
  id: Joi.number(),
  description: Joi.string().required().min(10),
  image: Joi.string().uri().required(),
  store: Joi.string().required().min(4),
  price: Joi.number().min(1).required(),
  isPrivate: Joi.boolean().required(),
});
