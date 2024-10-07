import { createSalaryService, getSalaryByIdService } from '../services/salary.service';

import { HTTP_STATUS } from '../common/http-status.common';
import mongoose from 'mongoose';

export const salaryController = {
	checkIdSalaryInvalid: async (req, res) => {
		const { salaryId } = req.params;
		if (!mongoose.Types.ObjectId.isValid(salaryId)) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Id salary is invalid!',
				success: false,
			});
		}
		return true;
	},

	checkSalaryExist: async (req, res) => {
		const { salaryId } = req.params;

		const salaryExist = await getSalaryByIdService(salaryId);
		if (!salaryExist) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Salary is not found!',
				success: false,
			});
		}
		return salaryExist;
	},

	//add salary
	addSalary: async (req, res) => {
		const body = req.body;

		//add salary
		const salary = await createSalaryService(body);
		if (!salary) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Create salary failed!',
				success: false,
			});
		}
	},
};
