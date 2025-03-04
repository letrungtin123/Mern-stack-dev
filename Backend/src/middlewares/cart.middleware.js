import { HTTP_STATUS } from '../common/http-status.common.js';
import { cartValidation } from '../validations/cart.validation.js';

export const addToCartMiddleware = (req, res, next) => {
	const { error } = cartValidation.validate(req.body, { abortEarly: false });
	if (error) {
		const errors = error.map((item) => item.message);
		return res.status(HTTP_STATUS.BAD_REQUEST).message({
			message: errors,
			success: false,
		});
	}

	next();
};
