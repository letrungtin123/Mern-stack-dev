import mongoose from 'mongoose';

const SalarySchema = new mongoose.Schema(
    {
        month: {
            type: Number,
            required: true,
            min: 1, // Tháng bắt đầu từ 1
            max: 12, // Tháng kết thúc ở 12
        },
        year: {
            type: Number,
            required: true,
        },
        totalWorkHours: {
            type: Number,
            required: true,
        },
        totalSalary: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            default:'unpaid',
            enum: ['paid', 'unpaid']
        },
        note: {
            type: String,
        },
        staffId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Salary = mongoose.model('Salary', SalarySchema);

export default Salary;