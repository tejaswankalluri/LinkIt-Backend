import Joi from 'joi';

const registerUserValidate = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required(),
    password_confirmation: Joi.any()
        .valid(Joi.ref('password'))
        .required()
        .options({ messages: { 'any.only': '{{#label}} does not match' } }),
});

export { registerUserValidate };
