import { Router } from "express";

import { getAllProducts, getAllProductsTesting } from '../controllers/products.js';

const router = Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

export default router;