import joi from 'joi';

export const cartValidation = joi.object({
    userId: joi.string().required().messages({
        'any.required' : 'userId is required',
        'string.empty': 'userId is not allowed to be empty',
    }),
    productId: joi.string().required().messages({
        'any.required': 'Product us required',
        'string.empty': 'Product is not allowed to be empty',
    }),
    color: joi.string().required().messages({
        'any.required': 'color is required',
        'string.empty': 'color is not allowed to be empty',
    }),
    size: joi.string().required().messages({
        'any.required': 'size is required',
        'string.empty': 'size is not allowed '
    }),
    quantity: joi.number().required().messages({
        'any.required': 'quantity is required',
        'string.empty': 'quantity is not allowed to be empty',
    }),
})