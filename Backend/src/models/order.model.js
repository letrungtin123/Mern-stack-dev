import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const inforOrderShipping = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		rquired: true,
	},
	address: {
		type: String,
		required: true,
	},
});

const productOrderSchema = new mongoose.Schema({
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	size: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const orderSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: ['pending', 'confirmed', 'delivery', 'completed', 'cancelled'],
			default: 'pending',
		},
		note: {
			type: String,
			default: '',
		},
		paymentMethod: {
			type: String,
			required: true,
			enum: ['cod', 'payment'],
			default: 'cod',
		},
		total: {
			type: Number,
			required: true,
		},
		products: [
			{
				type: productOrderSchema,
				required: true,
			},
		],
		inforOrderShipping: inforOrderShipping,
		priceShipping: {
			type: Number,
			required: true,
		},
		assignee: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		reasonCancel: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

orderSchema.plugin(mongoosePaginate);

const Order = mongoose.model('Order', orderSchema);

export default Order;
