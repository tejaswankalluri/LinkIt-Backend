import Joi from 'joi';

const createUserValidate = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email(),
});

export { createUserValidate };
