import { createBrand, getBrandById, getbrands, updateBrand } from '../controllers/brand.controller.js';

import { brandMiddleware } from '../middlewares/brand.middleware.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
import express from 'express';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handlers.util.js';

const router = express.Router();

//create brand
router.post(
    '/brand',
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(brandMiddleware),
    wrapRequestHandler(createBrand),
);

//get all brands
router.get(
    '/brand',
    wrapRequestHandler(getbrands),
);

//get brand by id 
router.get(
    '/brand/:brandId',
    wrapRequestHandler(getBrandById),
);

//update brand 
router.patch(
    '/brand/:brandId',
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(brandMiddleware),
    wrapRequestHandler(updateBrand),
);

export default router;
