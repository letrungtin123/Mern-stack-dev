import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

//coolmate

//regex:
//cắt chuỗi thành 2 phần: 1 phần 3 chữ cái đầu tiên, 1 phần là 10 chữ số
//check startDate and endDate (thời hạn voucher khả dụng)

const VoucherSchema = new mongoose.Schema(
	{
		code: {
			type: String,
			required: true,
		},
		discount: {
			type: Number,
			required: true,
			default: 0,
		},
		status: {
			type: String,
			default: 'active',
			enum: ['active', 'inactive'],
		},
		is_deleted: {
			type: Boolean,
			default: false,
		},
		desc: {
			type: String,
		},
		startDate: {
			type: Date,
		},
		endDate: {
			type: Date,
		},
		//mệnh giá của voucher
		voucherPrice: {
			type: Number,
			default: 0,
		},
		//số tiền tối thiểu của đơn hàng để có thể sử dụng được voucher này
		applicablePrice: {
			type: Number,
			default: 0,
		},
		//who created this voucher?
		createdBy: {
			type: String,
			ref: 'User',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

VoucherSchema.plugin(mongoosePaginate);

const Voucher = mongoose.model('Voucher', VoucherSchema);

export default Voucher;
