import Joi from 'joi';

const registerUserValidate = Joi.object({
    username: Joi.string().regex(new RegExp(`^[A-Za-z][A-Za-z0-9_]{7,29}$`)).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
    conpassword: Joi.any()
        .valid(Joi.ref('password'))
        .required()
        .options({ messages: { 'any.only': '{{#label}} does not match' } }),
});

export { registerUserValidate };
