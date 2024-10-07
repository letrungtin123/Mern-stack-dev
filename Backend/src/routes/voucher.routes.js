import { checkPermission } from '../middlewares/check-permission.middleware.js';
import express from 'express';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { voucherController } from '../controllers/voucher.controller.js';
import { voucherMiddleware } from '../middlewares/voucher.middleware.js';
import { wrapRequestHandler } from '../utils/handlers.util.js';

const router = express.Router();

router.post(
    '/voucher', 
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(voucherMiddleware),
    wrapRequestHandler(voucherController.createVoucher),
);

router.get(
    '/vouchers',
    wrapRequestHandler(voucherController.getVouchers),
);

router.put(
    '/voucher/:id', 
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(voucherMiddleware),
    wrapRequestHandler(voucherController.updateVoucher)
);

export default router;