import Joi from 'joi';

const loginUserValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
});

export { loginUserValidate };
