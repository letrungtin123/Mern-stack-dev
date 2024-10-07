import Joi from 'joi';

export const salaryValidation = Joi.object({
	month: Joi.number().integer().min(1).max(12).required().messages({
		'number.base': 'Tháng phải là một số',
		'number.min': 'Tháng phải lớn hơn hoặc bằng 1',
		'number.max': 'Tháng phải nhỏ hơn hoặc bằng 12',
		'any.required': 'Tháng là bắt buộc',
	}),
	year: Joi.number().integer().required().messages({
		'number.base': 'Năm phải là một số',
		'any.required': 'Năm là bắt buộc',
	}),
	totalWorkHours: Joi.number().min(0).required().messages({
		'number.base': 'Tổng số giờ làm phải là một số',
		'number.min': 'Tổng số giờ làm không được nhỏ hơn 0',
		'any.required': 'Tổng số giờ làm là bắt buộc',
	}),
	totalSalary: Joi.number().min(0).required().messages({
		'number.base': 'Tổng lương phải là một số',
		'number.min': 'Tổng lương không được nhỏ hơn 0',
		'any.required': 'Tổng lương là bắt buộc',
	}),
	status: Joi.string().valid('paid', 'unpaid').required().messages({
		'string.base': 'Trạng thái phải là một chuỗi',
		'any.only': 'Trạng thái phải là "paid" hoặc "unpaid"',
		'any.required': 'Trạng thái là bắt buộc',
	}),
	note: Joi.string().optional().allow('').messages({
		'string.base': 'Ghi chú phải là một chuỗi',
	}),
});
