import { checkPermission } from '../middlewares/check-permission.middleware.js';
import express from 'express';
import { productController } from '../controllers/product.controller.js';
import { productMiddleware } from '../middlewares/product.middleware.js';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handlers.util.js';

const router = express.Router();

//create product
router.post('/product', 
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(productMiddleware),
    wrapRequestHandler(productController.addProduct),
);


//get all products
router.get('/products',
    wrapRequestHandler(productController.getAllProduct)
);

//get product by id
router.get('/product/:id',
    wrapRequestHandler(productController.getProductById)
);

//get product with status
router.get('/products/:status/:deleted',
    wrapRequestHandler(productController.getProductWithStatus)
)

//router update status
router.patch('/product/:productId',
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(productController.updateStatus),
)

//update product
router.put('/product/:productId', 
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(productMiddleware),
    wrapRequestHandler(productController.updateProduct),
)

//delete product
router.post('/product/:productId',
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    wrapRequestHandler(productController.deleteProduct),
)

//xóa cứng nhiều sản phẩm
router.delete(`/product-delete-mutiple`,
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
)

//xóa mềm nhiều sản phẩm
router.patch(`/product-delete-mutiple`,
    wrapRequestHandler(verifyToken),
    wrapRequestHandler(checkPermission),
    productController.updateManyProduct,
);

export default router;