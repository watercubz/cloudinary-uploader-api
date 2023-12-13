import { Router } from "express";
import fileUpload from "express-fileupload";

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);

router.post(
  "/products",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);
export default router;
