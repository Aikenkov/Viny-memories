import Joi from "joi";

export const createCommentSchema = Joi.object({
  memorieId: Joi.number().required().min(1),
  text: Joi.string().required().min(5),
});
