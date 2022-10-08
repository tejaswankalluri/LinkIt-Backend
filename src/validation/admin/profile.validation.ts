import Joi from 'joi';

const updateUsernameValidation = Joi.object({
    username: Joi.string()
        .regex(new RegExp(`^[a-z0-9_.]{4,20}$`))
        .required()
        .error(new Error('Must contain 4 to 20 Characters and only small letters(a-z) & symbols( _ , . ) is allowed')),
});
export { updateUsernameValidation };
