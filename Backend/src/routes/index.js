import authRoutes from './auth.routes.js';
import brandRoutes from './brand.routes.js'
import cartRoutes from './cart.routes.js'
import categoryRoutes from './category.routes.js'
import express from 'express';
import orderRoutes from './order.routes.js'
import productRoutes from './product.routes.js'
import userRoutes from './user.routes.js';
import voucherRoutes from './voucher.routes.js';

const router = express.Router();

const rootRoutes = [
  authRoutes,
  userRoutes,
  brandRoutes,
  categoryRoutes,
  productRoutes,
  cartRoutes,
  voucherRoutes,
  orderRoutes,
];

rootRoutes.map((route) => {
  router.use(route);
});

export default router;