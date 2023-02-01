import { CreateMemorieParams } from "@/services/memorie-service";
import Joi from "joi";

export const createMemorieSchema = Joi.object<CreateMemorieParams>({
  description: Joi.string().required().min(10),
  image: Joi.string().uri().required(),
  store: Joi.string().required().min(4),
  price: Joi.number().min(1).required(),
});
