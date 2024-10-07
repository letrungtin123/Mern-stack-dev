import Salary from '../models/salary.model.js';

export const createSalaryService = async (body) => {
	const newSalary = await Salary.create(body);

	return newSalary;
};

export const getAllSalaries = async () => {
	const salaries = await Salary.find();

	return salaries;
};

export const getSalaryByIdService = async (salaryId) => {
	const salary = await Salary.findById({ _id: salaryId });

	return salary;
};

export const updateSalaryService = async (salaryId, body) => {
	const salary = await Salary.findByIdAndUpdate({ _id: salaryId }, body, { new: true });

	return salary;
};

//update status
export const updateStatus = async (salaryId, status) => {
	const statusSalary = await Salary.findByIdAndUpdate({ _id: salaryId }, { status }, { new: true });

	return statusSalary;
};

//remove salaryId from user (role === staff)
export const deleteSalaryFromStaff = async (salaryId) => {
    return await Salary.findByIdAndDelete(salaryId);
}
