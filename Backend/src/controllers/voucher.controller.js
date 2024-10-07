import { HTTP_STATUS } from '../common/http-status.common.js';
import _ from 'lodash';
import { voucherService } from '../services/voucher.service.js';

export const voucherController = {
	optionVoucher: (params) => {
		const { q, ...rest } = params;

		let populateDefault = [
			{ path: 'products.productId', select: '_id nameProduct desc images' },
			{ path: 'userId', select: '_id email' },
		];
		if (populate) {
			if (Array.isArray(populate)) {
				populateDefault = [...populateDefault, ...populate];
			} else {
				populateDefault.push(populate);
			}
		}
		let query = {};

		if (rest.status) {
			query = {
				...query,
				status: rest.status,
			};
		}

		const option = {
			limit: parseInt(_limit),
			page: parseInt(_page),
			populate: populateDefault,
		};
		return { option, query };
	},
	//create voucher
	createVoucher: async (req, res) => {
		const voucher = await voucherService.createVoucher(req.body);

		if (!voucher) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Create voucher failed!',
				status: false,
			});
		}
		return res.status(HTTP_STATUS.OK).json({
			message: 'Create voucher successfully!',
			status: true,
			data: voucher,
		});
	},

	//getall vouchers
	getVouchers: async (req, res) => {
		const { status, is_deleted } = req.query;

		let query = {};
		if (status) {
			query = {
				...query,
				status,
			};
		}
		if (is_deleted) {
			query = {
				...query,
				is_deleted,
			};
		}

		const vouchers = await voucherService.getVouchers(query);

		if (!vouchers) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Get Vouchers failed!',
				status: false,
			});
		}

		const result = vouchers.map((item) => {
			//loại bỏ đi createdBy
			const rest = _.omit(item._doc, ['createdBy']);
			return rest;
		});

		return res.status(HTTP_STATUS.OK).json({
			message: 'Create voucher successfully!',
			status: true,
			data: result,
		});
	},

	//update voucher
	updateVoucher: async (req, res) => {
		const { id } = req.params;
		const voucher = await voucherService.updateVoucher(id, req.body);

		if (!voucher) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Update voucher failed!',
				status: false,
			});
		}

		return res.status(HTTP_STATUS.OK).json({
			message: 'Update voucher successfully!',
			status: true,
			data: voucher,
		});
	},

	//get voucher by id
	getVoucherById: async (req, res) => {
		const { id } = req.params;
		const voucher = await voucherService.findVoucherById(id);

		if (!voucher) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Get voucher failed!',
				status: false,
			});
		}

		return res.status(HTTP_STATUS.OK).json({
			message: 'Get voucher successfully!',
			status: true,
			data: voucher,
		});
	},

	//delete voucher
	deleteVoucher: async (req, res) => {
		const { id } = req.params;
		const voucher = await voucherService.updateVoucher(id, { is_deleted: true });

		if (!voucher) {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({
				message: 'Voucher is not found!',
				status: false,
			});
		}

		return res.status(HTTP_STATUS.OK).josn({
			message: 'Delete voucher successfully!',
			status: true,
			data: voucher,
		});
	},
};
