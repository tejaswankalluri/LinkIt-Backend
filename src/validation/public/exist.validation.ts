import Joi from 'joi';

const usernameValidate = Joi.object({
    username: Joi.string().regex(new RegExp(`^[A-Za-z][A-Za-z0-9_]{7,29}$`)).required(),
});
const emailValidate = Joi.object({
    email: Joi.string().email().required(),
});
export { usernameValidate, emailValidate };
