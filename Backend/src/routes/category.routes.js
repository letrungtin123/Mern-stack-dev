import { createCategory, getCategories, getCategoryById, updateCategory } from "../controllers/category.controller.js";

import { categoryMiddleware } from "../middlewares/category.middleware.js";
import { checkPermission } from "../middlewares/check-permission.middleware.js";
import express from 'express';
import { verifyToken } from "../middlewares/verify-token.middleware.js";
import { wrapRequestHandler } from "../utils/handlers.util.js";

const router = express.Router();

//create category
router.post('/category',
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(categoryMiddleware),
    wrapRequestHandler(createCategory),
);

//Get all categories
router.get('/category', wrapRequestHandler(getCategories));

//get category by id
router.get('/category/:id',wrapRequestHandler(getCategoryById));

//update category
router.patch('/category/:id', 
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(updateCategory)
)
export default router;
