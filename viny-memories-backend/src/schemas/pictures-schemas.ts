import Joi from "joi";

export const updatePictureSchema = Joi.object({
  pictureUri: Joi.string().required().uri(),
});
